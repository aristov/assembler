const { a, article, section, h1, button, body,
    label, input, p, variable, code, script } = htmlmodule

// this text is used as initial button text
const textContent = 'Give me a focus, please...'

// create focusbutton, set it's text content and event handlers:
// onfocus - to change the text inside the button
// onblur - to set the inital text back
const focusbutton = button({
    onfocus : ({ target }) => target.textContent = 'Focused!',
    onblur : ({ target }) => target.textContent = textContent,
    textContent
})

// this button shows a system alert window
// onclick hanlder shows an alert with a message
// that contains certain event info
const alertbutton = button({
    onclick : ({
        type,
        target : { tagName },
        constructor : { name }
    }) => {
        alert([tagName, type, name, 'handler!'].join(' '))
    },
    // set button's style and text label
    style : { marginRight : '10px' },
    children : 'Show me an alert, please...'
})

// use this checkbox if you don't like alerts =)
// it sets the onchange event handler to disable the alertbutton
const noalertbox = label([
    input({
        type : 'checkbox',
        onchange : ({ target }) => {
            alertbutton.disabled = target.checked
        },
    }),
    ' no alerts!' // text label for input
])

// this textbox shows char count in secondary readonly box
// it has a placeholder, inline style and oninput event handler
// to count chars, entered to the input
const charcountbox = label([
    input({ // create node
        placeholder : 'Count my chars, please...',
        oninput : ({ target }) => {
            // simply calculate the input value length
            charcountbox.lastChild.value = target.value.length
        },
        style : { width : '200px', marginRight : '10px' }
    }),
    // secondary readonly input to show char count
    // set it's style initial and properties
    input({ // create node
        readOnly : true,
        title : 'Entered char count',
        value : '0',
        tabIndex : -1,
        style : { width : '20px', textAlign : 'center' }
    })
])

// build the article DOM structure
const root = article([
    h1([a({ href : '#', children : 'Index' }), ' → Event handlers']),
    p(['The htmlmodule provides a simple way to attach native ' +
    'event handlers directly during the assembly ' +
    'process of an element.']),
    section([
        h1(['The ', variable('focus'), ' event']),
        p(['The button below has the ', code('onfocus'),
            ' event handler, that replaces the text content' +
            ' of the button and reverts it on button blur.']),
        focusbutton
    ]),
    section([
        h1(['The ', variable('click'),
            ' and the ', variable('change'), ' events']),
        p(['This button has the ', code('onclick'),
            ' event to show an alert window. ',
            'The following check box disables it when ',
            code('onchange'),
            ' event occurs and the control is checked.']),
        alertbutton,
        noalertbox
    ]),
    section([
        h1(['The ', variable('input'), ' event']),
        p(['Here are two text boxes, one of which has the ',
            code('oninput'), ' event handler, ' +
            'which uses the another ' +
            'readonly box to display char count, ' +
            'entered to the first one.'
        ]),
        charcountbox
    ]),
    script({ src : 'data/metadata.js' }),
])

document.body = body(root).node
