import { HTMLElementAssembler } from './element'

const { HTMLHtmlElement } = window

export class Html extends HTMLElementAssembler {
    static get interface() {
        return HTMLHtmlElement
    }
}

/**
 * @param {*} [init]
 * @returns {Html}
 */
export function html(...init) {
    return new Html(...init)
}
