({ iframe, div, dialog, p, button }) => {
    const onclick = 'event.target.parentElement.close()';
    const srcdom = div([
        'hover me',
        dialog([
            p('Close dialog?'),
            button({
                attrset : { onclick },
                children : 'Ok'
            }),
            ' ',
            button('Cancel')
        ])
    ]);
    const context = iframe({
        width : '100%',
        height : '50%',
        style : { boxSizing : 'border-box' },
        onmouseover : () => {
            context.contentDocument.querySelector('dialog').showModal()
        },
        srcdoc : srcdom.outerHTML
    });
    return context;
},

({ article, h4, img, audio, video }) =>
    article({
        title : 'Media',
        children : [
            h4('Image media'),
            img({
                src : 'http://bit.ly/2e9kIdg',
                alt : 'Crazy PiPi!',
                width: 100
            }),
            h4('Audio media'),
            audio({
                controls : true,
                src : 'http://bit.ly/2e2HCo5'
            }),
            h4('Video media'),
            video({
                controls : true,
                width : '200',
                src : 'http://bit.ly/2ecsnvQ'
            })
        ]
    }),

({ iframe }) => {
    const apiwin = iframe({
        src : 'docs/api/',
        width : '100%',
        height : '100%',
        onload : () => {
            const doc = apiwin.contentDocument;
            const nav = doc.querySelector('nav.navigation');
            const content = doc.querySelector('div.content');
            nav.remove();
            content.style.margin = '50px 0';
        },
        style : { border : 'none' }
    });
    return apiwin;
},