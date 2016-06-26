import { mix } from '../tools/utils';

export default domTransform => {
    domTransform.element('radiogroup', function({ attributes : a, content }) {
        let params = {
            disabled : a.disabled === 'true',
            first : null,
            checked : null,
            value : undefined
        };
        content = this.apply(content, params);

        let checked = params.checked;
        if(!params.disabled) (checked || params.first).attributes.tabindex = '0';

        return {
            element : 'span',
            attributes : {
                'data-instance' : 'RadioGroup',
                role : 'radiogroup',
                'aria-label' : a.label,
                'aria-disabled' : a.disabled,
                'class' : mix(a.view || 'radiogroup', a.mix)
            },
            content : [
                {
                    element : 'input',
                    attributes : {
                        type : 'hidden',
                        autocomplete : 'off',
                        disabled : a.disabled === 'true' ? '' : undefined,
                        name : a.name,
                        value : params.value
                    }
                },
                content
            ]
        };
    });
    domTransform.element('radio', function({ attributes, content }, params) {
        let view = attributes.view || 'radio',
            disabled = params.disabled || attributes.disabled === 'true',
            result = {
                element : 'span',
                attributes : {
                    'data-instance' : 'Radio',
                    role : 'radio',
                    tabindex : disabled? undefined : attributes.tabindex || '-1',
                    'data-value' : attributes.value,
                    'aria-checked' : attributes.checked,
                    'aria-disabled' : attributes.disabled,
                    'class' : view
                },
                content : this.apply(view === 'radio'? [{
                        element : 'span',
                        attributes : { 'class' : 'box' }
                    }, content] :
                    content)
            };
        if(!params.first) params.first = result;
        if(attributes.checked === 'true') {
            params.checked = result;
            params.value = attributes.value;
        }
        return result;
    });
}
