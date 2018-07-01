import { HTMLElementAssembler } from './element'

const { HTMLTableCaptionElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-caption-element
 */
export class Caption extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLTableCaptionElement
     * @override
     */
    static get interface() {
        return HTMLTableCaptionElement || super.interface
    }
}

/**
 * @param {*} [init]
 * @returns {Caption}
 */
export function caption(init) {
    return new Caption(init)
}

Caption.register()
