import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLHRElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-hr-element
 */
export class Hr extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLHRElement
     * @override
     */
    static get interface() {
        return HTMLHRElement || super.interface
    }
}

export const HTMLHr = Hr

/**
 * @param {*} [init]
 * @returns {Hr}
 */
export function hr(init) {
    return new Hr(init)
}

Hr.register()