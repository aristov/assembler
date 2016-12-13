{
    'use strict'

    const { htmldom, a, abbr, address, area, article, aside, audio, b, base, bdi, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, datalist, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, link, main, map, mark, meta, nav, noscript, object, ol, optgroup, option, p, param, picture, pre, progress, q, rp, rt, ruby, s, samp, script, section, select, small, source, span, strong, style, sub, summary, sup, table, tbody, td, textarea, tfoot, th, thead, title, tr, track, u, ul, variable, video, wbr } = htmlmodule

    const layout = pre()

    fetch('/htmlmodule/docs/data/studio.txt')
        .then(res => res.text())
        .then(res => layout.textContent = res)

    const CURRENT_YEAR = String((new Date).getFullYear())

    const time = init => htmldom('time', init)
    const nbsp = (count = 1) => ' '.repeat(count)
    const hashname = (hash = location.hash) => hash.slice(1)
    const hash = hashname()

    const pathinfo = section({
        className : 'pathinfo',
        draggable : true,
        ondragend : ({ target : { style, clientHeight, clientWidth }, x, y }) => {
            const { innerWidth, innerHeight } = window
            Object.assign(style, {
                margin : '0',
                left : Math.min(Math.max(0, x), innerWidth - clientWidth) + 'px',
                top : Math.min(Math.max(0, y - clientHeight), innerHeight - clientHeight) + 'px'
            })
        },
        children : [
            h2('Как добраться'),
            p('Станция метро «Улица 1905 года», последний вагон из центра, ' +
                'из выхода в подземный переход, перейти перекресток по диагонали и идти вдоль ' +
                'Звенигородского шоссе в сторону области до 2-й Звенигородской улицы, ' +
                'перейти догогу, затем свернуть налево, пройти ~100м, рядом с магазином «Пятерочка»' +
                'металлические ворота со шлагбаумом и калиткой — зайти в нее, ' +
                'обойти 15-е строение слева, и снова в калитку - ' +
                'слева будет вход в кафе с вывеской «PH & B». ' +
                'Студия находится на втором этаже здания в конце коридора.'),
            button({
                className : 'closebutton',
                title : 'Закрыть',
                onclick : ({ target }) => target.parentNode.hidden = true,
                children : '×'
            })
        ]
    })

    const pathmap = article({
        id : 'address',
        hidden : hash !== 'address',
        // hidden : false,
        children : [
            h1('Адрес студии'),
            address(a({
                href : 'https://yandex.ru/maps/-/CZHeYA0i',
                rel : 'external',
                target : 'blank',
                children : 'Москва, улица 2-я Звенигородская, дом 13 строение 17/18А'
            })),
            pathinfo,
            address({
                className : 'pathmap',
                children : [
                    script({
                        type : 'text/javascript',
                        charset : 'utf-8',
                        async : true,
                        src : 'https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=4L2HMAQC2mYDutWIKsc2LAD98hZTzzSe&amp;width=1000&amp;height=720&amp;lang=ru_RU&amp;sourceType=mymaps&amp;scroll=true'
                    })
                ]
            }),
            0 && button({
                className : 'closebutton',
                title : 'Закрыть карту',
                onclick : () => pathmap.hidden = true,
                children : '×'
            })
        ]
    })

    const keys = Object.keys
    const classList = list =>
        keys(list)
            .map(item => list[item]? item : '')
            .filter(item => item)
            .join(' ')

    document.body = body({
        children : [
            div([
                header({
                    className : 'siteheader',
                    children : [
                        h1({
                            title : 'Музыкальная студия',
                            className : 'sitelogo logo2',
                            children : a({
                                // href : 'https://fusion1905.ru',
                                className : 'dim',
                                children : ['Fusion', sub('Studio')]
                            })
                        }),
                        address([
                            a({
                                title : 'Наш адрес',
                                // classList : { 'geo' : true, 'dim' : hash !== 'pathmap' }, // todo
                                className : classList({ 'geo' : true, 'dim' : hash !== 'address' }),
                                onclick : ({ currentTarget }) => {
                                    pathmap.hidden = !pathmap.hidden
                                    pathinfo.hidden = false;
                                    currentTarget.classList.toggle('dim', pathmap.hidden)
                                },
                                children : pre(['2-я Звенигородская', '\n', 'дом 13, стр 17'])
                            }),
                            a({
                                title : 'Контактные телефоны',
                                className : 'tel dim',
                                children : pre(['+7 926 602 25 87', '\n', '+7 916 56 808 56'])
                            })
                        ])
                    ]
                }),
                main({
                    className : 'sitecontent',
                    children : [
                        section({
                            id : 'spacemap',
                            hidden : true,
                            children : [
                                h1({
                                    className : 'dim',
                                    children : 'Студийное пространство'
                                }),
                                div({
                                    className : 'spacemap',
                                    children : figure(layout)
                                }),
                            ]
                        }),
                        pathmap
                    ]
                }),
            ]),
            footer({
                className : 'contentinfo',
                children : [
                    small({
                        title : 'Наша студия работает ежедневно с девяти утра до двенадцати ночи.',
                        className : 'dim',
                        innerHTML : [
                            '&#128197;',
                            nbsp(3),
                            time('7').outerHTML,
                            nbsp(1),
                            span({ className : 'dim', children : '/' }).outerHTML,
                            nbsp(1),
                            time('7').outerHTML,
                            nbsp(6),
                            '&#128344;',
                            nbsp(3),
                            time(b('9')).outerHTML,
                            nbsp(1),
                            span({ className : 'dim', children : '—' }).outerHTML,
                            nbsp(1),
                            time(b('24')).outerHTML,
                            nbsp(1),
                            sup({ className : 'dim', children : '±' }).outerHTML,
                        ].join('')
                    }),
                    address(small(a({
                        href : 'mailto:vv.aristov@gmail.com',
                        rel : 'author',
                        className : 'dim',
                        children : ['© ', time(CURRENT_YEAR), ' студия «Фьюжн»']
                    })))
                ]
            }),
        ]
    })

    document.head.append(script({
        src : '/htmlmodule/docs/data/studio-backphoto.js'
    }))
}
