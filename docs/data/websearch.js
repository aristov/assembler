(({ form, label, img, br, input, button }) =>
    form({
        action : 'https://www.google.ru/search',
        target : '_blank',
        children : [
            label([
                img({
                    src : 'https://www.google.ru/images/logo.png',
                    alt : 'Google',
                    width : 60
                }),
                br(),
                input({
                    type : 'search',
                    name : 'q'
                }),
                ' '
            ]),
            button('Go!')
        ]
    }))(htmlmodule)
