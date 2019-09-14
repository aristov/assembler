import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-u-element
 */
export class U extends HTMLElementAssembler {}

export const HTMLU = U

/**
 * @param {*} [init]
 * @returns {U}
 */
export function u(init) {
    return new U(init)
}

U.register()