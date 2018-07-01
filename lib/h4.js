import { HTMLElementAssembler } from './element'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-h4-element
 */
export class H4 extends HTMLElementAssembler {}

/**
 * @param {*} [init]
 * @returns {H4}
 */
export function h4(init) {
    return new H4(init)
}

H4.register()
