import { HTMLElementAssembler } from './HTMLElementAssembler'

const { map } = Array.prototype
const { HTMLProgressElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-progress-element
 */
export class Progress extends HTMLElementAssembler {
    /**
     * @param {number} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {number}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {number} max
     */
    set max(max) {
        this.node.max = max
    }

    /**
     * @returns {number}
     */
    get max() {
        return this.node.max
    }

    /**
     * @returns {number}
     */
    get position() {
        return this.node.position
    }

    /**
     * @returns {Label[]}
     */
    get labels() {
        return map.call(this.node.labels, node => this.getInstanceOf(node))
    }

    /**
     * @returns {interface} HTMLProgressElement
     * @override
     */
    static get interface() {
        return HTMLProgressElement || super.interface
    }
}

export const HTMLProgress = Progress

/**
 * @param {*} [init]
 * @returns {Progress}
 */
export function progress(init) {
    return new Progress(init)
}

Progress.register()
