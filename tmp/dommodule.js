export class NodeAssembler {
    set node(node) {}
    set nodeValue(nodeValue) {}
    set textContent(textContent) {}
    set childNodes(childNodes) {}
    set children(children) {}
    set init(init) {}
}

export class ElementAssembler {
    create(tagName, init) {}
    set element(node) {}
    set attributes(attributes) {}
    static get namespaceURI() {}
}

export class HTMLElementAssembler {
    set innerHTML(innerHTML) {}
}

export class CharacterDataAssembler {
    create(data) {}
    set data(data) {}
}

export class TextAssembler {
    create(data) {}
}

export class CommentAssembler {
    create(data) {}
}

export class DocumentAssembler {
    create(init) {}
    static get namespaceURI() {}
}
