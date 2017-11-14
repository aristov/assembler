import {
    HTMLElementAssembler,
    a, audio, abbr, address, area, article, aside,
    b, base, bdi, bdo, blockquote, body, br, button,
    canvas, caption, cite, code, col, colgroup,
    datalist, del, dd, details, dfn, div,
    dl, dt,
    em, embed,
    fieldset, figcaption, figure, footer,
    form,
    h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html,
    i, iframe, img, input, ins,
    kbd,
    label, legend, li, link,
    main, map, mark, meta,
    nav, noscript,
    object, ol, option, optgroup, output,
    p, param, picture, pre, progress,
    q,
    ruby, rt, rp,
    s, samp, script, section, select, small, source, span, sub,
    summary, sup, strong, style,
    table, textarea, tbody, td, tfoot, th, thead, title, tr, track,
    u, ul,
    variable, video,
    wbr
} from '../lib/index'

import chai from 'chai'

const {
    CustomEvent,
    Node,
    HTMLElement,
    HTMLAnchorElement,
    HTMLAreaElement,
    HTMLAudioElement,
    HTMLBaseElement,
    HTMLBlockElement, // msie11
    HTMLBodyElement,
    HTMLButtonElement,
    HTMLBRElement,
    HTMLCanvasElement,
    HTMLDataListElement,
    HTMLDivElement,
    HTMLDListElement,
    HTMLEmbedElement,
    HTMLFieldSetElement,
    HTMLFormElement,
    HTMLHeadingElement,
    HTMLHeadElement,
    HTMLHRElement,
    HTMLHtmlElement,
    HTMLIFrameElement,
    HTMLImageElement,
    HTMLInputElement,
    HTMLLabelElement,
    HTMLLegendElement,
    HTMLLinkElement,
    HTMLLIElement,
    HTMLMapElement,
    HTMLMetaElement,
    HTMLModElement,
    HTMLObjectElement,
    HTMLOListElement,
    HTMLOptGroupElement,
    HTMLOptionElement,
    HTMLParamElement,
    HTMLParagraphElement,
    HTMLPictureElement,
    HTMLPreElement,
    HTMLProgressElement,
    HTMLScriptElement,
    HTMLSelectElement,
    HTMLSpanElement,
    HTMLStyleElement,
    HTMLSourceElement,
    HTMLTableCaptionElement,
    HTMLTableColElement,
    HTMLTableElement,
    HTMLTextAreaElement,
    HTMLTitleElement,
    HTMLTrackElement,
    HTMLQuoteElement,
    HTMLVideoElement,
    HTMLUnknownElement,
    document
} = window

const { TEXT_NODE, ELEMENT_NODE } = Node
const { assert } = chai

