htmlmodule => {

    const {
        // root and meta
        table, caption, col, colgroup,
        // sections and structure
        thead, tbody, tfoot, tr, th, td
    } = htmlmodule

    const { a, abbr, article, h1, link } = htmlmodule

    const roles = [
        ['button', 'button'],
        ['a, link, area', 'link'],
        ['input', 'textbox'],
        ['select', 'combobox'],
        ['table', 'table, grid'],
        ['ul, ol, dl', 'list'],
    ]
    const attributes = [
        ['hidden', 'aria-hidden'],
        ['title', 'aria-label, aria-labelledby'],
        ['checked', 'aria-checked'],
        ['selected', 'aria-selected'],
        ['disabled', 'aria-disabled'],
        ['indeterminate', 'mixed'],
    ]
    let htmlcount = 0
    let ariacount = 0

    /**
     * Builds a row group from input parameters
     * @param items
     * @param name
     */
    function rowgroup(items, name) {
        return items.map(([htmlterm, ariaterm], i) => {
            htmlcount += htmlterm.split(', ').length
            ariacount += ariaterm.split(', ').length
            return tr([
                !i && th({
                    rowSpan : items.length,
                    children : name,
                }),
                td(htmlterm),
                td(ariaterm)
            ])
        })
    }

    return article([
        h1([
            a({ href : '#', target : '_top', children : 'Index' }),
            ' → Tabular data'
        ]),
        table([
            caption('Related web technology semantics'),
            colgroup(col()),
            colgroup([col(), col()]),
            thead(tr([
                th('Standard'),
                th(abbr('HTML')),
                th(abbr('WAI-ARIA'))
            ])),
            tbody(rowgroup(roles, 'Roles')),
            tbody(rowgroup(attributes, 'Attributes')),
            tfoot(tr([
                th('Total'),
                th(String(htmlcount)),
                th(String(ariacount))
            ]))
        ]),
        link({ rel : 'stylesheet', href : 'docs/data/tabulardata.css' })
    ])
}
