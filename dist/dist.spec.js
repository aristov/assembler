import { xmldom, htmldom, element, text, comment, span, a } from './dist';

import chai from 'chai';

const { assert } = chai;
const { Node, Element, Text, Comment, HTMLSpanElement, HTMLAnchorElement } = window;
const { ELEMENT_NODE, TEXT_NODE, COMMENT_NODE } = Node;

const serializer = new XMLSerializer;

describe('DOM module', () => {
    describe('dom', () => {
        it('xmldom', () => {
            const node = xmldom('pipi7', {
                attrset : { g : '+++', j : '---', w : '!!!' }
            });
            assert.equal(node.nodeType, ELEMENT_NODE);
            assert.equal(node.tagName, 'pipi7');
            assert.equal(node.constructor, Element);
            assert.equal(node.getAttribute('g'), '+++');
            assert.equal(node.getAttribute('j'), '---');
            assert.equal(node.getAttribute('w'), '!!!');
        });
        it('element', () => {
            const node = element('bafi4');
            assert.equal(node.nodeType, ELEMENT_NODE);
            assert.equal(node.tagName, 'element');
            assert.equal(node.constructor, Element);
        });
        it('text', () => {
            const node = text('cuce31');
            assert.equal(node.nodeType, TEXT_NODE);
            assert.equal(node.constructor, Text);
            assert.equal(serializer.serializeToString(node), 'cuce31');
        });
        it('comment', () => {
            const node = comment('tuty5');
            assert.equal(node.nodeType, COMMENT_NODE);
            assert.equal(node.constructor, Comment);
            assert.equal(serializer.serializeToString(node), '<!--tuty5-->');
        });
    });
    describe('html', () => {
        it('htmldom, span', () => {
            const node1 = htmldom('span', {
                id : '00101',
                className :'fa fi fu',
                tabIndex : 0,
                children : ['a', comment('a b'), 'b']
            });
            const node2 = span({
                id : '00101',
                className :'fa fi fu',
                tabIndex : 0,
                children : ['a', comment('a b'), 'b']
            });
            [node1, node2].forEach(node => {
                assert.equal(node.nodeType, ELEMENT_NODE);
                assert.equal(node.tagName, 'SPAN');
                assert.equal(node.constructor, HTMLSpanElement);
                assert.equal(node.attributes.length, 3);
                assert.equal(node.id, '00101');
                assert.equal(node.className, 'fa fi fu');
                assert.equal(node.tabIndex, 0);
                assert.equal(node.children.length, 0);
                assert.equal(node.childNodes.length, 3);
                assert.equal(node.childNodes[0].nodeType, TEXT_NODE);
                assert.equal(node.childNodes[1].constructor, Comment);
                assert.equal(node.childNodes[2].textContent, 'b');
            });
            assert(node1.isEqualNode(node2), 'htmldom() and span() works differently');
        });
        it('a', () => {
            const node = a({
                href : 'html://www.aria.dom/math.svg',
                rel : 'next',
                title : 'om dom dom dom d',
                textContent : 'DOM module'
            });
            assert.equal(node.tagName, 'A');
            assert.equal(node.constructor, HTMLAnchorElement);
            assert.equal(node.href, 'html://www.aria.dom/math.svg');
            assert.equal(node.rel, 'next');
            assert.equal(node.title, 'om dom dom dom d');
            assert.equal(node.textContent, 'DOM module');
        });
    });
});
