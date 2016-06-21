// import components
import Instance from '../../components/Instance';
import Button from '../../components/Button';
import TextBox from '../../components/TextBox';
import CheckBox from '../../components/CheckBox';
import Dialog from '../../components/Dialog';

// import template engine
import DOMTransform from '../../tools/DOMTransform';
import DON from '../../tools/DON';

// import templates
import button from '../../templates/button.js';
import textbox from '../../templates/textbox.js';
import checkbox from '../../templates/checkbox.js';
import dialog from '../../templates/dialog.js';

// import styles
require('./index.css');

// create application components
class TodoApp extends Instance {
    constructor(element) {
        super(element);
        element.dataset.instance = this.constructor.name;
        element.appendChild(DON.toDOM(domTransform.apply(this.load())));
        element.querySelector('form').addEventListener('submit', this.onSubmit.bind(this));
        this.list = element.querySelector('ul');
        this.attach(Button, TextBox, CheckBox);
        this.findAll(TodoItem);
    }
    attach(...components) {
        components.forEach(Component => Component.attachTo(this.element));
    }
    onSubmit(event) {
        const textbox = this.find(TextBox);
        const text = textbox.value.trim();
        if(text) {
            const element = DON.toDOM(domTransform.apply({ element : 'todoitem', text }));
            TodoItem.getInstance(this.list.appendChild(element));
            textbox.value = '';
            this.save();
        } else textbox.focus();
        event.preventDefault();
    }
    save() {
        localStorage.setItem('TodoApp', JSON.stringify({
            element : 'todoapp',
            items : this.findAll(TodoItem).map(({ text, done }) => ({ element : 'todoitem', text, done }))
        }));
    }
    load() {
        const storage = localStorage.getItem('TodoApp');
        return storage? JSON.parse(storage) : { element : 'todoapp', items : [] };
    }
}

class TodoItem extends Instance {
    constructor(element) {
        super(element);
        this.app = this.closest(TodoApp);
        this.checkbox = this.find(CheckBox).on('change', () => this.app.save());
        this.find(Button).on('click', this.onButtonClick, this);
        this.dialog = Dialog.getInstance(document.getElementById('removeitemconfirm'));
        this.onDialogSubmit = this.onDialogSubmit.bind(this);
    }
    get expanded() {
        return this.element.getAttribute('aria-expanded') || 'false';
    }
    set expanded(expanded) {
        if(expanded !== this.expanded) {
            this.element.setAttribute('aria-expanded', expanded);
            if(expanded === 'true') {
                this.dialog.element.addEventListener('submit', this.onDialogSubmit);
                this.dialog.hidden = 'false';
            } else {
                this.dialog.element.removeEventListener('submit', this.onDialogSubmit);
                this.dialog.hidden = 'true';
            }
        }
    }
    get text() {
        return this.element.querySelector('.text').textContent;
    }
    get done() {
        return this.checkbox.checked;
    }
    onDialogSubmit(event) {
        this.expanded = 'false';
        this.remove();
        event.preventDefault();
    }
    onButtonClick() {
        if(this.done === 'true') this.remove();
        else {
            this.dialog.trigger = this;
            this.expanded = 'true';
        }
    }
    remove() {
        this.element.parentElement.removeChild(this.element);
        this.app.save();
    }
    focus() {
        this.checkbox.focus();
    }
}

// create template engine instance
const domTransform = new DOMTransform;

// connect lib templates
[button, textbox, checkbox, dialog].forEach(template => template(domTransform));

// write application templates
domTransform.element('todoapp', function({ items }) {
    return this.apply({
        element : 'main',
        content : [
            { element : 'h2', content : 'TODO list' },
            {
                element : 'form',
                content : [
                    {
                        element : 'textbox',
                        attributes : { placeholder : 'What are you going to do?' }
                    },
                    {
                        element : 'button',
                        attributes : { type : 'submit' },
                        content : 'Remember'
                    }
                ]
            },
            { element : 'ul', content : items },
            {
                element : 'confirmdialog',
                attributes : {
                    text : 'Item is not marked as "done". Are you sure?',
                    id : 'removeitemconfirm',
                    submitLabel : 'Remove item'
                }
            }
        ]
    });
});

domTransform.element('confirmdialog', function({ attributes, content }) {
    return this.apply({
        element : 'dialog',
        attributes : { modal : 'true', id : attributes.id },
        content : content || {
            element : 'form',
            content : [
                { element : 'p', content : attributes.text },
                {
                    element : 'button',
                    attributes : { type: 'submit', mix : 'accent' },
                    content : attributes.submitLabel || 'Ok'
                },
                {
                    element : 'button',
                    attributes : { type: 'close' },
                    content : attributes.dismissLabel || 'Cancel'
                }
            ]
        }
    });
});

domTransform.element('todoitem', function({ text, done }) {
    return {
        element : 'li',
        attributes : { 'data-instance' : 'TodoItem', 'aria-haspopup' : 'true', draggable : 'false' },
        content : this.apply([
            {
                element : 'checkbox',
                attributes : { checked : done, title : 'Mark as "done"' }
            },
            {
                element : 'span',
                attributes : { 'class' : 'text' },
                content : text
            },
            {
                element : 'button',
                attributes : { view : 'removebutton', type : 'remove', title : 'Remove' },
                content : '×'
            }
        ])
    };
});

// init app
new TodoApp(document.body);
