/**
 * Details Element Polyfill 1.0.0
 * Copyright © 2016 Javan Makhmali
 */
(function(){}).call(this),function(){var t,e,n,r,o,u,i,a,l;i={element:function(){var t,e,n,r,o;return e=document.createElement("details"),"open"in e?(e.innerHTML="<summary>a</summary>b",e.setAttribute("style","position: absolute; left: -9999px"),r=null!=(o=document.body)?o:document.documentElement,r.appendChild(e),t=e.offsetHeight,e.open=!0,n=e.offsetHeight,r.removeChild(e),t!==n):!1}(),toggleEvent:function(){var t;return t=document.createElement("details"),"ontoggle"in t}()},i.element&&i.toggleEvent||(r=function(){return document.head.insertAdjacentHTML("afterbegin",'<style>@charset"UTF-8";details:not([open])>*:not(summary){display:none;}details>summary{display:block;}details>summary::before{content:"\u25ba";padding-right:0.3rem;font-size:0.6rem;cursor:default;}details[open]>summary::before{content:"\u25bc";}</style>')},n=function(){var t,e,n,r,o;return t=document.createElement("details").constructor.prototype,r=t.setAttribute,n=t.removeAttribute,o=null!=(e=Object.getOwnPropertyDescriptor(t,"open"))?e.set:void 0,Object.defineProperties(t,{open:{set:function(t){return"DETAILS"===this.tagName?(t?this.setAttribute("open",""):this.removeAttribute("open"),t):null!=o?o.call(this,t):void 0}},setAttribute:{value:function(t,e){return l(this,function(n){return function(){return r.call(n,t,e)}}(this))}},removeAttribute:{value:function(t){return l(this,function(e){return function(){return n.call(e,t)}}(this))}}})},o=function(){return e(function(t){return t.hasAttribute("open")?t.removeAttribute("open"):t.setAttribute("open","")})},u=function(){var t;return"undefined"!=typeof MutationObserver&&null!==MutationObserver?(t=new MutationObserver(function(t){var e,n,r,o,u,i;for(u=[],n=0,r=t.length;r>n;n++)o=t[n],i=o.target,e=o.attributeName,"DETAILS"===i.tagName&&"open"===e?u.push(a(i)):u.push(void 0);return u}),t.observe(document.documentElement,{attributes:!0,subtree:!0})):e(function(t){var e;return e=t.getAttribute("open"),setTimeout(function(){return t.getAttribute("open")!==e?a(t):void 0},1)})},t=function(t){return!(t.defaultPrevented||t.which>1||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.target.isContentEditable)},e=function(e){return addEventListener("click",function(n){var r,o,u;return t(n)&&(o=n.target,u=o.tagName,r=o.parentElement,"SUMMARY"===u&&"DETAILS"===(null!=r?r.tagName:void 0))?e(r):void 0},!1)},a=function(t){var e;return e=document.createEvent("Events"),e.initEvent("toggle",!0,!1),t.dispatchEvent(e)},l=function(t,e){var n,r;return n=t.getAttribute("open"),r=e(),t.getAttribute("open")!==n&&a(t),r},i.element||(r(),n(),o()),i.element&&!i.toggleEvent&&u())}.call(this),function(){}.call(this);

/**
 * HTMLDetailsElement interface polyfill
 */
/*{
    if(!'HTMLDetailsElement' in window) {
        const { HTMLElement } = window;
        class HTMLDetailsElement extends HTMLElement {
            set open(open) {
                if(open) this.setAttribute('open', '');
                else this.removeAttribute('open');
            }
        }
        window.HTMLDetailsElement = HTMLDetailsElement;
    }
}*/

/**
 * HTMLElement.ontoggle Polyfill
 * @copyright © 2016 Vyacheslav Aristov
 */
{
    const { HTMLElement : { prototype } } = window;
    if(!('ontoggle' in prototype)) {
        Object.defineProperties(prototype, {
            ontoggle : {
                configurable : true,
                enumerable : true,
                set(handler) {
                    this.__handler_ontoggle__ = typeof handler === 'function'?
                        handler.bind(this) :
                        null;
                },
                get() {
                    return this.__handler_ontoggle__;
                }
            },
            __handler_ontoggle__ : { writable : true, value : null }
        });
        /*document.addEventListener('click', event => {
            const target = event.target;
            if(target.tagName === 'SUMMARY') {
                const details = target.closest('details');
                if(details) {
                    const toggle = new CustomEvent('toggle', {
                        bubbles : true,
                        cancelable : true
                    });
                    details.dispatchEvent(toggle);
                }
            }
        }, true);*/
        document.addEventListener('toggle', event => {
            const target = event.target;
            if(typeof target.ontoggle) target.ontoggle(event);
        }, true);
    }
}

/**
 * details element stylesheet polyfill
 */
/*{
    const head = document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    const css = 'details:not([open])>*:not(summary){display:none!important}';
    style.textContent = css;
    head.appendChild(style);
}*/
