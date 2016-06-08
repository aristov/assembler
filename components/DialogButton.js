import Button from './Button';
import Dialog from './Dialog';

export default class DialogButton extends Button {
    constructor(element) {
        super(element);
        this.dialog = Dialog.getInstance(document.getElementById(this.controls));
        this.dialog.trigger = this;
    }
    get expanded() {
        return super.expanded;
    }
    set expanded(expanded) {
        super.expanded = expanded;
        let dialog = this.dialog,
            hidden = String(expanded === 'false');
        if(dialog.hidden !== hidden) dialog.hidden = hidden;
    }
    onKeyDown(event) {
        super.onKeyDown(event);
        if(event.keyCode === 27 && this.dialog.assertive === 'false') this.expanded = 'false';
        if(event.keyCode === 9 && event.shiftKey && this.expanded === 'true') {
            let widgets = this.dialog.widgets;
            event.preventDefault();
            widgets[widgets.length - 1].focus();
        }
    }
}
