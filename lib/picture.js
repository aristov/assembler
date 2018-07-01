import { HTMLElementAssembler } from './element'

const { HTMLPictureElement } = window

export class Picture extends HTMLElementAssembler {
    /**
     * @returns {interface} HTMLPictureElement
     * @override
     */
    static get interface() {
        return HTMLPictureElement
    }
}

/**
 * @param {*} [init]
 * @returns {Picture}
 */
export function picture(init) {
    return new Picture(init)
}

Picture.register()
