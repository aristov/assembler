export default domTransform => {
    domTransform.element('textbox', function({ attributes }) {
        let content = [{
            element : 'input',
            attributes : {
                autocomplete : 'off',
                disabled : attributes.disabled === 'true'? '' : undefined,
                placeholder : attributes.placeholder,
                value : attributes.value,
                //...attributes,
                'class' : 'box'
            }
        }];
        if(attributes.hasclear === 'true') {
            content.push({
                element : 'span',
                attributes : {
                    role : 'button',
                    tabindex : attributes.disabled === 'true'? undefined : '-1',
                    'aria-disabled' : String(attributes.disabled === 'true'),
                    'class' : 'clear',
                    hidden : attributes.value? undefined : ''
                }
            });
        }
        return {
            element : 'label',
            attributes : {
                'data-instance' : attributes.instance,
                'aria-label' : attributes.label,
                'class' : [
                    attributes.view || 'textbox',
                    attributes.hasclear === 'true'? 'hasclear' : undefined,
                    attributes.disabled === 'true'? 'disabled' : undefined,
                    attributes.mix
                ].join(' ').trim()
            },
            content
        };
    });
    domTransform.element('textarea', function({ attributes }) {
        return {
            element : 'label',
            attributes : {
                'data-instance' : 'TextBox',
                'aria-label' : attributes.label,
                'class' : [
                    attributes.view || 'textbox',
                    attributes.disabled === 'true'? 'disabled' : '',
                    attributes.mix
                ].join(' ').trim()
            },
            content : {
                element : 'textarea',
                attributes : {
                    autocomplete : 'off',
                    disabled : attributes.disabled === 'true'? '' : undefined,
                    placeholder : attributes.placeholder,
                    'class' : 'box'
                },
                content : attributes.value
            }
        };
    });
}
