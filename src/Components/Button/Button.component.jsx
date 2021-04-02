import React from 'react';
import './Butoon.style.scss'

const Button = ({children , ...otherprops}) =>{


    return(

        <div>
            <button className={'custom-button'} {...otherprops} > {children}   </button>
        </div>
    )
}
export default Button;


