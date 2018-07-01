import { HTMLElementAssembler } from './element'

const { HTMLQuoteElement } = window

export class Q extends HTMLElementAssembler {
    /**
     * @param {string} cite
     */
    set cite(cite) {
        this.node.cite = cite
    }

    /**
     * @returns {string}
     */
    get cite() {
        return this.node.cite
    }

    /**
     * @returns {interface} HTMLQuoteElement
     * @override
     */
    static get interface() {
        return HTMLQuoteElement
    }
}

/**
 * @param {*} [init]
 * @returns {Q}
 */
export function q(init) {
    return new Q(init)
}

Q.register()
