import { HTMLElementAssembler } from './element'

const { HTMLParamElement } = window

export class Param extends HTMLElementAssembler {
    /**
     * @returns {window.HTMLParamElement}
     */
    static get interface() {
        return HTMLParamElement
    }
}

/**
 * @param {*} [init]
 * @returns {Param}
 */
export function param(...init) {
    return new Param(...init)
}
