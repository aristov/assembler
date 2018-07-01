import { HTMLElementAssembler } from './element'

const { HTMLTitleElement } = window

export class Title extends HTMLElementAssembler {
    /**
     * @param {string} text
     */
    set text(text) {
        this.node.text = text
    }

    /**
     * @returns {string}
     */
    get text() {
        return this.node.text
    }

    /**
     * @returns {interface} HTMLTitleElement
     * @override
     */
    static get interface() {
        return HTMLTitleElement
    }
}

/**
 * @param {*} [init]
 * @returns {Title}
 */
export function title(init) {
    return new Title(init)
}

Title.register()
