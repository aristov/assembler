import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLSpanElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-span-element
 */
export class Span extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLSpanElement
     * @override
     */
    static get interface() {
        return HTMLSpanElement || super.interface
    }
}

export const HTMLSpan = Span

/**
 * @param {*} [init]
 * @returns {Span}
 */
export function span(init) {
    return new Span(init)
}

Span.register()
