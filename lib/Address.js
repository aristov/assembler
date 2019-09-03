import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-address-element
 */
export class Address extends HTMLElementAssembler {}

export const HTMLAddress = Address

/**
 * @param {*} [init]
 * @returns {Address}
 */
export function address(init) {
    return new Address(init)
}

Address.register()
