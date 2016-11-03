import { style } from '../lib';

// import { cssrule } from 'cssrule';

const assign = Object.assign;
const element = document.createElement('span');

const cssrule = (selector, style) => {
    assign(element.style, style);
    return selector + '{' + element.getAttribute('style') + '}';
}

const stylesheet = style([
    cssrule('#siteheading', {
        fontFamily : 'monospace'
    }),
    cssrule('#sitenav', {
        display : 'flex',
        alignItems : 'space-between'
    })
]);

console.log(stylesheet);
