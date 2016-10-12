/**
 * Element.prototype.onclick invoke on Element.prototype.click call
 * Event system normalization for MSIE 11
 *
 * @polyfill
 */
const span = document.createElement('span');
if('click' in span && 'onclick' in span) {
    let called = null;
    span.onclick = event => called = event;
    span.click();
    if(!called) {
        const proto = HTMLElement.prototype
        const _click = proto.click;
        proto.click = function() {
            _click.call(this);
            if('onclick' in this && typeof this.onclick === 'function') {
                const event = document.createEvent('Event');
                event.initEvent('click', true, true);
                this.onclick(event);
            }
        }
    }
}
