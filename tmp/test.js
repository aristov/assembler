import * as htmlmodule from '../../lib';
import { a, h1, input, code, div, pre, header, main, section, article, output }
from '../../lib';

import { sitenav } from './../docs/lib/sitenav';
import { siteheading } from './../docs/lib/siteheading';

import { HTMLSerializer } from '../util/util.htmlserializer.js';

import highlight from 'highlight.js/';
import '../node_modules/highlight.js/styles/agate.css';

import { testcase } from './testcase';

const serializer = new HTMLSerializer;

const items = testcase.map(item => {
    const element = item.fn(htmlmodule);
    const tagNames = [element.tagName];
    const collection = element.querySelectorAll('*');
    const elements = Array.from(collection);

    elements.forEach(({ tagName }) => {
        if(!tagNames.includes(tagName)) tagNames.push(tagName);
    });

    const srccodepre = pre({
        className : 'javascript',
        children : code(item.src)
    });
    const resmarkuppre = pre({
        className : 'html',
        children : code(serializer.serializeToString(element))
    });

    const id = tagNames.join('+').toLowerCase();
    const row = article({
        className : ['filteritem', ...tagNames].join(' ').toLowerCase(),
        children : [
            h1(a({
                id, href : '#' + id,
                className : 'testheading',
                children : tagNames.join(', ').toLowerCase()
            })),
            section([
                h1({
                    className : 'sectionheading',
                    children : 'source js'
                }),
                srccodepre
            ]),
            section([
                h1({
                    className : 'sectionheading',
                    children : 'result dom'
                }),
                output({
                    className : 'domoutput',
                    children : element
                })
            ]),
            section([
                h1({ className : 'sectionheading', children : 'resprective html' }),
                resmarkuppre
            ])
        ]
    });

    highlight.highlightBlock(srccodepre);
    highlight.highlightBlock(resmarkuppre);

    return row;
});

const ITEM_SELECTOR = 'article.filteritem.';

document.body.append(
    header([
        siteheading('test'),
        div({
            className : 'filterpane',
            children : input({
                type : 'search',
                className : 'filterbox',
                placeholder : 'filter...',
                oninput : ({ target : { value } }) => {
                    if(value = value.trim().toLowerCase()) {
                        const query = ITEM_SELECTOR +
                            value.replace(/[\s\.,-]+/g, ',' + ITEM_SELECTOR);
                        items.forEach(item => item.hidden = true);
                        try {
                            const collection = document.querySelectorAll(query);
                            Array.from(collection).forEach(node => node.hidden = false);
                        } catch(e) {}
                    } else {
                        items.forEach(item => item.hidden = false);
                    }
                }
            })
        }),
    ]),
    main({
        className : 'testcase',
        children : items
    }),
    sitenav()
);
