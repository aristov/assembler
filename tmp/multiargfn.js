import { main, section, iframe, button, details, summary } from '../lib';

main({
    className : 'repl',
    children : [
        section([
            codebox({
                className : 'inputcode',
                value : testcase[this.index].src
            },
            node => this.inputcode = node),
            button({
                id : 'replbuttonprev',
                className : 'prevbutton',
                onclick : () => this.prev(),
                children : 'prev'
            },
            node => this.prevbutton = node),
            button({
                id : 'replbuttonnext',
                className : 'nextbutton',
                onclick : () => this.next(),
                children : 'next'
            },
            node => this.nextbutton = node)
        ]),
        section([
            iframe({
                className : 'outputwin'
            },
            node => this.outputwin = node),
            details({
                className : 'markupview',
                ontoggle : () => this.refresh(),
                children : [
                    summary({
                        id : 'markuptoggle',
                        className : 'markuptoggle',
                        children : 'markup'
                    }),
                    markupbox({
                        className : 'outputcode'
                    },
                    node => this.outputcode = node)
                ]
            })
        ])
    ]
});