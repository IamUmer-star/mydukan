import React from 'react';
import './Butoon.style.scss'

const Button = ({children, isGoogleSignin, ...otherprops}) => {


    return (

        <div>
            <button
                className={`${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} {...otherprops} > {children}   </button>
        </div>
    )
}

export default Button;


