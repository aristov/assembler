const { defineProperty, getOwnPropertyDescriptor } = Object
const TYPE_FUNCTION = 'function'

/**
 * @param {Object} assembler
 * @param {Array} [keys]
 * @returns {*}
 */
export function nodeProxy(assembler, keys) {
    const source = assembler.interface.prototype
    const target = assembler.prototype
    if(!keys) keys = Object.keys(source)
    keys.forEach(prop => {
        if(!(prop in target)) {
            const descriptor = getOwnPropertyDescriptor(source, prop)
            if(typeof descriptor.value === TYPE_FUNCTION) {
                defineProperty(target, prop, {
                    configurable : true,
                    value(...args) {
                        return this.node[prop](...args)
                    }
                })
            }
            else if(typeof descriptor.get === TYPE_FUNCTION) {
                function get() {
                    return this.node[prop]
                }
                if(typeof descriptor.set === TYPE_FUNCTION) {
                    function set(value) {
                        this.node[prop] = value
                    }
                    defineProperty(target, prop, { configurable : true, set, get })
                }
                else {
                    defineProperty(target, prop, { configurable : true, get })
                }
            }
        }
    })
    return assembler
}