describe('htmlmodule library', () => {

    describe('HTMLElementAssembler', () => {
        describe('Simple empty span', () => {
            const test = new HTMLElementAssembler({ localName : 'span' })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'SPAN')
            })
            it('proper inheritance', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has no child nodes', () => {
                assert.isFalse(node.hasChildNodes(), 'has no child nodes')
            })
        })
        describe('Unknown element', () => {
            it('unknown', () => {
                const node = new HTMLElementAssembler({ localName : 'unknown' }).node
                assert.equal(node.tagName, 'UNKNOWN')
                assert(
                    node instanceof HTMLUnknownElement,
                    node + ' instance of ' + HTMLUnknownElement)
            })
            it('foobar', () => {
                const node = new HTMLElementAssembler({ localName : 'foobar' }).node
                assert.equal(node.tagName, 'FOOBAR')
                assert(
                    node instanceof HTMLUnknownElement,
                    node + ' instance of ' + HTMLUnknownElement)
            })
            it('ari', () => {
                const node = new HTMLElementAssembler({ localName : 'ari' }).node
                assert.equal(node.tagName, 'ARI')
                assert(
                    node instanceof HTMLUnknownElement,
                    node + ' instance of ' + HTMLUnknownElement)
            })
        })
    })

    describe('Global attributes', () => {

        describe('id', () => {
            const id = 'element_0'
            const test = div({ id })

            const node = test.node

            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('attributes length', () => {
                assert.equal(node.attributes.length, 1)
            })
            it('id', () => {
                assert.equal(node.id, id)
            })
            it('id attribute', () => {
                assert.equal(node.getAttribute('id'), id)
            })
            it('document finds it', () => {
                document.body.appendChild(node)
                assert.equal(document.getElementById(id), node)
                document.body.removeChild(node)
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<div id="element_0"></div>')
            })
        })

        describe('className', () => {
            const className = 'foo bar wiz'
            const test = span({ className })

            const node = test.node

            it('className', () => {
                assert.equal(node.className, className)
            })
            it('class attribute', () => {
                assert.equal(node.getAttribute('class'), className)
            })
            describe('classList', () => {
                it('contains "foo"', () => {
                    assert(node.classList.contains('foo'), 'contains class `foo`')
                })
                it('contains "bar"', () => {
                    assert(node.classList.contains('bar'), 'contains class `bar`')
                })
                it('contains "wiz"', () => {
                    assert(node.classList.contains('wiz'), 'contains class `wiz`')
                })
            })
            it('document finds it', () => {
                document.body.appendChild(node)
                assert.equal(document.getElementsByClassName('foo')[0], node)
                assert.equal(document.getElementsByClassName('bar')[0], node)
                assert.equal(document.getElementsByClassName('wiz')[0], node)
                document.body.removeChild(node)
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<span class="foo bar wiz"></span>')
            })
        })

        describe('HTMLElement attributes', () => {
            const test = div({
                accessKey : 'A',
                // contentEditable : 'true',
                dir : 'rtl',
                // draggable : true,
                hidden : true,
                lang : 'ru',
                tabIndex : 0,
                title : 'HTMLElement title',
            })
            const node = test.node
            it('has attributes', () => {
                assert(node.hasAttributes())
            })
            it('attributes length', () => {
                // assert.equal(node.attributes.length, 8)
                assert.equal(node.attributes.length, 6)
            })
            it('accessKey', () => {
                assert.equal(node.accessKey, 'A')
            })
            it('accesskey attribute', () => {
                assert.equal(node.getAttribute('accesskey'), 'A')
            })
            it.skip('contentEditable', () => {
                assert.equal(node.contentEditable, 'true')
            })
            it.skip('contenteditable attribute', () => {
                assert.equal(node.getAttribute('contenteditable'), 'true')
            })
            it('dir', () => {
                assert.equal(node.dir, 'rtl')
            })
            it('dir attribute', () => {
                assert.equal(node.getAttribute('dir'), 'rtl')
            })
            it.skip('draggable', () => {
                assert.equal(node.draggable, true)
            })
            it.skip('draggable attribute', () => {
                assert.equal(node.getAttribute('draggable'), 'true')
            })
            it('hidden', () => {
                assert.equal(node.hidden, true)
            })
            it('hidden attribute', () => {
                assert.equal(node.getAttribute('hidden'), '')
            })
            it('lang', () => {
                assert.equal(node.lang, 'ru')
            })
            it('lang attribute', () => {
                assert.equal(node.getAttribute('lang'), 'ru')
            })
            it('tabIndex', () => {
                assert.equal(node.tabIndex, 0)
            })
            it('tabindex attribute', () => {
                assert.equal(node.getAttribute('tabindex'), '0')
            })
            it('title', () => {
                assert.equal(node.title, 'HTMLElement title')
            })
            it('title attribute', () => {
                assert.equal(node.getAttribute('title'), 'HTMLElement title')
            })
        })

        describe('textContent', () => {
            const test = span({ textContent : 'Arbitrary >< plain >< text' })

            const node = test.node

            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Arbitrary >< plain >< text')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<span>Arbitrary &gt;&lt; plain &gt;&lt; text</span>')
            })
        })

        describe('innerHTML', () => {
            const test = div({ innerHTML : '<span>1</span>2<span>3</span>' })

            const node = test.node

            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 3)
            })
            it('textContent', () => {
                assert.equal(node.textContent, '123')
            })
            it('innerHTML', () => {
                assert.equal(node.innerHTML, '<span>1</span>2<span>3</span>')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<div><span>1</span>2<span>3</span></div>')
            })
        })
    })

    describe('Event handlers', () => {
        it('onblur', () => {
            const onblur = sinon.spy()
            const test = button({ onblur })
            const node = test.node

            node.focus()
            assert(onblur.notCalled, 'not called before blur')
            node.dispatchEvent(new CustomEvent('blur'))
            assert(onblur.calledOnce, 'called once on blur')
        })
        it('onchange', () => {
            const onchange = sinon.spy()
            const test = input({ type : 'checkbox', onchange })
            const node = test.node

            document.body.appendChild(node)
            assert(onchange.notCalled, 'not called before click')
            assert.isFalse(node.checked, 'not checked before click')
            node.click()
            assert(onchange.calledOnce, 'called once on click')
            assert(node.checked, 'checked on click')
            node.click()
            assert(onchange.calledTwice, 'called twice on the second click')
            assert.isFalse(node.checked, 'not checked on the second click')
            document.body.removeChild(node)
        })
        it('onclick', () => {
            const onclick = sinon.spy()
            const test = button({ onclick })
            const node = test.node

            assert(onclick.notCalled, 'not called before click')
            node.click()
            assert(onclick.calledOnce, 'called once on click')
            node.click()
            assert(onclick.calledTwice, 'called twice on the second click')
        })
        it('ondblclick', () => {
            const ondblclick = sinon.spy()
            const test = button({ ondblclick })
            const node = test.node

            assert(ondblclick.notCalled, 'not called before double click')
            // fixme MouseEvent
            node.dispatchEvent(new CustomEvent('dblclick', {
                bubbles : true,
                cancelable : true
            }))
            assert(ondblclick.calledOnce, 'called once on double click')
            // fixme MouseEvent
            node.dispatchEvent(new CustomEvent('dblclick', {
                bubbles : true,
                calcelable : true
            }))
            assert(ondblclick.calledTwice, 'called twice on the second double click')
        })
        it('onfocus', () => {
            const onfocus = sinon.spy()
            const test = button({ onfocus })
            const node = test.node

            assert(onfocus.notCalled, 'not called before focus')
            node.dispatchEvent(new CustomEvent('focus'))
            assert(onfocus.calledOnce, 'called once on focus')
        })
        it.skip('oninvalid', () => { // todo msie11
            const oninvalid = sinon.spy()
            const test = input({
                required : true,
                oninvalid
            })
            const node = test.node
            assert(oninvalid.notCalled, 'not called before validation')
            node.checkValidity()
            assert(oninvalid.calledOnce, 'called once on validation')
        })
        it.skip('onreset', () => {
            const onreset = sinon.spy()
            const children = input({
                type : 'checkbox',
                checked : true
            }).node
            const test = form({ onreset, children })
            const node = test.node

            assert(onreset.notCalled, 'not called before form reset')
            assert(children.checked, 'checked before form reset')
            node.reset()
            assert(onreset.calledOnce, 'called once on form reset')
            assert.isFalse(children.checked, 'not checked on form reset')
        })
        it('onsubmit', () => {
            const spy = sinon.spy()
            const onsubmit = event => {
                spy(event)
                event.preventDefault()
            }
            const children = button().node
            const test = form({ onsubmit, children })
            const node = test.node

            document.body.appendChild(node)
            assert(spy.notCalled, 'not called before the submit click')
            children.click()
            assert(spy.calledOnce, 'called once on the submit click')
            document.body.removeChild(node)
        })
        it('ontoggle', () => {
            const ontoggle = sinon.spy()
            const children = summary()
            const test = details({ ontoggle, children })
            const node = test.node

            document.body.appendChild(node)
            assert(ontoggle.notCalled, 'not called before toggle')
            node.dispatchEvent(new CustomEvent('toggle', {
                bubbles : true,
                cancelable : true
            })); // fixme UIEvent
            assert(ontoggle.calledOnce, 'called once on toggle')
            document.body.removeChild(node)
        })
    })

    describe('Elements', () => {
        describe('a', () => {
            const test = a({
                href : 'https://www.w3.org/TR/html',
                target : '_parent',
                // download : 'spec.html', // todo safari
                // ping : 'https://www.w3.org', // todo ie11
                rel : 'external help',
                hreflang : 'en',
                type : 'text/html',
                // referrerPolicy : 'no-referrer', // todo safari
                children : 'HTML5 specification'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'A')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 5)
            })
            it('href', () => {
                assert.equal(test.href, 'https://www.w3.org/TR/html')
            })
            it('target', () => {
                assert.equal(test.target, '_parent')
            })
            it.skip('ping', () => {
                assert(node.ping.startsWith('https://www.w3.org'))
            })
            it('rel', () => {
                assert.equal(test.rel, 'external help')
            })
            it('hreflang', () => {
                assert.equal(test.hreflang, 'en')
            })
            it('type', () => {
                assert.equal(test.type, 'text/html')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'HTML5 specification')
            })
        })
        describe('abbr', () => {
            const test = abbr({
                title : 'Hyper text markup language',
                children : 'HTML'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'ABBR')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 1)
            })
            it('title', () => {
                assert.equal(node.title, 'Hyper text markup language')
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'HTML')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<abbr title="Hyper text markup language">HTML</abbr>')
            })
        })
        describe('address', () => {
            const test = address('test@example.com')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'ADDRESS')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'test@example.com')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<address>test@example.com</address>')
            })
        })
        describe('area', () => {
            const test = area({
                alt : 'Alternative text',
                coords : '50,50,100,100',
                shape : 'rect',
                href : 'https://www.w3.org/TR/html',
                target : '_parent',
                // download : 'spec.txt', // todo
                // ping : 'https://www.w3.org', // todo
                // rel : 'external help', // todo
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'AREA')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 5)
            })
            it('alt', () => {
                assert.equal(node.alt, 'Alternative text')
            })
            it('coords', () => {
                assert.equal(node.coords, '50,50,100,100')
            })
            it('shape', () => {
                assert.equal(node.shape, 'rect')
            })
            it('href', () => {
                assert.equal(node.href, 'https://www.w3.org/TR/html')
            })
            it('target', () => {
                assert.equal(node.target, '_parent')
            })
            it('has no child nodes', () => {
                assert.isFalse(node.hasChildNodes(), 'has no child nodes')
            })
        })
        describe('article', () => {
            const test = article('Hello world!')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'ARTICLE')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Hello world!')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<article>Hello world!</article>')
            })
        })
        describe('aside', () => {
            const test = aside('Your advert may be here!')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'ASIDE')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Your advert may be here!')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<aside>Your advert may be here!</aside>')
            })
        })
        describe('audio', () => {
            const test = audio({
                src : 'https://aristov.github.io/media-samples/sample.wav',
                // crossOrigin : 'use-credentials', // fixme msie11
                preload : 'metadata',
                autoplay : true,
                loop : true,
                muted : true,
                controls : true,
                innerHTML : '<track><track><track>'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'AUDIO')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('src', () => {
                assert.equal(node.src, 'https://aristov.github.io/media-samples/sample.wav')
            })
            it.skip('crossOrigin', () => {
                assert.equal(node.crossOrigin, 'use-credentials')
            })
            it('preload', () => {
                assert.equal(node.preload, 'metadata')
            })
            it('autoplay', () => {
                assert.equal(node.autoplay, true)
            })
            it('loop', () => {
                assert.equal(node.loop, true)
            })
            it('muted', () => {
                assert.equal(node.muted, true)
            })
            it('controls', () => {
                assert.equal(node.controls, true)
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 3)
            })
            it('innerHTML', () => {
                assert(node.innerHTML, '<track><track><track>')
            })
        })
        describe('b', () => {
            const test = b('warning')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'B')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'warning')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<b>warning</b>')
            })
        })
        describe('base', () => {
            const test = base({ href : 'https://w3.org', target : '_top' })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'BASE')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 2)
            })
            it('href', () => {
                assert(node.href.startsWith('https://w3.org'), 'proper href')
            })
            it('target', () => {
                assert.equal(node.target, '_top')
            })
            it('has no child nodes', () => {
                assert.isFalse(node.hasChildNodes(), 'has no child nodes')
            })
        })
        describe('blockquote', () => {
            const test = blockquote({
                cite : 'https://html.spec.whatwg.org/#the-blockquote-element',
                children : 'The blockquote element represents a section that is quoted from another source.'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'BLOCKQUOTE')
            })
            it('proper constructor', () => {
                assert( // msie11
                    node instanceof HTMLQuoteElement || node instanceof HTMLBlockElement,
                    node + ' instance of ' + HTMLQuoteElement)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 1)
            })
            it('cite', () => {
                assert.equal(node.cite, 'https://html.spec.whatwg.org/#the-blockquote-element')
            })
            it('textContent', () => {
                assert.equal(node.textContent,
                    'The blockquote element represents a section that is quoted from another source.')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML,
                    '<blockquote ' +
                    'cite="https://html.spec.whatwg.org/#the-blockquote-element">' +
                    'The blockquote element represents a section that is quoted from another source.' +
                    '</blockquote>')
            })
        })
        describe('body', () => {
            const test = body('Test')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'BODY')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Test')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<body>Test</body>')
            })
        })
        describe('br', () => {
            const test = br()
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'BR')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has no child nodes', () => {
                assert.isFalse(node.hasChildNodes(), 'has no child nodes')
            })
            it('outerHTML', () => {
                assert(/^<br\/?>$/.test(node.outerHTML), 'proper outerHTML')
            })
        })
        describe('button', () => {
            const test = button({
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
                // menu : '???', // todo
                children : 'Save'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'BUTTON')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it.skip('proper attributes length', () => {
                assert.equal(node.attributes.length, 10) // jsdom => 7
            })
            it('autofocus', () => {
                assert.equal(node.autofocus, true)
            })
            it('disabled', () => {
                assert.equal(node.disabled, true)
            })
            it('formAction', () => {
                assert(node.formAction.endsWith('/api/save'), 'proper formAction')
            })
            it('formEnctype', () => {
                assert.equal(node.formEnctype, 'multipart/form-data')
            })
            it('formMethod', () => {
                assert.match(node.formMethod, /post/i)
            })
            it('formNoValidate', () => {
                assert.equal(node.formNoValidate, true)
            })
            it('formTarget', () => {
                assert.equal(node.formTarget, '_top')
            })
            it('name', () => {
                assert.equal(node.name, 'savebutton')
            })
            it('type', () => {
                assert.equal(node.type, 'button')
            })
            it('value', () => {
                assert.equal(node.value, 'OK')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Save')
            })
        })
        describe('canvas', () => {
            const test = canvas({ width : 100, height : 50 })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'CANVAS')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 2)
            })
            it('width', () => {
                assert.equal(node.width, 100)
            })
            it('height', () => {
                assert.equal(node.height, 50)
            })
            it('has no child nodes', () => {
                assert.isFalse(node.hasChildNodes(), 'has no child nodes')
            })
        })
        describe('caption', () => {
            const test = caption('Table 1. Total score obtained from rolling two six-sided dice.')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'CAPTION')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Table 1. Total score obtained from rolling two six-sided dice.')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML,
                    '<caption>Table 1. Total score obtained from rolling two six-sided dice.</caption>')
            })
        })
        describe('cite', () => {
            const test = cite('Fight club')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'CITE')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Fight club')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<cite>Fight club</cite>')
            })
        })
        describe('code', () => {
            const test = code('++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.' +
                '+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'CODE')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent,
                    '++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.' +
                    '+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML,
                    '<code>++++++++++[&gt;+++++++&gt;++++++++++&gt;+++&gt;+&lt;&lt;&lt;&lt;-]&gt;++.&gt;+.' +
                    '+++++++..+++.&gt;++.&lt;&lt;+++++++++++++++.&gt;.+++.------.--------.&gt;+.&gt;.</code>')
            })
        })
        describe('col', () => {
            const test = col({ span : 3 })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'COL')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 1)
            })
            it('span', () => {
                assert.equal(node.span, 3)
            })
            it('has no child nodes', () => {
                assert.isFalse(node.hasChildNodes(), 'has no child nodes')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<col span="3">')
            })
        })
        describe('colgroup', () => {
            const test = colgroup({ span : 5 })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'COLGROUP')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 1)
            })
            it('span', () => {
                assert.equal(node.span, 5)
            })
            it('has no child nodes', () => {
                assert.isFalse(node.hasChildNodes(), 'has no child nodes')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<colgroup span="5"></colgroup>')
            })
        })
        describe('datalist', () => {
            const test = datalist({
                innerHTML :
                    '<option value="Female"></option>' +
                    '<option value="Male"></option>'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'DATALIST')
            })
            it.skip('proper constructor', () => { // todo safari
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 2)
            })
            it('textContent', () => {
                assert.equal(node.outerHTML,
                    '<datalist>' +
                        '<option value="Female"></option>' +
                        '<option value="Male"></option>' +
                    '</datalist>')
            })
        })
        describe('dd', () => {
            const test = dd('part of a term-description group in a description list')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'DD')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'part of a term-description group in a description list')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<dd>part of a term-description group in a description list</dd>')
            })
        })
        describe('del', () => {
            const test = del({
                cite : '/edits/r192',
                dateTime : '2011-05-02 14:23Z',
                children : '10/10'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'DEL')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 2)
            })
            it('cite', () => {
                assert(node.cite.endsWith('/edits/r192'), 'proper cite')
            })
            it('dateTime', () => {
                assert.equal(node.dateTime, '2011-05-02 14:23Z')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, '10/10')
            })
        })
        describe('div', () => {
            const test = div('Abstract grouping block-level container')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'DIV')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Abstract grouping block-level container')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<div>Abstract grouping block-level container</div>')
            })
        })
        describe('dl', () => {
            const test = dl({
                innerHTML : '<dt>dt</dt><dd>Description title</dd>' +
                            '<dt>dd</dt><dd>Description description</dd>'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'DL')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has no child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('has child nodes', () => {
                assert.equal(node.childNodes.length, 4)
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML,
                    '<dl>' +
                        '<dt>dt</dt><dd>Description title</dd>' +
                        '<dt>dd</dt><dd>Description description</dd>' +
                    '</dl>')
            })
        })
        describe('dt', () => {
            const test = dt('Description title')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'DT')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Description title')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<dt>Description title</dt>')
            })
        })
        describe('em', () => {
            const test = em('Amazing!')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'EM')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Amazing!')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<em>Amazing!</em>')
            })
        })
        describe('embed', () => {
            const test = embed({
                src : 'https://aristov.github.io/media-samples/sample.swf',
                // type : 'application/x-shockwave-flash', // todo ie11
                width : '100%',
                height : '50%'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'EMBED')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('src', () => {
                assert.equal(node.src, 'https://aristov.github.io/media-samples/sample.swf')
            })
            it.skip('type', () => {
                assert.equal(node.type, 'application/x-shockwave-flash')
            })
            it('width', () => {
                assert.equal(node.width, '100%')
            })
            it('height', () => {
                assert.equal(node.height, '50%')
            })
            it('has no child nodes', () => {
                assert.isFalse(node.hasChildNodes(), 'has no child nodes')
            })
        })
        describe('fieldset', () => {
            const test = fieldset({
                disabled : true,
                // form : '???', // todo
                // name : 'geolocation', // todo ie11
                innerHTML : '<input><input type="submit">'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'FIELDSET')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('attributes length', () => {
                assert.equal(node.attributes.length, 1)
            })
            it('disabled', () => {
                assert.equal(node.disabled, true)
            })
            it.skip('name', () => {
                assert.equal(node.name, 'geolocation')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 2)
            })
        })
        describe('figcaption', () => {
            const test = figcaption('Image 1.1')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'FIGCAPTION')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Image 1.1')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<figcaption>Image 1.1</figcaption>')
            })
        })
        describe('figure', () => {
            const test = figure({ innerHTML : '<img><figcaption>Figure #1.</figcaption>' })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'FIGURE')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 2)
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<figure><img><figcaption>Figure #1.</figcaption></figure>')
            })
        })
        describe('footer', () => {
            const test = footer('Navigation menu, small text, copyright and contact information')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'FOOTER')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Navigation menu, small text, copyright and contact information')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML,
                    '<footer>Navigation menu, small text, copyright and contact information</footer>')
            })
        })
        describe('form', () => {
            const test = form({
                acceptCharset : 'utf-8',
                action : '/app/save',
                autocomplete : 'off',
                enctype : 'text/plain',
                method : 'POST',
                name : 'saveform',
                noValidate : true,
                target : '_top',
                innerHTML :
                    '<label><input></label>' +
                    '<label><textarea></textarea></label>' +
                    '<label><select>' +
                        '<option></option>' +
                        '<option></option>' +
                    '</select></label>'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'FORM')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it.skip('proper attributes length', () => {
                assert.equal(node.attributes.length, 8) // jsdom => 7
            })
            it('acceptCharset', () => {
                assert.equal(test.acceptCharset, 'utf-8')
            })
            it('action', () => {
                assert(test.action.endsWith('/app/save'), 'proper action')
            })
            it('autocomplete', () => {
                assert.equal(test.autocomplete, 'off')
            })
            it('enctype', () => {
                assert.equal(test.enctype, 'text/plain')
            })
            it('method', () => {
                assert.equal(test.method, 'post')
            })
            it('name', () => {
                assert.equal(test.name, 'saveform')
            })
            it('noValidate', () => {
                assert.equal(test.noValidate, true)
            })
            it('target', () => {
                assert.equal(test.target, '_top')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 3)
            })
            it('innerHTML', () => {
                assert.equal(node.innerHTML,
                    '<label><input></label>' +
                    '<label><textarea></textarea></label>' +
                    '<label><select>' +
                        '<option></option>' +
                        '<option></option>' +
                    '</select></label>')
            })
        })
        describe('h1', () => {
            const test = h1('HTML Standard')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'H1')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'HTML Standard')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<h1>HTML Standard</h1>')
            })
        })
        describe('h2', () => {
            const test = h2('Full table of contents')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'H2')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Full table of contents')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<h2>Full table of contents</h2>')
            })
        })
        describe('h3', () => {
            const test = h3('Introduction')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'H3')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Introduction')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<h3>Introduction</h3>')
            })
        })
        describe('h4', () => {
            const test = h4('2.4 Common microsyntaxes')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'H4')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, '2.4 Common microsyntaxes')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<h4>2.4 Common microsyntaxes</h4>')
            })
        })
        describe('h5', () => {
            const test = h5('2.4.4 Numbers')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'H5')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, '2.4.4 Numbers')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<h5>2.4.4 Numbers</h5>')
            })
        })
        describe('h6', () => {
            const test = h6('2.4.4.4 Percentages and lengths')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'H6')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, '2.4.4.4 Percentages and lengths')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<h6>2.4.4.4 Percentages and lengths</h6>')
            })
        })
        describe('head', () => {
            const test = head({
                innerHTML : '<title></title><meta charset=utf-8><link rel=stylesheet>'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'HEAD')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('has child nodes', () => {
                assert.equal(node.childNodes.length, 3)
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML,
                    '<head><title></title><meta charset="utf-8"><link rel="stylesheet"></head>')
            })
        })
        describe('header', () => {
            const test = header('The main heading, site navigation and search')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'HEADER')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'The main heading, site navigation and search')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<header>The main heading, site navigation and search</header>')
            })
        })
        describe('hgroup', () => {
            const test = hgroup({
                innerHTML : '<h4>2.4 Common microsyntaxes</h4><h5>2.4.4 Numbers</h5>'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'HGROUP')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has no child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('has no child nodes', () => {
                assert.equal(node.childNodes.length, 2)
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML,
                    '<hgroup><h4>2.4 Common microsyntaxes</h4><h5>2.4.4 Numbers</h5></hgroup>')
            })
        })
        describe('hr', () => {
            const test = hr()
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'HR')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has no child nodes', () => {
                assert.isFalse(node.hasChildNodes(), 'has no child nodes')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<hr>')
            })
        })
        describe('html', () => {
            const test = html({
                attrset : { manifest : 'https://example.com/manifest' },
                innerHTML :
                    '<head>' +
                        '<meta charset="utf-8">' +
                        '<title>Example document title</title>' +
                    '</head>' +
                    '<body>Example document body</body>'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'HTML')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 1)
            })
            it('manifest', () => {
                assert.equal(node.getAttribute('manifest'), 'https://example.com/manifest')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('has child nodes', () => {
                assert.equal(node.childNodes.length, 2)
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML,
                    '<html manifest="https://example.com/manifest">' +
                        '<head>' +
                            '<meta charset="utf-8">' +
                            '<title>Example document title</title>' +
                        '</head>' +
                        '<body>Example document body</body>' +
                    '</html>')
            })
        })
        describe('i', () => {
            const test = i('Alternative voice')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'I')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Alternative voice')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<i>Alternative voice</i>')
            })
        })
        describe('iframe', () => {
            const test = iframe({
                // allowFullscreen : true, // todo safari
                // allowUserMedia : true, // todo chrome
                height : '70%',
                name : 'nested-window',
                // referrerPolicy : 'origin', // todo safari
                src : '/nested.html',
                // srcdoc : '<html><head><title>Nested document</title></head><body></body></html>', // todo ie11
                width : '200px',
                attrset : { sandbox : 'allow-forms' }
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'IFRAME')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 5)
            })
            it('height', () => {
                assert.equal(node.height, '70%')
            })
            it('name', () => {
                assert.equal(node.name, 'nested-window')
            })
            it('src', () => {
                assert(node.src.endsWith('/nested.html'), 'proper src')
            })
            it.skip('srcdoc', () => {
                assert.equal(node.srcdoc, '<html><head><title>Nested document</title></head><body></body></html>')
            })
            it('width', () => {
                assert(/200(?:px)?/.test(node.width))
            })
            it('sandbox', () => {
                // assert.equal(node.sandbox, 'allow-forms') // jsdom
                assert.equal(node.getAttribute('sandbox'), 'allow-forms')
            })
            it('has no child nodes', () => {
                assert.isFalse(node.hasChildNodes(), 'has no child nodes')
            })
        })
        describe('img', () => {
            const src = 'data:image/gif;base64,R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAw' +
                'AAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFz' +
                'ByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSp' +
                'a/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJl' +
                'ZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uis' +
                'F81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PH' +
                'hhx4dbgYKAAA7'
            const test = img({
                alt : 'HTML logo',
                src,
                // todo msie11
                // srcset : '/data/150-logo.png 1.5x, /data/200-logo.png 2x',
                // sizes : '1.5x, 2x',
                crossOrigin : 'use-credentials',
                useMap : 'logomap',
                isMap : true,
                width : '150',
                height : '150',
                // referrerPolicy : 'no-referrer-when-downgrade', // todo safari
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'IMG')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 7)
            })
            it('alt', () => {
                assert.equal(test.alt, 'HTML logo')
            })
            it('src', () => {
                assert.equal(test.src, src)
            })
            it.skip('srcset', () => {
                assert.equal(node.srcset, '/data/150-logo.png 1.5x, /data/200-logo.png 2x')
            })
            it.skip('sizes', () => {
                assert.equal(node.sizes, '1.5x, 2x')
            })
            it('crossOrigin', () => {
                assert.equal(node.crossOrigin, 'use-credentials')
            })
            it('useMap', () => {
                assert.equal(node.useMap, 'logomap')
            })
            it('isMap', () => {
                assert.equal(node.isMap, true)
            })
            it('width', () => {
                assert.equal(test.width, '150')
            })
            it('height', () => {
                assert.equal(test.height, '150')
            })
            it('has no child nodes', () => {
                assert.isFalse(node.hasChildNodes(), 'has no child nodes')
            })
        })
        describe('input', () => {
            const test = input({
                alt : 'alternative input text',
                accept : 'SVG, PNG, PDF',
                autocomplete : 'off',
                autofocus : true,
                checked : true,
                defaultChecked : true,
                // dirName : 'comment.dir', // todo firefox
                disabled : true,
                // formAction : '/app/save',
                // formEnctype : 'multipart/form-data',
                // formMethod : 'POST',
                formNoValidate : true,
                formTarget : '_top',
                // indeterminate : true,
                // inputMode : 'tel', // todo
                max : '100',
                maxLength : 99,
                min : '0',
                // minLength : 1, // todo safari
                multiple : true,
                name : 'input_name',
                pattern : '[0-9][A-Z]{3}',
                placeholder : 'Paste',
                readOnly : true,
                required : true,
                size : 5,
                src : '/data/input.js',
                step : '2',
                type : 'text',
                value : 'User input value',
                defaultValue : 'Default value',
                title : 'A part number is a digit followed by three uppercase letters.',
                attrset : {
                    form : 'saveform',
                    list : 'suggestlist'
                }
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'INPUT')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                // assert.equal(node.attributes.length, 28)
                assert.equal(node.attributes.length, 25)
            })
            it('alt', () => {
                assert.equal(test.alt, 'alternative input text')
            })
            it('accept', () => {
                assert.equal(test.accept, 'SVG, PNG, PDF')
            })
            it('autocomplete', () => {
                assert.equal(test.autocomplete, 'off')
            })
            it('autofocus', () => {
                assert.equal(test.autofocus, true)
            })
            it('checked', () => {
                assert.equal(test.checked, true)
            })
            it('defaultChecked', () => {
                assert.equal(test.defaultChecked, true)
            })
            it('disabled', () => {
                assert.equal(test.disabled, true)
            })
            it.skip('formAction', () => {
                assert(test.formAction.endsWith('/app/save'), 'proper action')
            })
            it.skip('formEnctype', () => {
                assert.equal(test.formEnctype, 'multipart/form-data')
            })
            it.skip('formMethod', () => {
                assert.equal(test.formMethod, 'post')
            })
            it('formNoValidate', () => {
                assert.equal(test.formNoValidate, true)
            })
            it('formTarget', () => {
                assert.equal(test.formTarget, '_top')
            })
            it.skip('indeterminate', () => {
                assert.equal(test.indeterminate, true)
            })
            it('max', () => {
                assert.equal(test.max, '100')
            })
            it('maxLength', () => {
                assert.equal(test.maxLength, 99)
            })
            it('min', () => {
                assert.equal(test.min, '0')
            })
            it('multiple', () => {
                assert.equal(test.multiple, true)
            })
            it('name', () => {
                assert.equal(test.name, 'input_name')
            })
            it('pattern', () => {
                assert.equal(test.pattern, '[0-9][A-Z]{3}')
            })
            it('placeholder', () => {
                assert.equal(test.placeholder, 'Paste')
            })
            it('readOnly', () => {
                assert.equal(test.readOnly, true)
            })
            it('required', () => {
                assert.equal(test.required, true)
            })
            it('size', () => {
                assert.equal(test.size, 5)
            })
            it('src', () => {
                assert(test.src.endsWith('/data/input.js'), 'proper src')
            })
            it('step', () => {
                assert.equal(test.step, '2')
            })
            it('type', () => {
                assert.equal(test.type, 'text')
            })
            it('value', () => {
                assert.equal(test.value, 'User input value')
            })
            it('defaultValue', () => {
                assert.equal(test.defaultValue, 'Default value')
            })
            it('title', () => {
                assert.equal(test.title, 'A part number is a digit followed by three uppercase letters.')
            })
            it('form attribute', () => {
                assert.equal(test.getAttribute('form'), 'saveform')
            })
            it('list attribute', () => {
                assert.equal(test.getAttribute('list'), 'suggestlist')
            })
            it('has no child nodes', () => {
                assert.isFalse(node.hasChildNodes(), 'has no child nodes')
            })
            it('interface', () => {
                assert.equal(test.constructor.interface, HTMLInputElement)
            })
        })
        describe('ins', () => {
            const test = ins({
                cite : '/edits/r193',
                dateTime : '2011-05-02 14:32Z',
                children : '11/10'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'INS')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 2)
            })
            it('cite', () => {
                assert(node.cite.endsWith('/edits/r193'), 'proper cite')
            })
            it('dateTime', () => {
                assert.equal(node.dateTime, '2011-05-02 14:32Z')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, '11/10')
            })
        })
        describe('kbd', () => {
            const test = kbd('Ctrl + Z')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'KBD')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Ctrl + Z')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<kbd>Ctrl + Z</kbd>')
            })
        })
        describe('label', () => {
            const test = label({
                htmlFor : 'userinput',
                children : 'Input label'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'LABEL')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 1)
            })
            it('htmlFor', () => {
                assert.equal(node.htmlFor, 'userinput')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Input label')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<label for="userinput">Input label</label>')
            })
        })
        describe('legend', () => {
            const test = legend('Authorization')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'LEGEND')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Authorization')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<legend>Authorization</legend>')
            })
        })
        describe('li', () => {
            const test = li({
                value : 4,
                children : '4-th list item'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'LI')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 1)
            })
            it('value', () => {
                assert.equal(node.value, 4)
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, '4-th list item')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<li value="4">4-th list item</li>')
            })
        })
        describe('link', () => {
            const test = link({
                href : '/icon.svg',
                // crossOrigin : 'use-credentials', // todo msie11
                rel : 'preload icon',
                // as : 'media', // todo firefox
                media : 'screen',
                hreflang : 'fr',
                type : 'application/svg',
                // sizes : '32x32 48x48', // todo msie11
                title : 'Application icon',
                // referrerPolicy : 'no-referrer', // todo
                // nonce : 'abc', // todo
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'LINK')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 6)
            })
            it('href', () => {
                assert(node.href.endsWith('/icon.svg'), 'proper href')
            })
            it('rel', () => {
                assert.equal(node.rel, 'preload icon')
            })
            it.skip('crossOrigin', () => {
                assert.equal(node.crossOrigin, 'use-credentials')
            })
            it('media', () => {
                assert.equal(node.media, 'screen')
            })
            it('hreflang', () => {
                assert.equal(node.hreflang, 'fr')
            })
            it('type', () => {
                assert.equal(node.type, 'application/svg')
            })
            it.skip('sizes', () => {
                assert.equal(node.sizes, '32x32 48x48')
            })
            it('title', () => {
                assert.equal(node.title, 'Application icon')
            })
            it('has no child nodes', () => {
                assert.isFalse(node.hasChildNodes(), 'has no child nodes')
            })
        })
        describe('main', () => {
            const test = main('The main application content')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'MAIN')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'The main application content')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<main>The main application content</main>')
            })
        })
        describe('map', () => {
            const test = map({
                name : 'app-image-map',
                innerHTML : '<area><area><area>'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'MAP')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 1)
            })
            it('name', () => {
                assert.equal(node.name, 'app-image-map')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 3)
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<map name="app-image-map"><area><area><area></map>')
            })
        })
        describe('mark', () => {
            const test = mark('Highlighted')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'MARK')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Highlighted')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<mark>Highlighted</mark>')
            })
        })
        describe('meta', () => {
            const test = meta({
                name : 'keywords',
                content : 'specification,html,dom,web,application,standard,api',
                httpEquiv : 'x-ua-compatible',
                attrset : { charset : 'utf-8' },
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'META')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 4)
            })
            it('name', () => {
                assert.equal(node.name, 'keywords')
            })
            it('content', () => {
                assert.equal(node.content, 'specification,html,dom,web,application,standard,api')
            })
            it('httpEquiv', () => {
                assert.equal(node.httpEquiv, 'x-ua-compatible')
            })
            it('charset attribute', () => {
                assert.equal(node.getAttribute('charset'), 'utf-8')
            })
            it('has no child nodes', () => {
                assert.isFalse(node.hasChildNodes(), 'has no child nodes')
            })
        })
        describe('nav', () => {
            const test = nav('Navigation area')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'NAV')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Navigation area')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<nav>Navigation area</nav>')
            })
        })
        describe('noscript', () => {
            const test = noscript('Alternative content')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'NOSCRIPT')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Alternative content')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<noscript>Alternative content</noscript>')
            })
        })
        describe('object', () => {
            const test = object({
                data : 'https://aristov.github.io/media-samples/sample.swf',
                type : 'application/x-shockwave-flash',
                // typeMustMatch : true, // todo
                name : 'app-swf-object',
                useMap : 'app-map',
                width : '123',
                height : '321',
                attrset : { form : 'saveform' },
                innerHTML : '<param><param><param>'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'OBJECT')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 7)
            })
            it('data', () => {
                assert.equal(node.data, 'https://aristov.github.io/media-samples/sample.swf')
            })
            it('type', () => {
                assert.equal(node.type, 'application/x-shockwave-flash')
            })
            it('name', () => {
                assert.equal(node.name, 'app-swf-object')
            })
            it('useMap', () => {
                assert.equal(node.useMap, 'app-map')
            })
            it('width', () => {
                assert.equal(node.width, '123')
            })
            it('height', () => {
                assert.equal(node.height, '321')
            })
            it('form attribute', () => {
                assert.equal(node.getAttribute('form'), 'saveform')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 3)
            })
            it('innerHTML', () => {
                assert.equal(node.innerHTML, '<param><param><param>')
            })
        })
        describe('ol', () => {
            const test = ol({
                // reversed : true, // todo msie11
                // start : 1, // todo msie11
                type : 'A',
                innerHTML : '<li>1</li><li>2</li><li>3</li>'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'OL')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 1)
            })
            it.skip('reversed', () => {
                assert.equal(node.reversed, true)
            })
            it.skip('start', () => {
                assert.equal(node.start, 1)
            })
            it('type', () => {
                assert.equal(node.type, 'A')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 3)
            })
            it('innerHTML', () => {
                assert.equal(node.innerHTML, '<li>1</li><li>2</li><li>3</li>')
            })
        })
        describe('optgroup', () => {
            const test = optgroup({
                disabled : true,
                label : 'Select option group',
                innerHTML : '<option>1</option><option>2</option><option>3</option>'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'OPTGROUP')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 2)
            })
            it('disabled', () => {
                assert.equal(node.disabled, true)
            })
            it('label', () => {
                assert.equal(node.label, 'Select option group')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 3)
            })
            it('innerHTML', () => {
                assert.equal(node.innerHTML, '<option>1</option><option>2</option><option>3</option>')
            })
        })
        describe('option', () => {
            const test = option({
                disabled : true,
                label : 'Select option label',
                selected : true,
                value : 'option-1',
                innerHTML : 'Select option text'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'OPTION')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it.skip('proper attributes length', () => {
                assert.equal(node.attributes.length, 3) // jsdom => 2
            })
            it('disabled', () => {
                assert.equal(node.disabled, true)
            })
            it.skip('label', () => {
                assert.equal(node.label, 'Select option label')
            })
            it('selected', () => {
                assert.equal(node.selected, true)
            })
            it('value', () => {
                assert.equal(node.value, 'option-1')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Select option text')
            })
        })
        describe('output', () => { // todo msie11
            const test = output({
                // htmlFor : 'user-input', // jsdom
                name : 'program-output',
                attrset : { form : 'saveform' },
                children : 'Output widget'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'OUTPUT')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                // assert.equal(node.attributes.length, 3) // jsdom
                assert.equal(node.attributes.length, 2)
            })
            it.skip('htmlFor', () => {
                assert.equal(node.htmlFor, 'user-input')
            })
            it('name', () => {
                assert.equal(node.name, 'program-output')
            })
            it('form attribute', () => {
                assert.equal(node.getAttribute('form'), 'saveform')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Output widget')
            })
        });
        describe('p', () => {
            const test = p('Paragraph')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'P')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Paragraph')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<p>Paragraph</p>')
            })
        })
        describe('param', () => {
            const test = param({ name : 'ratio', value : '3' })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'PARAM')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 2)
            })
            it('name', () => {
                assert.equal(node.name, 'ratio')
            })
            it('value', () => {
                assert.equal(node.value, '3')
            })
            it('has no child nodes', () => {
                assert.isFalse(node.hasChildNodes(), 'has no child nodes')
            })
        })
        describe('picture', () => {
            const test = picture({ innerHTML : '<source><img>' })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'PICTURE')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it.skip('proper constructor', () => { // fixme msie11
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 2)
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<picture><source><img></picture>')
            })
        })
        describe('pre', () => {
            const test = pre('Pre >< formatted >< text')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'PRE')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Pre >< formatted >< text')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<pre>Pre &gt;&lt; formatted &gt;&lt; text</pre>')
            })
        })
        describe('progress', () => {
            // const test = progress({ value : 0.6, max : 2 }).node // jsdom
            const test = progress()
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'PROGRESS')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has attributes')
            })
            it.skip('proper attributes length', () => {
                assert.equal(node.attributes.length, 2)
            })
            it.skip('value', () => {
                assert.equal(Math.floor(node.value * 10) / 10, 0.6)
            })
            it.skip('name', () => {
                assert.equal(node.max, 2)
            })
            it('has no child nodes', () => {
                assert.isFalse(node.hasChildNodes(), 'has no child nodes')
            })
        })
        describe('q', () => {
            const test = q({
                cite : 'https://html.spec.whatwg.org/#the-q-element',
                children : 'The q element represents some phrasing content quoted from another source'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'Q')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('cite', () => {
                assert.equal(node.cite, 'https://html.spec.whatwg.org/#the-q-element')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent,
                    'The q element represents some phrasing content quoted from another source')
            })

            it('outerHTML', () => {
                assert.equal(node.outerHTML,
                    '<q cite="https://html.spec.whatwg.org/#the-q-element">' +
                    'The q element represents some phrasing content quoted from another source' +
                    '</q>')
            })
        })
        describe('s', () => {
            const test = s('Not relevant')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'S')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Not relevant')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<s>Not relevant</s>')
            })
        })
        describe('samp', () => {
            const test = samp('example')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'SAMP')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'example')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<samp>example</samp>')
            })
        })
        describe('script', () => {
            const test = script({
                src : 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js',
                type : 'javascript',
                charset : 'utf-8',
                // async : true,
                defer : true,
                // crossOrigin : 'use-credentials', // todo msie11
                // nonce : 'abc', // todo
                children : script.toString(),
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'SCRIPT')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                // assert.equal(node.attributes.length, 5)
                assert.equal(node.attributes.length, 4)
            })
            it('src', () => {
                assert.equal(node.src, 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js')
            })
            it('type', () => {
                assert.equal(node.type, 'javascript')
            })
            it('charset', () => {
                assert.equal(node.charset, 'utf-8')
            })
            it.skip('async', () => {
                assert.equal(node.async, true)
            })
            it('defer', () => {
                assert.equal(node.defer, true)
            })
            it.skip('crossOrigin', () => {
                assert.equal(node.crossOrigin, 'use-credentials')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, script.toString())
            })
        })
        describe('section', () => {
            const test = section('Application section')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'SECTION')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Application section')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<section>Application section</section>')
            })
        })
        describe('select', () => {
            const test = select({
                // autocomplete : 'off', // todo
                autofocus : true,
                disabled : true,
                name : 'select-9',
                required : true,
                size : 10,
                attrset : { form : 'saveform' },
                innerHTML :
                    '<option>opt1</option>' +
                    '<optgroup><option>opt2</option></optgroup>' +
                    '<option>opt3</option>',
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'SELECT')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 6)
            })
            it('autofocus', () => {
                assert.equal(node.autofocus, true)
            })
            it('disabled', () => {
                assert.equal(node.disabled, true)
            })
            it('name', () => {
                assert.equal(node.name, 'select-9')
            })
            it('required', () => {
                assert.equal(node.required, true)
            })
            it('size', () => {
                assert.equal(node.size, 10)
            })
            it('form attribute', () => {
                assert.equal(node.getAttribute('form'), 'saveform')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 3)
            })
            it('innerHTML', () => {
                assert.equal(node.innerHTML,
                    '<option>opt1</option>' +
                    '<optgroup><option>opt2</option></optgroup>' +
                    '<option>opt3</option>')
            })
        })
        describe('small', () => {
            const test = small('Copyright © Vyacheslav Aritov')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'SMALL')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Copyright © Vyacheslav Aritov')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<small>Copyright © Vyacheslav Aritov</small>')
            })
        })
        describe('source', () => {
            const test = source({
                src : '/audio-01.mp3',
                type : 'audio/*',
                media : 'screen',
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'SOURCE')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 3)
            })
            it('src', () => {
                assert(node.src.endsWith('/audio-01.mp3'), 'proper src')
            })
            it('type', () => {
                assert.equal(node.type, 'audio/*')
            })
            it('media', () => {
                assert.equal(node.media, 'screen')
            })
            it('has no child nodes', () => {
                assert.isFalse(node.hasChildNodes(), 'has no child nodes')
            })
        })
        describe('style', () => {
            const test = style({
                media : 'screen',
                type : 'text/css',
                // defer : true, // todo
                title : 'Application style sheet',
                // nonce : 'abc', // todo
                children : 'style { display: block }',
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'STYLE')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 3)
            })
            it('media', () => {
                assert.equal(node.media, 'screen')
            })
            it('type', () => {
                assert.equal(node.type, 'text/css')
            })
            it('title', () => {
                assert.equal(node.title, 'Application style sheet')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'style { display: block }')
            })
        })
        describe('table', () => {
            const test = table({
                innerHTML :
                    '<tr><td>A1</td><td>A2</td><td>A3</td></tr>' +
                    '<tr><td>B1</td><td>B2</td><td>B3</td></tr>'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'TABLE')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('firstChild.tagName', () => {
                assert.equal(node.firstChild.tagName, 'TBODY')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML,
                    '<table>' +
                        '<tbody>' +
                            '<tr><td>A1</td><td>A2</td><td>A3</td></tr>' +
                            '<tr><td>B1</td><td>B2</td><td>B3</td></tr>' +
                        '</tbody>' +
                    '</table>')
            })
        })
        describe('textarea', () => {
            const test = textarea({
                // autocomplete : 'off', // todo
                autofocus : true,
                cols : 15,
                // dirName : 'comment.dir', // todo firefox
                disabled : true,
                // inputMode : '???', // todo
                maxLength : 99,
                // minLength : 1, // todo safari
                name : 'input_name',
                placeholder : 'Paste',
                readOnly : true,
                required : true,
                rows : 20,
                wrap : 'hard',
                value : 'User multiline input value',
                defaultValue : 'Default multiline value',
                attrset : { form : 'saveform' }
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'TEXTAREA')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 11)
            })
            it('autofocus', () => {
                assert.equal(node.autofocus, true)
            })
            it('cols', () => {
                assert.equal(node.cols, 15)
            })
            it('disabled', () => {
                assert.equal(node.disabled, true)
            })
            it('name', () => {
                assert.equal(node.name, 'input_name')
            })
            it('placeholder', () => {
                assert.equal(node.placeholder, 'Paste')
            })
            it('readOnly', () => {
                assert.equal(node.readOnly, true)
            })
            it('required', () => {
                assert.equal(node.required, true)
            })
            it('rows', () => {
                assert.equal(node.rows, 20)
            })
            it('wrap', () => {
                assert.equal(node.wrap, 'hard')
            })
            it('value', () => {
                assert.equal(node.value, 'User multiline input value')
            })
            it('defaultValue', () => {
                assert.equal(node.defaultValue, 'Default multiline value')
            })
            it('form attribute', () => {
                assert.equal(node.getAttribute('form'), 'saveform')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert(node.textContent, 'Multiline user input')
            })
        })
        /*describe('time', () => {
            const test = time({
                dateTime : '2016-11-11',
                children : 'November 11'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'TIME')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 1)
            })
            it('dateTime', () => {
                assert.equal(node.dateTime, '2016-11-11')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'November 11')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<time datetime="2016-11-11">November 11</time>')
            })
        });*/
        describe('title', () => {
            const test = title('Application title')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'TITLE')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Application title')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<title>Application title</title>')
            })
        })
        describe('track', () => {
            const test = track({
                kind : 'captions',
                src : '/track-1.mp3',
                srclang : 'uk',
                label : 'First audio track',
                default : true,
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'TRACK')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('proper attributes length', () => {
                assert.equal(node.attributes.length, 5)
            })
            it('kind', () => {
                assert.equal(node.kind, 'captions')
            })
            it('src', () => {
                assert(node.src.endsWith('/track-1.mp3'), 'proper src')
            })
            it('srclang', () => {
                assert.equal(node.srclang, 'uk')
            })
            it('label', () => {
                assert.equal(node.label, 'First audio track')
            })
            it('default', () => {
                assert.equal(node.default, true)
            })
            it('has no child nodes', () => {
                assert.isFalse(node.hasChildNodes(), 'has no child nodes')
            })
        })
        describe('u', () => {
            const test = u('Misspelt text')
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'U')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('textContent', () => {
                assert.equal(node.textContent, 'Misspelt text')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<u>Misspelt text</u>')
            })
        })
        describe('video', () => {
            const poster = 'data:image/gif;base64,R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAw' +
                'AAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFz' +
                'ByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSp' +
                'a/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJl' +
                'ZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uis' +
                'F81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PH' +
                'hhx4dbgYKAAA7'
            const test = video({
                src : 'https://aristov.github.io/media-samples/sample.mov',
                // crossOrigin : 'use-credentials', // fixme msie11
                poster,
                preload : 'metadata',
                autoplay : true,
                // playsInline : true, // todo
                loop : true,
                muted : true,
                controls : true,
                width : 100,
                height : 75,
                innerHTML : '<track><track><track>'
            })
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'VIDEO')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has attributes', () => {
                assert(node.hasAttributes(), 'has attributes')
            })
            it('src', () => {
                assert.equal(node.src, 'https://aristov.github.io/media-samples/sample.mov')
            })
            it.skip('crossOrigin', () => { // todo
                assert.equal(node.crossOrigin, 'use-credentials')
            })
            it('poster', () => {
                assert.equal(node.poster, poster)
            })
            it('preload', () => {
                assert.equal(node.preload, 'metadata')
            })
            it('autoplay', () => {
                assert.equal(node.autoplay, true)
            })
            it.skip('playsInline', () => {
                assert.equal(node.playsInline, true)
            })
            it('loop', () => {
                assert.equal(node.loop, true)
            })
            it('muted', () => {
                assert.equal(node.muted, true)
            })
            it('controls', () => {
                assert.equal(node.controls, true)
            })
            it('width', () => {
                assert.equal(node.width, 100)
            })
            it('height', () => {
                assert.equal(node.height, 75)
            })
            it('has child nodes', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('child nodes length', () => {
                assert.equal(node.childNodes.length, 3)
            })
            it.skip('innerHTML', () => { // todo safari
                assert.equal(node.innerHTML, '<track><track><track>')
            })
        })
        describe('wbr', () => {
            const test = wbr()
            const node = test.node
            it('tagName', () => {
                assert.equal(node.tagName, 'WBR')
            })
            it('proper constructor', () => {
                assert.instanceOf(node, test.constructor.interface)
            })
            it('has no attributes', () => {
                assert.isFalse(node.hasAttributes(), 'has no attributes')
            })
            it('has no child nodes', () => {
                assert.isFalse(node.hasChildNodes(), 'has no child nodes')
            })
            it('outerHTML', () => {
                assert.equal(node.outerHTML, '<wbr>')
            })
        })
    })

    describe('Various structures', () => {
        describe('Authorization fieldset', () => {
            it('properly build form authorization fieldset', () => {
                const node =
                    fieldset([
                        legend('Authorization'),
                        input({ type : 'email' }),
                        input({ type : 'password' })
                    ]).node
                assert.equal(node.outerHTML,
                    '<fieldset>' +
                        '<legend>Authorization</legend>' +
                        '<input type="email">' +
                        '<input type="password">' +
                    '</fieldset>')
            })
        })
        describe('Header with navigation', () => {
            it('properly build header with navigational links inside', () => {
                const node =
                    header(nav([
                        a({ href : '/lib.html', textContent : 'Library' }),
                        a({ href : '/spec.html', textContent : 'Specifications' }),
                        a({ href : '/home.html', textContent : 'Go home' })
                    ])).node
                assert.equal(node.outerHTML,
                    '<header><nav>' +
                        '<a href="/lib.html">Library</a>' +
                        '<a href="/spec.html">Specifications</a>' +
                        '<a href="/home.html">Go home</a>' +
                    '</nav></header>')
            })
        })
        describe('Select box widget', () => {
            let widget, selected
            const test = label([
                'Select technology ',
                widget = select([
                    option('DOM'),
                    option('XML'),
                    selected = option({ selected : true, textContent : 'HTML' }).node,
                    option('SVG'),
                    option('MathML'),
                    option('WAI-ARIA')
                ]).node
            ])
            const node = test.node
            it('properly build label with select box option list inside', () => {
                assert.equal(node.outerHTML,
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
                    '</label>')
            })
            it('proper selected option reference', () => {
                assert.equal(widget.selectedOptions.length, 1)
                assert.equal(widget.selectedOptions[0], selected)
            })
        })
        describe('Search form', () => {
            it('properly build form with search input and submit button inside', () => {
                const node =
                    form({
                        attrset : { role : 'search' },
                        children : [
                            input({ type : 'search' }),
                            button('Search')
                        ]
                    }).node
                assert.equal(node.outerHTML,
                    '<form role="search">' +
                        '<input type="search">' +
                        '<button>Search</button>' +
                    '</form>')
            })
        })
        describe.skip('Checkboxes', () => {
            let simple, checked, indeterminate
            const node =
                div([
                    simple = input({ type : 'checkbox' }),
                    checked = input({ type : 'checkbox', checked : true }),
                    // indeterminate = input({ type : 'checkbox', indeterminate : true })
                ])
            it('proper HTML rendered', () => {
                assert.equal(node.outerHTML,
                    '<div>' +
                        '<input type="checkbox">' +
                        '<input type="checkbox">' +
                        '<input type="checkbox">' +
                    '</div>')
            })
            it('check current state of widgets', () => {
                assert.isFalse(simple.checked)
                assert(checked.checked)
                assert(indeterminate.indeterminate)
            })
            it('proper initial state assignment', () => {
                const sample = input({ type : 'checkbox', attrset : { checked : '' } })
                const container = div({ innerHTML : '<input type=checkbox checked>' })
                assert(sample.isEqualNode(container.firstChild))
            })
        })
        describe('Various list examples', () => {
            it('properly build ul + li', () => {
                assert.equal(
                    ul([
                        li('Ampeg'),
                        li('Fender'),
                        li('Warwick')
                    ]).node.outerHTML,
                    '<ul>' +
                        '<li>Ampeg</li>' +
                        '<li>Fender</li>' +
                        '<li>Warwick</li>' +
                    '</ul>'
                )
            })
            it('properly build ol + li', () => {
                assert.equal(
                    ol([
                        li('Moscow'),
                        li('Amsterdam'),
                        li('New York')
                    ]).node.outerHTML,
                    '<ol>' +
                        '<li>Moscow</li>' +
                        '<li>Amsterdam</li>' +
                        '<li>New York</li>' +
                    '</ol>')
            })
            it('properly build dl + dt + dd', () => {
                assert.equal(
                    dl([
                        dt('DOM'),
                        dd('Document object model'),
                        dt('XML'),
                        dd('Extensible markup language'),
                        dt('HTML'),
                        dd('Hyper text markup language')
                    ]).node.outerHTML,
                    '<dl>' +
                        '<dt>DOM</dt>' +
                        '<dd>Document object model</dd>' +
                        '<dt>XML</dt>' +
                        '<dd>Extensible markup language</dd>' +
                        '<dt>HTML</dt>' +
                        '<dd>Hyper text markup language</dd>' +
                    '</dl>')
            })
        })
        describe('Details with summary', () => {
            it('properly build widget', () => {
                const node =
                    details([
                        summary('Show details'),
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
                        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    ]).node
                assert.equal(node.outerHTML,
                    '<details>' +
                        '<summary>Show details</summary>' +
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
                    '</details>')
            })
        })
        describe('Table', () => {
            it('properly build widget', () => {
                const node =
                    table([
                        caption('Related semantics'),
                        thead(tr([th(abbr('HTML')), th(abbr('WAI-ARIA'))])),
                        tbody([
                            ['button', 'button'],
                            ['a, link, area', 'link'],
                            ['input', 'textbox'],
                            ['select', 'combobox'],
                            ['table', 'table, grid'],
                            ['ul, ol', 'list'],
                        ].map(([xmlterm, htmlterm]) =>
                            tr([td(code(xmlterm)), td(code(htmlterm))]))),
                        tfoot([tr([th('9'), th('7')])])
                    ]).node
                assert.equal(node.outerHTML,
                    '<table>' +
                        '<caption>Related semantics</caption>' +
                        '<thead><tr>' +
                            '<th><abbr>HTML</abbr></th><th><abbr>WAI-ARIA</abbr></th>' +
                        '</tr></thead>' +
                        '<tbody>' +
                            '<tr><td><code>button</code></td><td><code>button</code></td></tr>' +
                            '<tr><td><code>a, link, area</code></td><td><code>link</code></td></tr>' +
                            '<tr><td><code>input</code></td><td><code>textbox</code></td></tr>' +
                            '<tr><td><code>select</code></td><td><code>combobox</code></td></tr>' +
                            '<tr><td><code>table</code></td><td><code>table, grid</code></td></tr>' +
                            '<tr><td><code>ul, ol</code></td><td><code>list</code></td></tr>' +
                        '</tbody>' +
                        '<tfoot><tr><th>9</th><th>7</th></tr></tfoot>' +
                    '</table>')
            })
        })
        describe('Ruby annotations', () => {
            it('properly build DOM structure', () => {
                const node =
                    article([
                        h1('Ruby annotations'),
                        section([
                            ruby(['君', rt('くん')]),
                            ruby(['子', rt('し')]), 'は',
                            ruby(['和', rt('わ')]), 'して',
                            ruby(['同', rt('どう')]), 'ぜず。'
                        ]),
                        section(ruby([
                            '漢', rp(' ('), rt('かん'), rp(')'),
                            '字', rp(' ('), rt('じ'), rp(')')
                        ]))
                    ]).node
                assert.equal(node.outerHTML,
                    '<article>' +
                        '<h1>Ruby annotations</h1>' +
                        '<section>' +
                            '<ruby>君<rt>くん</rt></ruby><ruby>子<rt>し</rt></ruby>は' +
                            '<ruby>和<rt>わ</rt></ruby>して<ruby>同<rt>どう</rt></ruby>ぜず。' +
                        '</section>' +
                        '<section>' +
                            '<ruby>' +
                                '漢<rp> (</rp><rt>かん</rt><rp>)</rp>' +
                                '字<rp> (</rp><rt>じ</rt><rp>)</rp>' +
                            '</ruby>' +
                        '</section>' +
                    '</article>')
            })
        })
        describe('Bidirectional', () => {
            it('properly build DOM structure', () => {
                const children = 'АРОЗАУПАЛА'
                const node =
                    article([
                        h1('Bidirectional'),
                        section([
                            children,
                            'Н',
                            bdo({ dir : 'rtl', children })
                        ]),
                        ul([
                            li(['User ',
                                bdi('jcranmer'),
                                ': 12 posts.']),
                            li(['User ',
                                bdi('hober'),
                                ': 5 posts.']),
                            li(['User ',
                                bdi('إيان'),
                                ': 3 posts.'])
                        ])
                    ]).node
                assert.equal(node.outerHTML,
                    '<article>' +
                        '<h1>Bidirectional</h1>' +
                        '<section>АРОЗАУПАЛАН<bdo dir="rtl">АРОЗАУПАЛА</bdo></section>' +
                        '<ul>' +
                            '<li>User <bdi>jcranmer</bdi>: 12 posts.</li>' +
                            '<li>User <bdi>hober</bdi>: 5 posts.</li>' +
                            '<li>User <bdi>إيان</bdi>: 3 posts.</li>' +
                        '</ul>' +
                    '</article>')
            })
        })
        describe('Other', () => {
            it('property build DOM fragment', () => {
                const node =
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
                    ]).node
                assert.equal(node.outerHTML,
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
                    '</main>')
            })
            it('HTMLElementAssembler, span', () => {
                const test1 = new HTMLElementAssembler({
                    localName : 'span',
                    id : '00101',
                    className :'fa fi fu',
                    tabIndex : 0,
                    children : ['a', span('a b'), 'b']
                })
                const node1 = test1.node
                const test2 = span({
                    id : '00101',
                    className :'fa fi fu',
                    tabIndex : 0,
                    children : ['a', span('a b'), 'b']
                })
                const node2 = test2.node
                ;[node1, node2].forEach(node => {
                    assert.equal(node.nodeType, ELEMENT_NODE)
                    assert.equal(node.tagName, 'SPAN')
                    assert.instanceOf(node, test1.constructor.interface)
                    assert.instanceOf(node, test2.constructor.interface)
                    assert.equal(node.attributes.length, 3)
                    assert.equal(node.id, '00101')
                    assert.equal(node.className, 'fa fi fu')
                    assert.equal(node.tabIndex, 0)
                    assert.equal(node.children.length, 1)
                    assert.equal(node.childNodes.length, 3)
                    assert.equal(node.childNodes[0].nodeType, TEXT_NODE)
                    assert.equal(node.childNodes[1].constructor, HTMLSpanElement)
                    assert.equal(node.childNodes[2].textContent, 'b')
                })
                assert(node1.isEqualNode(node2), 'HTMLElementAssembler and span work properly')
            })
        })
    })
})
