import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/logo.svg';

import './header.style.scss';

const Header = ({currentUser, googlee}) => {

    return (

        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>

            </Link>
            <div className='optionn'>
                <Link
                    to='/shop'>
                    MangoShopping
                </Link>
            </div>
            <div className='options'>

                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    Contact
                </Link>
                {

                    currentUser ?
                        <div googlee className={`${googlee ? 'option22' : ''} option`}
                             onClick={() => auth.signOut()}>Signout
                            <div> {currentUser.displayName}</div>

                        </div>
                        :
                        <Link className='option' to='/signin'>
                            Sign In
                        </Link>
                }

            </div>
        </div>
    );
}

export default Header;