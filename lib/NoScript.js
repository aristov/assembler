import { HTMLElementAssembler } from './HTMLElementAssembler'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-noscript-element
 */
export class NoScript extends HTMLElementAssembler {}

export const HTMLNoScript = NoScript

/**
 * @param {*} [init]
 * @returns {NoScript}
 */
export function noscript(init) {
    return new NoScript(init)
}

NoScript.register()