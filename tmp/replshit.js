// import htmlmodule stuff
import * as htmlmodule from '../../lib';
import { button, option, select, output, main, div, p, label, input, abbr, form }
from '../../lib';

import { HTMLSerializer } from '../../util/util.htmlserializer';

// import local components
import { siteheading } from './siteheading';
import { sitenav } from './sitenav';
import { codeedit, markupview } from './codemirror-preset';

// import tests
import { globaldefined, exportdefault, importfrom, testcase } from './replcase';

/* ================================================================ */

const OBJECT_DESTRUCTURING_RE = /\({\s((?:\w+\s*,?\s*)+)}\)/;

/* ================================================================ */

function updateTest() {
    const selected = testselectbox.selectedOptions[0];
    if(selected) {
        location.hash = selected.id;
        globalbox.checked = selected.dataset.global === 'true';
        codeeditmirror.setValue(selected.value + '\n');
    }
}

/* ================================================================ */

const checked = localStorage.getItem('global') !== 'false';
const globalbox = input({
    type : 'checkbox',
    checked,
    attrset : { checked : checked? '' : undefined },
    onchange : ({ target }) => {
        evaluate();
        const checked = target.checked;
        if(checked) testselectbox.value = '';
    }
});

const testselectbox = select({
    onchange : () => {
        const selected = testselectbox.query('[selected]');
        if(selected) selected.removeAttribute('selected');
        const opt = testselectbox.selectedOptions[0];
        if(opt) opt.setAttribute('selected', '');
        updateTest();
    },
    children : [
        option({
            value : '',
            dataset : { global : 'true' },
            children : '—'
        }),
        option({
            value : globaldefined,
            id : 'example-with-globals',
            selected : true,
            dataset : { global : 'true' },
            children : 'example with globals'
        }),
        option({
            value : exportdefault,
            id : 'export-default-example',
            children : 'export default example'
        }),
        option({
            value : importfrom,
            id : 'full-module-example',
            children : 'full module example'
        }),
        testcase.map(({ src }) => {
            const match = src.match(OBJECT_DESTRUCTURING_RE);
            const textContent = match? match[1].trim() : '?';
            const elements = textContent.split(', ');
            const id = elements.join('+');
            return option({ id, textContent, value : src });
        })
    ]
});

/* ================================================================ */

const clearbutton = button({
    type : 'button',
    onclick : () => {
        const selected = testselectbox.query('[selected]');
        if(selected) {
            selected.removeAttribute('selected');
            selected.selected = false;
        }
        codeeditmirror.setValue('');
        // caseselectbox.value = '';
        globalbox.checked = true;
        location.hash = '';
        localStorage.removeItem('value');
        localStorage.removeItem('global');
        localStorage.removeItem('option');
    },
    children : 'clear'
});

/* ================================================================ */

const markupmodebox = input({
    type : 'checkbox',
    checked : localStorage.getItem('markupmode') !== 'false',
    onchange : ({ target : { checked }}) => {
        replmachine.classList.toggle('markupmode', checked);
        localStorage.setItem('markupmode', String(checked));
        if(checked) evaluate();
    }
});

/* ================================================================ */

const settingsform = form({
    className : 'settings',
    children : p([
        label([globalbox, ' define globally']),
        label(testselectbox),
        label(clearbutton)
    ])
});

const codeinput = div({ className : 'jsinput' });

const domoutput = output({ className : 'domoutput' });

const markupoutput = div({ className : 'htmloutput', hidden : false });

/* ================================================================ */

const replmachine = main({
    className : 'replmachine markupmode',
    children : [
        div({
            className : 'panel',
            children : [
                settingsform,
                codeinput
            ]
        }),
        div({
            className : 'panel',
            children : [
                form({
                    className : 'settings',
                    children : p(label([markupmodebox, ' show markup']))
                }),
                domoutput,
                markupoutput
            ]
        })
    ]
});

/* ================================================================ */

const app = div([
    siteheading(
        abbr({
            title : 'read-eval-print-loop',
            style : { cursor : 'help' },
            children : 'repl'
        })),
    replmachine,
    sitenav()
]);

/* ================================================================ */

const localvalue = localStorage.getItem('value');
const localoption = localStorage.getItem('option');
const hash = location.hash.replace('#', '');

const init = () => {
    if(localvalue !== null && localoption !== null) {
        const option = testselectbox.options[localoption];
        if(option) option.selected = true;
    } else
    if(hash) {
        const option = document.getElementById(hash);
        if(option && 'selected' in option) {
            option.selected = true;
            option.setAttribute('selected', '');
            updateTest();
        }
    }
    markupoutput.hidden = !markupmodebox.checked;
    document.body.append(app);
}

init();

const codeeditmirror = codeedit(codeinput, localvalue || globaldefined);
codeeditmirror.on('change', () => evaluate());

const markupviewmirror = markupview(markupoutput);

evaluate();



const HTMLMODULE_VARIABLE_NAME = 'htmlmodule';

const snippetpart = name => name + '=' + HTMLMODULE_VARIABLE_NAME + '.' + name;
const IMPORTS_SNIPPET_PART = Object.keys(htmlmodule).map(snippetpart).join(', ');
const IMPORTS_SNIPPET = 'var ' + IMPORTS_SNIPPET_PART;

const indexOf = Array.prototype.indexOf;
const serializer = new HTMLSerializer;

/* ================================================================ */

const EXPORT_DEFAULT_RE = /export\s+default\s+/;
const EXPORTS_DEFAULT_RE = /exports\s*\.\s*default\s*=/;
const IMPORT_FROM_RE = /import\s*({(?:\s*\w+\s*,)*(?:\s*\w+\s*,?\s*)})\s*from\s*'(\w+)';?/;

/* ================================================================ */

if(!window.Babel) {
    window.Babel = {
        transform : code => {
            code = code.replace(IMPORT_FROM_RE, 'const $1 = $2;');
            if(EXPORT_DEFAULT_RE.test(code)) {
                code = code.replace(EXPORT_DEFAULT_RE, 'exports.default = ');
            }
            else if(!EXPORTS_DEFAULT_RE.test(code)) {
                code = 'exports.default = ' + code;
            }
            return { code };
        }
    }
}


function evaluate() {
    const code = codeeditmirror.getValue().trim();
    if(code) {
        try {
            const es5 = Babel.transform(code);
            const src = globalbox.checked?
                [IMPORTS_SNIPPET, es5.code].join(';\n\n') :
                es5.code;

            const fn = new Function('exports', HTMLMODULE_VARIABLE_NAME, src);
            const exports = {
                default : () => {
                    throw Error('Module is not Exported!')
                }
            }
            fn(exports, htmlmodule);

            const node = typeof exports.default === 'function'?
                exports.default(htmlmodule) :
                exports.default;

            const firstChild = domoutput.firstChild;
            if(firstChild) firstChild.replaceWith(node);
            else domoutput.append(node);

            const htmlcode = serializer.serializeToString(node);
            markupviewmirror.setValue(htmlcode);

            localStorage.setItem('value', codeeditmirror.getValue());
            localStorage.setItem('global', globalbox.checked);
            localStorage.setItem('option',
                String(indexOf.call(testselectbox.options,
                    testselectbox.selectedOptions[0])));
        }
        catch(error) {
            domoutput.textContent = error;
            markupviewmirror.setValue('');
        }
    } else {
        domoutput.textContent = '';
        markupviewmirror.setValue('');
    }
}
