import {
    htmldom,
    a, abbr, address, article, aside,
    b, base, blockquote, body, br, button,
    caption, cite, code, col, colgroup,
    del, dd, details, dfn, div, dl, dt,
    em,
    ul, ol, li,
    fieldset, legend, input,
    header, nav, form,
    label, select, option,
    main, section,
    summary,
    sup, sub, i, strong, p, variable, span
} from './htmldom';

import chai from 'chai';

const {
    sinon,
    Node, HTMLElement, HTMLUnknownElement,
    HTMLAnchorElement,
    HTMLBaseElement, HTMLBodyElement, HTMLButtonElement, HTMLBRElement,
    HTMLDivElement, HTMLDListElement,
    HTMLFormElement,
    HTMLHtmlElement,
    HTMLInputElement,
    HTMLModElement,
    HTMLSelectElement, HTMLSpanElement,
    HTMLTableCaptionElement, HTMLTableColElement,
    HTMLQuoteElement,
} = window;

const { TEXT_NODE, ELEMENT_NODE } = Node;
const { assert } = chai;

describe('HTMLDOM library', () => {

    describe('Global attributes', () => {

        describe('accessKey', () => {
            const element = htmldom('a', { accessKey : 'A' });

            it('HTMLAnchorElement node created', () => {
                assert.equal(element.constructor, HTMLAnchorElement);
                assert.equal(element.tagName, 'A');
            });
            it('proper number of attributes', () => {
                assert(element.hasAttributes());
                assert.equal(element.attributes.length, 1);
            });
            it('proper `accessKey` attribute', () => {
                assert.equal(element.accessKey, 'A');
                assert.equal(element.getAttribute('accesskey'), 'A');
            });
            it('proper `outerHTML` property value', () => {
                assert.equal(element.outerHTML.toUpperCase(), '<A ACCESSKEY="A"></A>');
            });
        });

        describe('className', () => {
            const className = 'foo bar wiz';
            const element = htmldom('div', { className });

            it('proper number of attributes', () => {
                assert(element.hasAttributes(), 'has attributes');
                assert.equal(element.attributes.length, 1);
            });
            it('proper `className` attribute', () => {
                assert.equal(element.className, className);
                assert.equal(element.getAttribute('class'), className);
            });
            it('classList interface works properly', () => {
                assert(element.classList.contains('foo'), 'contains class `foo`');
                assert(element.classList.contains('bar'), 'contains class `bar`');
                assert(element.classList.contains('wiz'), 'contains class `wiz`');
            });
            it('document finds it', () => {
                document.body.appendChild(element);
                assert.equal(document.getElementsByClassName('foo')[0], element);
                assert.equal(document.getElementsByClassName('bar')[0], element);
                assert.equal(document.getElementsByClassName('wiz')[0], element);
                document.body.removeChild(element);
            });
            it('proper outerHTML property value', () => {
                assert.equal(element.outerHTML, '<div class="foo bar wiz"></div>');
            });
        });

        describe('contentEditable', () => {
            const element = htmldom('unknown', { contentEditable : 'true' });

            it('HTMLUnknownElement node created', () => {
                assert.equal(element.constructor, HTMLUnknownElement);
                assert.equal(element.tagName, 'UNKNOWN');
            });
            it('proper number of attributes', () => {
                assert(element.hasAttributes());
                assert.equal(element.attributes.length, 1);
            });
            it('proper `contentEditable` attribute', () => {
                assert.equal(element.contentEditable, 'true');
                assert.equal(element.getAttribute('contenteditable'), 'true');
            });
            it('proper `outerHTML` property value', () => {
                assert.equal(element.outerHTML.toLowerCase(),
                    '<unknown contenteditable="true"></unknown>');
            });
        });

        describe('dir', () => {
            const element = htmldom('button', { dir : 'rtl' });

            it('HTMLButtonElement node created', () => {
                assert.equal(element.constructor, HTMLButtonElement);
                assert.equal(element.tagName, 'BUTTON');
            });
            it('proper number of attributes', () => {
                assert(element.hasAttributes());
                assert.equal(element.attributes.length, 1);
            });
            it('proper `dir` attribute', () => {
                assert.equal(element.dir, 'rtl');
                assert.equal(element.getAttribute('dir'), 'rtl');
            });
            it('proper `outerHTML` property value', () => {
                assert.equal(element.outerHTML, '<button dir="rtl"></button>');
            });
        });

        describe('draggable', () => {
            const element = htmldom('header', { draggable : true });

            it('HTMLElement node created', () => {
                assert.equal(element.constructor, HTMLElement);
                assert.equal(element.tagName, 'HEADER');
            });
            it('proper number of attributes', () => {
                assert(element.hasAttributes());
                assert.equal(element.attributes.length, 1);
            });
            it('proper `draggable` attribute', () => {
                assert.equal(element.draggable, true);
                assert.equal(element.getAttribute('draggable'), 'true');
            });
            it('proper `outerHTML` property value', () => {
                assert.equal(element.outerHTML, '<header draggable="true"></header>');
            });
        });

        describe('hidden', () => {
            const element = htmldom('input', { hidden : true });

            it('HTMLInputElement node created', () => {
                assert.equal(element.constructor, HTMLInputElement);
                assert.equal(element.tagName, 'INPUT');
            });
            it('proper number of attributes', () => {
                assert(element.hasAttributes());
                assert.equal(element.attributes.length, 1);
            });
            it('proper `hidden` attribute', () => {
                assert.equal(element.hidden, true);
                assert.equal(element.getAttribute('hidden'), '');
            });
            it('proper `outerHTML` property value', () => {
                assert.equal(element.outerHTML, '<input hidden="">');
            });
        });

        describe('id', () => {
            const id = 'element_0';
            const element = htmldom('span', { id });

            it('proper number of attributes', () => {
                assert(element.hasAttributes(), 'has attributes');
                assert.equal(element.attributes.length, 1);
            });
            it('proper `id` attribute', () => {
                assert.equal(element.id, id);
            });
            it('document finds it', () => {
                document.body.appendChild(element);
                assert.equal(document.getElementById(id), element);
                document.body.removeChild(element);
            });
            it('proper outerHTML property value', () => {
                assert.equal(element.outerHTML, '<span id="element_0"></span>');
            });
        });

        describe('innerHTML', () => {
            const element = htmldom('body', { innerHTML : '<span class="box"></span>' });

            it('HTMLBodyElement node created', () => {
                assert.equal(element.constructor, HTMLBodyElement);
                assert.equal(element.tagName, 'BODY');
            });
            it('proper number of child nodes', () => {
                assert(element.hasChildNodes());
                assert.equal(element.childNodes.length, 1);
            });
            it('proper child node', () => {
                const child = element.firstChild;
                assert.equal(child.constructor, HTMLSpanElement);
                assert.equal(child.outerHTML, '<span class="box"></span>');
            });
            it('proper `outerHTML` property value', () => {
                assert.equal(element.outerHTML, '<body><span class="box"></span></body>');
            });
        });

        describe('lang', () => {
            const element = htmldom('html', { lang : 'ru' });

            it('HTMLHtmlElement node created', () => {
                assert.equal(element.constructor, HTMLHtmlElement);
                assert.equal(element.tagName, 'HTML');
            });
            it('proper number of attributes and child nodes', () => {
                assert(element.hasAttributes());
                assert.equal(element.attributes.length, 1);
            });
            it('has proper lang attribute set', () => {
                assert.equal(element.lang, 'ru');
                assert.equal(element.getAttribute('lang'), 'ru');
            });
            it('proper outerHTML property value', () => {
                assert.equal(element.outerHTML, '<html lang="ru"></html>');
            });
        });

        describe('tabIndex', () => {
            const element = htmldom('form', { tabIndex : 0 });

            it('HTMLFormElement node created', () => {
                assert.equal(element.constructor, HTMLFormElement);
                assert.equal(element.tagName, 'FORM');
            });
            it('proper number of attributes', () => {
                assert(element.hasAttributes());
                assert.equal(element.attributes.length, 1);
            });
            it('proper `tabIndex` attribute', () => {
                assert.equal(element.tabIndex, 0);
                assert.equal(element.getAttribute('tabindex'), '0');
            });
            it('proper `outerHTML` property value', () => {
                assert.equal(element.outerHTML.toLowerCase(), '<form tabindex="0"></form>');
            });
        });

        describe('textContent', () => {
            const element = htmldom('span', { textContent : 'element textContent' });
            it('proper number of child nodes', () => {
                assert(element.hasChildNodes(), 'has child nodes');
                assert.equal(element.childNodes.length, 1);
            });
            it('proper children', () => {
                assert.equal(element.firstChild.constructor, Text);
                assert.equal(element.firstChild.textContent, 'element textContent');
                assert.equal(element.textContent, 'element textContent');
            });
        });

        describe('title', () => {
            const element = htmldom('select', { title : 'Select without options' });

            it('HTMLSelectElement node created', () => {
                assert.equal(element.constructor, HTMLSelectElement);
                assert.equal(element.tagName, 'SELECT');
            });
            it('proper number of attributes', () => {
                assert(element.hasAttributes());
                assert.equal(element.attributes.length, 1);
            });
            it('proper `title` attribute', () => {
                assert.equal(element.title, 'Select without options');
                assert.equal(element.getAttribute('title'), 'Select without options');
            });
            it('proper `outerHTML` property value', () => {
                assert.equal(element.outerHTML, '<select title="Select without options"></select>');
            });
        });
    });

    describe('Global event handlers', () => {
        it('onclick', () => {
            const onclick = sinon.spy();
            const element = htmldom('button', { onclick });

            assert(onclick.notCalled);
            element.click();
            assert(onclick.calledOnce);
            element.click();
            assert(onclick.calledTwice);
        });
        it('click listener', () => {
            const listener = sinon.spy();
            const element = htmldom('button');

            element.addEventListener('click', listener);
            document.body.appendChild(element);
            assert(listener.notCalled);
            element.click();
            assert(listener.calledOnce);
            element.click();
            assert(listener.calledTwice);
            document.body.removeChild(element);
        });
    });

    describe('Single elements', () => {
        it('a', () => {
            const node = a({
                href : 'https://www.w3.org/TR/html',
                target : '_parent',
                download : 'spec.html',
                ping : 'https://www.w3.org',
                rel : 'external help',
                hreflang : 'en',
                type : 'text/html',
                referrerPolicy : 'no-referrer',
                children : 'HTML5 specification'
            });
            assert.equal(node.tagName, 'A');
            assert.equal(node.constructor, HTMLAnchorElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 8);

            assert.equal(node.href, 'https://www.w3.org/TR/html');
            assert.equal(node.target, '_parent');
            assert.equal(node.download, 'spec.html');
            assert.equal(node.ping, 'https://www.w3.org');
            assert.equal(node.rel, 'external help');
            assert.equal(node.hreflang, 'en');
            assert.equal(node.type, 'text/html');
            assert.equal(node.referrerPolicy, 'no-referrer');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);

            assert.equal(node.textContent, 'HTML5 specification');
        });
        it('abbr', () => {
            const node = abbr({
                title : 'Hyper text markup language',
                children : 'HTML'
            });
            assert.equal(node.tagName, 'ABBR');
            assert.equal(node.constructor, HTMLElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 1);
            assert.equal(node.title, 'Hyper text markup language');
            assert.equal(node.textContent, 'HTML');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);

            assert.equal(node.outerHTML, '<abbr title="Hyper text markup language">HTML</abbr>');
        });
        it('address', () => {
            const node = address('test@example.com');

            assert.equal(node.tagName, 'ADDRESS');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert.equal(node.textContent, 'test@example.com');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);

            assert.equal(node.outerHTML, '<address>test@example.com</address>');
        });
        it('article', () => {
            const node = article('Hello world!');

            assert.equal(node.tagName, 'ARTICLE');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert.equal(node.textContent, 'Hello world!');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);

            assert.equal(node.outerHTML, '<article>Hello world!</article>');
        });
        it('aside', () => {
            const node = aside('Your advert may be here!');

            assert.equal(node.tagName, 'ASIDE');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert.equal(node.textContent, 'Your advert may be here!');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);

            assert.equal(node.outerHTML, '<aside>Your advert may be here!</aside>');
        });
        it('b', () => {
            const node = b('warning');

            assert.equal(node.tagName, 'B');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert.equal(node.textContent, 'warning');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);

            assert.equal(node.outerHTML, '<b>warning</b>');
        });
        it('base', () => {
            const node = base({ href : 'https://w3.org', target : '_top' });

            assert.equal(node.tagName, 'BASE');
            assert.equal(node.constructor, HTMLBaseElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 2);
            assert(/^https:\/\/w3\.org\/?$/.test(node.href), 'proper href');
            assert.equal(node.target, '_top');

            assert(!node.hasChildNodes(), 'has no child nodes');
        });
        it('blockquote', () => {
            const node = blockquote({
                cite : 'https://html.spec.whatwg.org/#the-blockquote-element',
                children : 'The blockquote element represents a section that is quoted from another source.'
            });
            assert.equal(node.tagName, 'BLOCKQUOTE');
            assert.equal(node.constructor, HTMLQuoteElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 1);
            assert.equal(node.cite, 'https://html.spec.whatwg.org/#the-blockquote-element');
            assert.equal(node.textContent, 'The blockquote element represents a section that is quoted from another source.');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);

            assert.equal(node.outerHTML,
                '<blockquote ' +
                    'cite="https://html.spec.whatwg.org/#the-blockquote-element">' +
                    'The blockquote element represents a section that is quoted from another source.' +
                '</blockquote>');
        });
        it('body', () => {
            const node = body('Test');
            assert.equal(node.tagName, 'BODY');
            assert.equal(node.constructor, HTMLBodyElement);

            assert(!node.hasAttributes(), 'has no attributes');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Test');

            assert.equal(node.outerHTML, '<body>Test</body>');
        });
        it('br', () => {
            const node = br();
            assert.equal(node.tagName, 'BR');
            assert.equal(node.constructor, HTMLBRElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(!node.hasChildNodes(), 'has no child nodes');

            assert(/^<br\/?>$/.test(node.outerHTML), 'proper outerHTML');
        });
        it('button', () => {
            const node = button({
                autofocus : true,
                disabled : true,
                formAction : '/api/save',
                formEnctype : 'multipart/form-data',
                formMethod : 'POST',
                formNoValidate : true,
                formTarget : '_top',
                name : 'savebutton',
                type : 'button',
                value : 'OK',
                // menu : '???',
                children : 'Save'
            });
            assert.equal(node.tagName, 'BUTTON');
            assert.equal(node.constructor, HTMLButtonElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 10);
            assert.equal(node.autofocus, true);
            assert.equal(node.disabled, true);
            assert(/\/api\/save\/?$/.test(node.formAction), 'proper formAction');
            assert.equal(node.formEnctype, 'multipart/form-data');
            assert.equal(node.formMethod, 'post');
            assert.equal(node.formNoValidate, true);
            assert.equal(node.formTarget, '_top');
            assert.equal(node.name, 'savebutton');
            assert.equal(node.type, 'button');
            assert.equal(node.value, 'OK');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Save');
        });
        it('caption', () => {
            const node = caption('Table 1. Total score obtained from rolling two six-sided dice.');
            assert.equal(node.tagName, 'CAPTION');
            assert.equal(node.constructor, HTMLTableCaptionElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Table 1. Total score obtained from rolling two six-sided dice.');

            assert.equal(node.outerHTML, '<caption>Table 1. Total score obtained from rolling two six-sided dice.</caption>');
        });
        it('cite', () => {
            const node = cite('Fight club');
            assert.equal(node.tagName, 'CITE');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Fight club');

            assert.equal(node.outerHTML, '<cite>Fight club</cite>');
        });
        it('code', () => {
            const node = code('++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.');
            assert.equal(node.tagName, 'CODE');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, '++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.');

            assert.equal(node.outerHTML, '<code>++++++++++[&gt;+++++++&gt;++++++++++&gt;+++&gt;+&lt;&lt;&lt;&lt;-]&gt;++.&gt;+.+++++++..+++.&gt;++.&lt;&lt;+++++++++++++++.&gt;.+++.------.--------.&gt;+.&gt;.</code>');
        });
        it('col', () => {
            const node = col({ span : 3 });
            assert.equal(node.tagName, 'COL');
            assert.equal(node.constructor, HTMLTableColElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 1);
            assert.equal(node.span, 3);

            assert(!node.hasChildNodes(), 'has no child nodes');

            assert.equal(node.outerHTML, '<col span="3">');
        });
        it('colgroup', () => {
            const node = colgroup({ span : 5 });
            assert.equal(node.tagName, 'COLGROUP');
            assert.equal(node.constructor, HTMLTableColElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 1);
            assert.equal(node.span, 5);

            assert(!node.hasChildNodes(), 'has no child nodes');

            assert.equal(node.outerHTML, '<colgroup span="5"></colgroup>');
        });
        it('dd', () => {
            const node = dd('part of a term-description group in a description list');
            assert.equal(node.tagName, 'DD');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'part of a term-description group in a description list');

            assert.equal(node.outerHTML, '<dd>part of a term-description group in a description list</dd>');
        });
        it('del', () => {
            const node = del({
                cite : '/edits/r192',
                dateTime : '2011-05-02 14:23Z',
                children : '10/10'
            });
            assert.equal(node.tagName, 'DEL');
            assert.equal(node.constructor, HTMLModElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 2);
            assert(/\/edits\/r192$/.test(node.cite), 'proper cite attribute');
            assert.equal(node.dateTime, '2011-05-02 14:23Z');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, '10/10');
        });
        it('div', () => {
            const node = div('Abstract grouping block-level container');
            assert.equal(node.tagName, 'DIV');
            assert.equal(node.constructor, HTMLDivElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Abstract grouping block-level container');

            assert.equal(node.outerHTML, '<div>Abstract grouping block-level container</div>');
        });
        it('dl', () => {
            const node = dl();
            assert.equal(node.tagName, 'DL');
            assert.equal(node.constructor, HTMLDListElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(!node.hasChildNodes(), 'has no child nodes');

            assert.equal(node.outerHTML, '<dl></dl>');
        });
        it('dt', () => {
            const node = dt('the dt element');
            assert.equal(node.tagName, 'DT');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert(node.childNodes.length, 1);
            assert(node.textContent, 'the dt element');

            assert.equal(node.outerHTML, '<dt>the dt element</dt>');
        });
        it('em', () => {
            const node = em('Amazing!');
            assert.equal(node.tagName, 'EM');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert(node.childNodes.length, 1);
            assert(node.textContent, 'Amazing!');

            assert.equal(node.outerHTML, '<em>Amazing!</em>');
        });
    });

    describe('Various structures', () => {
        describe('Authorization fieldset', () => {
            it('properly build form authorization fieldset', () => {
                const element =
                    fieldset([
                        legend('Authorization'),
                        input({ type : 'email' }),
                        input({ type : 'password' })
                    ]);
                assert.equal(element.outerHTML,
                    '<fieldset>' +
                        '<legend>Authorization</legend>' +
                        '<input type="email">' +
                        '<input type="password">' +
                    '</fieldset>');
            });
        });
        describe('Header with navigation', () => {
            it('properly build header with navigational links inside', () => {
                const element =
                    header(nav([
                        a({ href : '/lib.html', textContent : 'Library' }),
                        a({ href : '/spec.html', textContent : 'Specifications' }),
                        a({ href : '/home.html', textContent : 'Go home' })
                    ]));
                assert.equal(element.outerHTML,
                    '<header><nav>' +
                        '<a href="/lib.html">Library</a>' +
                        '<a href="/spec.html">Specifications</a>' +
                        '<a href="/home.html">Go home</a>' +
                    '</nav></header>');
            });
        });
        describe('Select box widget', () => {
            let widget, selected;
            const element =
                label([
                    'Select technology ',
                    widget = select([
                        option('DOM'),
                        option('XML'),
                        selected = option({ selected : true, textContent : 'HTML' }),
                        option('SVG'),
                        option('MathML'),
                        option('WAI-ARIA')
                    ])
                ]);
            it('properly build label with select box option list inside', () => {
                assert.equal(element.outerHTML,
                    '<label>' +
                        'Select technology ' +
                        '<select>' +
                            '<option>DOM</option>' +
                            '<option>XML</option>' +
                            '<option>HTML</option>' +
                            '<option>SVG</option>' +
                            '<option>MathML</option>' +
                            '<option>WAI-ARIA</option>' +
                        '</select>' +
                    '</label>');
            });
            it('proper selected option reference', () => {
                assert.equal(widget.selectedOptions.length, 1);
                assert.equal(widget.selectedOptions[0], selected);
            });
        });
        describe('Search form', () => {
            it('properly build form with search input and submit button inside', () => {
                const element =
                    form({
                        attrset : { role : 'search' },
                        children : [
                            input({ type : 'search' }),
                            button('Search')
                        ]
                    });
                assert.equal(element.outerHTML,
                    '<form role="search">' +
                        '<input type="search">' +
                        '<button>Search</button>' +
                    '</form>');
            });
        });
        describe('Checkboxes', () => {
            let simple, checked, indeterminate;
            const element =
                div([
                    simple = input({ type : 'checkbox' }),
                    checked = input({ type : 'checkbox', checked : true }),
                    indeterminate = input({ type : 'checkbox', indeterminate : true })
                ]);
            it('proper HTML rendered', () => {
                assert.equal(element.outerHTML,
                    '<div>' +
                        '<input type="checkbox">' +
                        '<input type="checkbox">' +
                        '<input type="checkbox">' +
                    '</div>');
            });
            it('check current state of widgets', () => {
                assert(!simple.checked);
                assert(checked.checked);
                assert(indeterminate.indeterminate);
            });
            it('proper initial state assignment', () => {
                const sample = input({ type : 'checkbox', attrset : { checked : '' } });
                const container = div({ innerHTML : '<input type=checkbox checked>' });
                assert(sample.isEqualNode(container.firstChild));
            });
        });
        describe('Various list examples', () => {
            it('properly build ul + li', () => {
                assert.equal(
                    ul([
                        li('Ampeg'),
                        li('Fender'),
                        li('Warwick')
                    ]).outerHTML,
                    '<ul>' +
                        '<li>Ampeg</li>' +
                        '<li>Fender</li>' +
                        '<li>Warwick</li>' +
                    '</ul>'
                );
            });
            it('properly build ol + li', () => {
                assert.equal(
                    ol([
                        li('Moscow'),
                        li('Amsterdam'),
                        li('New York')
                    ]).outerHTML,
                    '<ol>' +
                        '<li>Moscow</li>' +
                        '<li>Amsterdam</li>' +
                        '<li>New York</li>' +
                    '</ol>'
                );
            });
            it('properly build dl + dt + dd', () => {
                assert.equal(
                    dl([
                        dt('DOM'),
                        dd('Document object model'),
                        dt('XML'),
                        dd('Extensible markup language'),
                        dt('HTML'),
                        dd('Hyper text markup language')
                    ]).outerHTML,
                    '<dl>' +
                        '<dt>DOM</dt>' +
                        '<dd>Document object model</dd>' +
                        '<dt>XML</dt>' +
                        '<dd>Extensible markup language</dd>' +
                        '<dt>HTML</dt>' +
                        '<dd>Hyper text markup language</dd>' +
                    '</dl>'
                );
            });
        });
        describe('Details with summary', () => {
            it('properly build widget', () => {
                const element =
                    details([
                        summary('Show details'),
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
                        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    ]);
                assert.equal(element.outerHTML,
                    '<details>' +
                        '<summary>Show details</summary>' +
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
                    '</details>');
            });
        });
        describe('Other', () => {
            it('property build DOM fragment', () => {
                const element =
                    main([
                        section(dfn('htmlmodule — DOM assembler library')),
                        section(p([
                            variable('var'),
                            ' — is reserved JavaScript keyword, ',
                            'so we use `variable` function name instead.'
                        ])),
                        section([
                            sup('supertext'),
                            sub('subtext'),
                            i('alternative voice'),
                            strong('important!')
                        ])
                    ]);
                assert.equal(element.outerHTML,
                    '<main>' +
                        '<section><dfn>' +
                            'htmlmodule — DOM assembler library' +
                        '</dfn></section>' +
                        '<section><p>' +
                            '<var>var</var>' +
                            ' — is reserved JavaScript keyword, ' +
                            'so we use `variable` function name instead.' +
                        '</p></section>' +
                        '<section>' +
                            '<sup>supertext</sup>' +
                            '<sub>subtext</sub>' +
                            '<i>alternative voice</i>' +
                            '<strong>important!</strong>' +
                        '</section>' +
                    '</main>');
            });
            it('htmldom, span', () => {
                const node1 = htmldom('span', {
                    id : '00101',
                    className :'fa fi fu',
                    tabIndex : 0,
                    children : ['a', span('a b'), 'b']
                });
                const node2 = span({
                    id : '00101',
                    className :'fa fi fu',
                    tabIndex : 0,
                    children : ['a', span('a b'), 'b']
                });
                [node1, node2].forEach(node => {
                    assert.equal(node.nodeType, ELEMENT_NODE);
                    assert.equal(node.tagName, 'SPAN');
                    assert.equal(node.constructor, HTMLSpanElement);
                    assert.equal(node.attributes.length, 3);
                    assert.equal(node.id, '00101');
                    assert.equal(node.className, 'fa fi fu');
                    assert.equal(node.tabIndex, 0);
                    assert.equal(node.children.length, 1);
                    assert.equal(node.childNodes.length, 3);
                    assert.equal(node.childNodes[0].nodeType, TEXT_NODE);
                    assert.equal(node.childNodes[1].constructor, HTMLSpanElement);
                    assert.equal(node.childNodes[2].textContent, 'b');
                });
                assert(node1.isEqualNode(node2), 'htmldom() and span() work differently');
            });
        });
    });

});
