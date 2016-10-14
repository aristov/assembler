import { small, footer, a } from '../../lib';
import './sitenav.css';

const pathname = location.pathname;

const children = [
    a({
        href : './api/',
        target : '_blank',
        children : 'api doc'
    }),
    a({
        href : './spec.html',
        children : 'spec suite'
    }),
    a({
        href : './repl.html',
        children : 'repl machine'
    }),
    a({
        href : './test.html',
        children : 'test case'
    }),
    a({
        href : '//github.com/aristov/htmlmodule',
        target : '_blank',
        children : 'git repo'
    })
];

children.forEach(link => {
    if(link.pathname === pathname) link.removeAttribute('href');
});

const node = document.getElementById('sitenav');
if(node) node.append(...children, small('assembled by htmlmodule'));

export const sitenav = init => footer({ id : 'sitenav', children });
