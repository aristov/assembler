htmlmodule => {
    const {
        a, abbr, base, body, head, header,
        html, h1, h2, li, nav, p, style, ul,
    } = htmlmodule

    return html([
        head([
            base({ target : '_top' })
        ]),
        body([
            header([
                h1('Welcome!'),
                p([
                    'You are inside the ',
                    abbr({
                        title : 'read-eval-print-loop',
                        children : 'REPL'
                    }),
                    '-machine. It was assembled instantly by ',
                    a({
                        href : 'https://npmjs.org/package/htmlmodule',
                        rel : 'external',
                        target : '_blank',
                        title : 'DOM assembler library',
                        children : 'htmlmodule'
                    }),
                    ' on the page load.'
                ]),
            ]),
            nav([
                h2('Examples'),
                p('Elements by category:'),
                ul([
                    li(a({
                        href : '#sections',
                        children : 'Sections'
                    })),
                    li(a({
                        href : '#grouping',
                        children : 'Grouping content'
                    })),
                    li(a({
                        href : '#textlevel',
                        children : 'Text level semantics'
                    })),
                    li(a({
                        href : '#forms',
                        children : 'Forms'
                    })),
                    li(a({
                        href : '#tabulardata',
                        children : 'Tabular data'
                    })),
                    li(a({
                        href : '#embedded',
                        children : 'Embedded content'
                    })),
                ]),
                p('Other examples:'),
                ul([
                    li(a({
                        href : '#apinav',
                        children : 'API index'
                    })),
                    li(a({
                        href : '#eventhandlers',
                        children : 'Event handlers'
                    })),
                ])
            ]),
            nav([
                h1('Documentation'),
                ul([
                    li(a({
                        href : 'dist/api/',
                        target : '_blank',
                        rel : 'help',
                        children : [abbr({
                            title : 'Application programming interface',
                            children : 'API'
                        }), ' documentation']
                    })),
                    li(a({
                        href : 'dist/docs/spec.html',
                        target : '_blank',
                        children : 'Spec suite'
                    })),
                    li(a({
                        href : 'dist/coverage/chrome/lcov-report/',
                        target : '_blank',
                        children : 'Coverage report'
                    })),
                ])
            ]),
            nav([
                h1('Resources'),
                ul([
                    li(a({
                        href : 'https://npmjs.com/package/htmlmodule',
                        target : '_blank',
                        rel : 'external',
                        children : 'NPM module'
                    })),
                    li(a({
                        href : 'https://github.com/aristov/htmlmodule',
                        target : '_blank',
                        rel : 'external',
                        children : 'Github repo'
                    })),
                ])
            ]),
            style([
                'a[href][rel~=external]:not(:active) { color: #050 }',
                'abbr { cursor: help }',
            ])
        ])
    ])
}
