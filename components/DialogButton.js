import Button from './Button';
import Dialog from './Dialog';

export default class DialogButton extends Button {
    constructor(element) {
        super(element);

        this.dialog = Dialog.getInstance(document.getElementById(this.controls));

        document.addEventListener('click', this.onDocumentClick.bind(this));
        document.addEventListener('focus', this.onDocumentFocus.bind(this), true);
    }
    onDocumentClick(event) {
        if(this.expanded === 'true') {
            let target = event.target;
            if(!this.element.contains(target) && !this.dialog.element.contains(target)) {
                this.expanded = 'false';
            }
        }
    }
    onDocumentFocus(event) {
        if(this.expanded === 'true') {
            let target = event.target;
            if(target !== this.element && !this.dialog.element.contains(target)) {
                //this.expanded = 'false';
                this.element.focus();
            }
        }
    }
    static getInstance(element) {
        return element.dataset && element.dataset.instance === 'dialogbutton'?
            element.instance || new this(element) :
            null;
    }
    static attachToDocument() {
        document.addEventListener('focus', function(event) {
            this.getInstance(event.target);
        }.bind(this), true);
    }
}
