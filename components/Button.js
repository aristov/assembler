import Instance from './Instance';
import { ENTER, SPACE } from '../tools/keyCodes';

export default class Button extends Instance {
    constructor(element) {
        super(element);
        this.on('keydown', this.onKeyDown);
        this.on('keyup', this.onKeyUp);
    }
    get disabled() {
        return super.disabled;
    }
    set disabled(disabled) {
        super.disabled = disabled;
        if(disabled === 'true') this.element.removeAttribute('tabindex');
        else this.element.tabIndex = 0;
    }
    get pressed() {
        return this.element.getAttribute('aria-pressed') || '';
    }
    set pressed(pressed) {
        this.element.setAttribute('aria-pressed', pressed);
    }
    get controls() {
        return this.element.getAttribute('aria-controls') || '';
    }
    get expanded() {
        return this.element.getAttribute('aria-expanded') || '';
    }
    set expanded(expanded) {
        this.element.setAttribute('aria-expanded', expanded);
    }
    get text() {
        return this.element.textContent;
    }
    set text(text) {
        this.element.textContent = text;
    }
    get type() {
        return this.element.dataset.type;
    }
    get value() {
        return this.element.dataset.value;
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        if(keyCode === ENTER) this.emit('click');
        if(keyCode === SPACE) {
            event.preventDefault();
            event.repeat || this.element.classList.add('active');
        }
    }
    onKeyUp({ keyCode }) {
        if(keyCode === SPACE) {
            this.element.classList.remove('active');
            this.emit('click');
        }
    }
    onClick(event) {
        if(this.disabled === 'true') {
            event.stopImmediatePropagation();
            return;
        }
        if(this.pressed) {
            this.pressed = String(this.pressed === 'false');
            this.emit('change');
        }
        if(this.expanded) {
            this.expanded = String(this.expanded === 'false');
        }
        if(this.type === 'submit') {
            const form = this.element.closest('form');
            if(form) form.dispatchEvent(new Event('submit', { bubbles : true, cancelable : true }));
        }
    }
    focus() {
        this.element.focus();
    }
    static attachTo(node) {
        node.addEventListener('focus', ({ target }) => this.getInstance(target), true);
        node.addEventListener('click', event => {
            const button = this.closestInstance(event.target);
            if(button) button.onClick(event);
        }, true);
    }
}
