const map = Array.prototype.map;

export default class Instance {
    constructor(element) {
        element.instance = this;
        this.element = element;
    }
    get id() {
        return this.element.id || '';
    }
    get hidden() {
        return String(this.element.hidden);
    }
    set hidden(hidden) {
        this.element.hidden = hidden === 'true';
    }
    get disabled() {
        return this.element.getAttribute('aria-disabled') || 'false';
    }
    set disabled(disabled) {
        this.element.setAttribute('aria-disabled', disabled);
    }
    on(type, listener, context) {
        this.element.addEventListener(type, listener.bind(context || this));
        return this;
    }
    emit(type) {
        this.element.dispatchEvent(new Event(type, { bubbles : true, cancelable : true }));
        return this;
    }
    find(Class, filter) {
        return filter?
            this.findAll(Class, filter)[0] || null :
            Class.getInstance(this.element.querySelector(`[data-instance=${Class.name}]`));
    }
    findAll(Class, filter) {
        const result = map.call(
            this.element.querySelectorAll(`[data-instance=${Class.name}]`),
            element => Class.getInstance(element));
        return filter? result.filter(filter) : result;
    }
    closest(Class, filter) {
        let instance = this;
        do instance = Class.getInstance(instance.element.parentElement.closest(`[data-instance=${Class.name}]`));
        while(instance && filter && !filter(instance));
        return instance;
    }
    static getInstance(element) {
        return element && element.dataset && element.dataset.instance === this.name?
            element.instance || new this(element) :
            null;
    }
    static closestInstance(element) {
        return this.getInstance(element.closest(`[data-instance=${this.name}]`));
    }
    static on(type, listener, context) {
        document.addEventListener(type, event => {
            const instance = context?
                context.closestInstance(event.target) :
                this.closestInstance(event.target);
            if(instance) listener.call(instance, event);
        }, true);
    }
}
