const map = Array.prototype.map;
const { TEXT_NODE, COMMENT_NODE, ELEMENT_NODE } = window.Node;

const EMPTY_TAG_LIST = 'AREA BASE BR EMBED HR IMG INPUT KEYGEN LINK META PARAM SOURCE TRACK WBR';
const EMPTY_TAG_SET = EMPTY_TAG_LIST.split(' ').reduce((res, tag) => (res[tag] = true, res), {});

const isEmptyTag = node => {
    if(node.constructor === Element && !node.hasChildNodes()) return true;
    return Boolean(EMPTY_TAG_SET[node.tagName]);
}

const DEFAULT_OPTIONS = {
    indent : ' '.repeat(4),
    linebreak : '\n',
    level : 0
};

/**
 * Simple DOM to markup serializing utility.
 * Supports a lightweight configurable markup code auto-indentation.
 */
export class DOMSerializer {
    /**
     * Instantiate a DOM serializer with indentation options
     * @param {{}} options
     */
    constructor(options = DEFAULT_OPTIONS) {
        this.indent = options.indent;
        this.linebreak = options.linebreak;
        this.level = options.level;
    }

    /**
     * Serializes a given DOM node to a HTML-markup string.
     * @param {Node} node to serialize
     * @returns {String}
     */
    serializeToString(node) {
        let {
            nodeType,
            tagName,
            attributes,
            childNodes,
            innerHTML,
            data
        } = node;
        const linebreak = this.linebreak;
        let indent = this.indent.repeat(this.level);
        let result = indent;
        switch(nodeType) {
            case ELEMENT_NODE:
                tagName = tagName.toLowerCase();
                result += '<' + tagName;
                const hasAttributes = node.hasAttributes();
                if(hasAttributes) {
                    const attrchunks = map.call(
                        attributes,
                        ({ name, value }) => {
                            return ` ${ name }="${ value.replace(/\"/g, '&quot;') }"`;
                        })
                    result += attrchunks.join('');
                }
                const hasEndTag = !isEmptyTag(node);
                const selfClose = node.constructor === Element? '/>' : '>';
                result += hasEndTag? '>' : selfClose;
                if(hasEndTag && node.hasChildNodes()) {
                    const isSingleText = childNodes.length === 1
                        && childNodes[0].nodeType === Node.TEXT_NODE;
                    if(!hasAttributes && isSingleText) {
                        result += node.innerHTML;
                        indent = '';
                    } else {
                        this.level++;
                        const childchunks = map.call(childNodes, this.serializeToString, this);
                        this.level--;
                        result += linebreak + childchunks.join('');
                    }
                } else indent = '';
                if(hasEndTag) result += indent + `</${ tagName }>`;
                break;
            case TEXT_NODE:
                result += innerHTML || data;
                break;
            case COMMENT_NODE:
                result += `<!--${ data }-->`;
                break;
        }
        result += linebreak;
        return result;
    }
}
