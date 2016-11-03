import {
    a, abbr, address, area, article, aside, audio,
    b, base, bdi, bdo, blockquote, body, br, button,
    canvas, caption, cite, code, col, colgroup,
    data, datalist, dd, del, details, dfn, dialog, div, dl, dt,
    em, embed,
    fieldset, figcaption, figure, footer, form,
    h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html,
    i, iframe, img, input, ins,
    kbd, keygen,
    label, legend, li, link,
    main, map, mark, menu, menuitem, meta, meter,
    nav, noscript,
    object, ol, optgroup, option, output,
    p, param, picture, pre, progress,
    q,
    rp, rt, ruby,
    s, samp, script, section, select, slot, small, source,
    span, strong, style, sub, summary, sup,
    table, tbody, td, template, textarea, tfoot, th, thead, time, title, tr, track,
    u, ul,
    variable, video,
    wbr
} from '../htmldom';


const Text = function(text) { return document.createTextNode(text) };

/*const babelOptions = {
    presets : ['es2015'],
    plugins : ['transform-es2015-modules-commonjs']
};

const BABEL_URL = 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.14.0/babel.min.js';

let babelscript;

// label([babelbox, ' use Babel']),

const babelbox = input({
    type : 'checkbox',
    onchange : event => {
        if(!babelscript) babelLoad();
    }
});

function babelLoad() {
    if(window.Babel) delete window.Babel;
    document.body.append(babelscript = script({ src : BABEL_URL }));
}*/

// DOM module
// DOM serializer
// DOM assembler

// HTMLDOM



abbr({ title : 'Hyper text markup language', children : 'html' })

abbr({ title : 'Hyper text markup language' }, 'html')



/**
 * todo thinkme
 * Creates and initializes the specified element
 *
 * @param {String} tagName element tag name
 * @param init.global{} — [global] `HTMLElement` attributes
 * @param {*} [init] object
 * @param {*} [children] object
 */
export const htmldom = (tagName, init, children) => {
    if(children) init.children = children;
    assembler.createElement(tagName, init);
}
