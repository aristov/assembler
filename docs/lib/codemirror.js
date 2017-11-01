import { Div } from './htmlmodule'

import CodeMirror from 'codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/htmlmixed/htmlmixed'

import 'codemirror/lib/codemirror.css'
import './codemirror.css'

const CODE_BOX_DEFAULTS = {
    mode : 'javascript',
    indentUnit : 4,
    tabSize : 4,
    indentWithTabs : true,
    electricChars : true,
    styleActiveLine : true,
    autoCloseBrackets : true,
    matchBrackets : true,
    smartIndent : true,
}

const MARKUP_BOX_DEFAULTS = {
    mode : 'htmlmixed',
    readOnly : true,
}

export class CodeMirrorAssembler extends Div {
    /**
     * Assemble widget DOM structure
     * @param {*} init
     */
    init(init) {
        this.createMirror(init.options)
        delete init.options
        super.init(init)
    }

    /**
     * Create the CodeMirror instance
     * @param {Object} options
     * @returns {CodeMirror}
     */
    createMirror(options) {
        return this.mirror = new CodeMirror(this.node, options)
    }

    /**
     * Refresh the CodeMirror instance
     */
    refresh() {
        this.mirror.refresh()
    }

    /**
     * Set the editor value
     * @param {String} value
     */
    set value(value) {
        this.mirror.setValue(value && value.toString())
    }

    /**
     * Get the editor value
     * @returns {String}
     */
    get value() {
        return this.mirror.getValue()
    }

    /**
     * Get the editor client height
     * @returns {Number}
     */
    get height() {
        return this.node.clientHeight
    }

    /**
     * Set the onchange event handler
     * @param {Function} onchange
     */
    set onchange(onchange) {
        this.mirror.on('change', onchange)
    }

    /**
     * Set a unique id on the editor's textarea element
     * @param {String} id
     */
    set id(id) {
        this.node.querySelector('textarea').id = id
    }
}

/**
 * CodeMirror instance
 * @property mirror
 * @type {CodeMirror|null}
 */
CodeMirrorAssembler.prototype.mirror = null

/**
 * Create generic codemirror widget
 * @param init
 * @returns {CodeMirrorAssembler}
 */
export function codemirror(init = {}) {
    return new CodeMirrorAssembler(init)
}

/**
 * Create codebox widget
 * @param init
 * @returns {CodeMirrorAssembler}
 */
export function codebox(init = {}) {
    if(!init.options) init.options = CODE_BOX_DEFAULTS
    return codemirror(init)
}

/**
 * Create markupbox widget
 * @param init
 * @returns {CodeMirrorAssembler}
 */
export function markupbox(init = {}) {
    if(!init.options) init.options = MARKUP_BOX_DEFAULTS
    return codemirror(init)
}
