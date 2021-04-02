import React from 'react';

import './Form..npustyle.scss'

const FormInput = ({handelCHange, label, ...otherprops}) => {


    return (
        <div className={'group'}>
            <input className={'form-input'} onChange={handelCHange} {...otherprops} />
            {
                label ?
                    (<label className={`${otherprops.value.length ? 'shrink' : ''} form-input-label`}>
                        {label}
                    </label>)
                    : null
            }

        </div>
    )
}
export default FormInput