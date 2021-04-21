import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from "react-redux";

import {ReactComponent as Logo} from '../../assets/logo.svg';

import './header.style.scss';

const Header = ({currentUser}) => {

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
                    Shop
                </Link>
                <Link className='option' to='/contact'>
                    Contact
                </Link>
                {

                    currentUser ?
                        <div className={`option`}
                             onClick={() => auth.signOut()}>Sign Out
                            <div>{currentUser.displayName ? currentUser.displayName : 'loading'}</div>

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
const mapStateToProps = ({user} )=>({
    currentUser:user.currentUser,
})


export default connect(mapStateToProps)(Header);