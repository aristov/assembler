import { HTMLElementAssembler } from './HTMLElementAssembler'

const _map = Array.prototype.map
const { HTMLMapElement } = window

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-map-element
 */
export class Map extends HTMLElementAssembler {
    /**
     * @returns {Area[]}
     */
    get areas() {
        return _map.call(this.node.areas, node => this.getInstanceOf(node))
    }

    /**
     * @returns {array.Img|array.HTMLObject}
     */
    get images() {
        return _map.call(this.node.images, node => this.getInstanceOf(node))
    }

    /**
     * @param {string} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {string}
     */
    get name() {
        return this.node.name
    }

    /**
     * @returns {interface} HTMLMapElement
     * @override
     */
    static get interface() {
        return HTMLMapElement || super.interface
    }
}

export const HTMLMap = Map

/**
 * @param {*} [init]
 * @returns {Map}
 */
export function map(init) {
    return new Map(init)
}

Map.register()
