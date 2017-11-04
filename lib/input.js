import { HTMLElementAssembler } from './element'

const { HTMLInputElement } = window

export class Input extends HTMLElementAssembler {
    set value(value) {
        this.node.value = value
    }

    get value() {
        return this.node.value
    }

    set type(type) {
        this.node.type = type
    }

    get type() {
        return this.node.type
    }

    set readOnly(readOnly) {
        this.node.readOnly = readOnly
    }

    get readOnly() {
        return this.node.readOnly
    }

    static get interface() {
        return HTMLInputElement
    }

    static get proxyPropertyNames() {
        return ['checked', 'disabled', 'required']
    }
}


const { defineProperty, getOwnPropertyDescriptor } = Object
const target = Input.prototype
const source = Input.interface.prototype

const keys = Input.proxyPropertyNames
// const keys = ['checked', 'disabled', 'required']
// const keys = Object.keys(source)

keys.forEach(prop => {
    if(!(prop in Input.prototype)) {
        const descriptor = getOwnPropertyDescriptor(source, prop)
        if(typeof descriptor.get === 'function') {
            function get() {
                return this.node[prop]
            }
            if(typeof descriptor.set === 'function') {
                function set(value) {
                    this.node[prop] = value
                }
                defineProperty(target, prop, { configurable : true, set, get })
            }
            else {
                defineProperty(target, prop, { configurable : true, get })
            }
        }
        else if(typeof descriptor.value === 'function') {
            defineProperty(target, prop, {
                configurable : true,
                value(...args) {
                    return this.node[prop](...args)
                }
            })
        }
    }
})

/**
 * @param {*} [init]
 * @returns {Input}
 */
export function input(init) {
    return new Input(init)
}
