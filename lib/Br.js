import { HTMLElementAssembler } from './HTMLElementAssembler'

const { HTMLBRElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-br-element
 */
export class Br extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLBRElement
     * @override
     */
    static get interface() {
        return HTMLBRElement || super.interface
    }
}

export const HTMLBr = Br

/**
 * @param {*} [init]
 * @returns {Br}
 */
export function br(init) {
    return new Br(init)
}

Br.register()
