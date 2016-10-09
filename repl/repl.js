import '../shim/shim';

import * as HTMLDOM from '../htmldom/htmldom';
import {
    button, option, select, output, main, div, header, h3, p, label, input, abbr, form
} from '../htmldom/htmldom';

import { test } from '../htmldom/htmldom.test.js';

import { HTMLSerializer } from '../html/html.serializer';

import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/night.css';

import jsb from '../jsb/jsb';

import value from 'raw!./test/globals.rawjs';
import exportdefault from 'raw!./test/exportdefault.rawjs';
import importfrom from 'raw!./test/importfrom.rawjs';

import './repl.css';

const localValue = localStorage.getItem('value');
const localGlobal = localStorage.getItem('global');

const EXPORT_DEFAULT_RE = /export\s+default\s+/;
const EXPORTS_DEFAULT_RE = /exports\s*\.\s*default\s*=/;

const IMPORT_FROM_RE = /import\s*({(?:\s*\w+\s*,)*(?:\s*\w+\s*,?\s*)})\s*from\s*'(\w+)';?/;

// babel polyfill =)
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

const panel = children => div({ className : 'panel', children });

const jsInput = div({ className : 'jsinput' });

const domOutput = output({ className : 'domoutput' });

const htmlOutput = div({ className : 'htmloutput', hidden : false });

const serializer = new HTMLSerializer;

const globalbox = input({
    type : 'checkbox',
    checked : localGlobal === 'true',
    onchange : () => {
        evaluate();
        const checked = globalbox.checked;
        if(checked) testselectbox.value = '';
        else settingsform.reset();
        // localStorage.setItem('global', String(checked));
    }
});

const modebox = input({
    type : 'checkbox',
    checked : true,
    onchange : () => htmlOutput.hidden = !modebox.checked
});


let selectedOption = option({
    value,
    id : 'globals',
    selected : true,
    textContent : 'example with globals'
});

const options = [
    option({ value : '', children : '—' }),
    selectedOption,
    option({ value : exportdefault, children : 'export default example' }),
    option({ value : importfrom, children : 'full module example' }),
    test.map(fn => {
        const src = fn.toString();
        const textContent = src.match(/\({ ((?:\w+,? )+)}\)/)[1].trim();
        const elements = textContent.split(', ');
        const id = elements.join('+');
        return option({ id, textContent, value : jsb(src, { wrap_line_length: 50 }) });
    })
];

function updateTest() {
    globalbox.checked = testselectbox.value === value;
    jsEditor.setValue(testselectbox.value + '\n');
    location.hash = testselectbox.selectedOptions[0].id;
}

const testselectbox = select({
    children : options,
    onchange : () => {
        const selected = testselectbox.query('[selected]');
        if(selected) selected.removeAttribute('selected');
        const opt = testselectbox.selectedOptions[0];
        opt.setAttribute('selected', '');
        updateTest();
    }
});

const clear = () => {
    const selected = testselectbox.query('[selected]');
    if(selected) {
        selected.removeAttribute('selected');
        selected.selected = false;
    }
    jsEditor.setValue('');
    location.hash = '';
};

const clearbox = button({
    type : 'reset',
    onclick : clear,
    children : 'clear'
});

const settingsform = form({
    className : 'settings',
    children : p([
        label([globalbox, ' define globally']),
        label(testselectbox),
        label(clearbox)
    ])
});

document.body.append(
    header(h3([abbr('HTMLDOM'), ' ', abbr('REPL')])),
    main({
        className : 'repl',
        children : [
            panel([
                settingsform,
                jsInput
            ]),
            panel([
                form({
                    className : 'settings',
                    children : p(label([modebox, ' show ', abbr('HTML')]))
                }),
                domOutput,
                htmlOutput
            ])
        ]
    }));

const jsEditor = new CodeMirror(jsInput, {
    value : localValue || value,
    mode: 'javascript',
    theme: 'night',
    indentUnit: 4,
    tabSize: 2,
    indentWithTabs: true,
    electricChars: true,
    styleActiveLine: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    smartIndent: true
});

// use mutation observer to init after append
const htmlEditor = new CodeMirror(htmlOutput, {
    mode: 'htmlmixed',
    theme: 'night',
    readOnly: true
});

const hash = location.hash.replace('#', '');

if(hash && !localValue) {
    const option = document.getElementById(hash);
    if(option && 'selected' in option) {
        option.selected = true;
        option.setAttribute('selected', '');
        updateTest();
    }
}

jsEditor.on('change', () => evaluate());

const HTMLDOM_VARIABLE_NAME = 'HTMLDOM';

const snippetPart = name => name + `=${HTMLDOM_VARIABLE_NAME}.` + name;
const snippet = Object.keys(HTMLDOM).map(snippetPart).join(', ');
const imports = `var ${ snippet }`;

function evaluate() {
    const code = jsEditor.getValue().trim();
    if(code) {
        try {
            const es5 = Babel.transform(code);
            const src = globalbox.checked? [imports, es5.code].join(';\n\n') : es5.code;

            const fn = new Function('exports', HTMLDOM_VARIABLE_NAME, src);
            const exports = {
                default : () => {
                    throw Error('Module is not Exported!');
                }
            };
            // console.log(fn);

            fn(exports, HTMLDOM);

            domOutput.textContent = '';
            const node = typeof exports.default === 'function'?
                exports.default(HTMLDOM) :
                exports.default;
            domOutput.append(node);

            const htmlcode = serializer.serializeToString(node);
            htmlEditor.setValue(htmlcode);
            localStorage.setItem('value', jsEditor.getValue());
            localStorage.setItem('global', globalbox.checked);
        }
        catch(error) {
            domOutput.textContent = error;
            htmlEditor.setValue('');
        }
    } else {
        domOutput.textContent = '';
        htmlEditor.setValue('');
    }
}

evaluate();
