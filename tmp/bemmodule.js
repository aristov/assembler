import { HTMLAssembler } from 'htmlmodule';
import b_ from 'b_';

const BEM_CLASS_NAME = 'i-bem';

export class BEMAssembler extends HTMLAssembler {
    set block(block) {
        this._block = block;
        this.element.classList.add(block);
    }
    set elem(elem) {
        this._elem = elem;
        this.element.classList.add(b_(this._block, elem));
    }
    set mods(mods) {
        this.element.className += ' ' + b_(this._block, mods);
    }
    set elemMods(elemMods) {
        this.element.className += ' ' + b_(this._block, this._elem, elemMods);
    }
    set mix(mix) {
        this.element.classList.add(...mix);
    }
    set js(js) {
        this.element.classList.add(BEM_CLASS_NAME);
        this.dataset = {
            bem : typeof js === 'boolean'? '{}' : JSON.stringify(js)
        }
    }
    set cls(cls) {
        this._cls = cls;
        this.element.className += ' ' + cls;
    }
    set bem(bem) {
        this.className = this._cls || '';
    }
    set attrs(attrs) {
        this.attrset = attrs;
    }
    set content(content) {
        this.children = content;
    }
    createElement(tagName, {
        block,
        elem,
        mods,
        elemMods,
        mix,
        js,
        bem,
        ...init
    }) {
        this.element = super.createElement(tagName);
        if(bem !== false) {
            if(block) this.block = block;
            if(elem) this.elem = elem;
            if(mods) this.mods = mods;
            if(elemMods) this.elemMods = elemMods;
            if(mix) this.mix = mix;
            if(js) this.js = js;
        }
        this.init = init;
        return this.element;
    }
}

const bemassembler = new BEMAssembler;

const bemdom = ({ tag = 'div', ...init }) => {
    return bemassmebler.createElement(tag, init);
}

const block = (block, init) => {
    return bemdom({ block, ...init });
}

const elem = (block, elem, init) => {
    return bemdom({ block, elem, ...init });
}



const button = ({
    tag = 'button',
    ...init
}) => block('button', { tag, ...init });


const checkbox = ({
    label,
    content = [
        elem('checkbox', 'box', {
            tag : 'input',
            attrs : {
                type : 'checkbox',
                autocomplete : 'off'
            }
        }),
        content
    ],
    ...init
}) => block('checkbox', {
    tag : 'label',
    content,
    ...init
});
