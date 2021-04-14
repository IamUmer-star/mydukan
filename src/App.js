import React from 'react';
import {connect} from "react-redux";
import { Switch, Route,Redirect} from 'react-router-dom'


import './App.css';



import { setCurrentUser} from "./redux/user/user.action";
import HomePage from "./pages/home-page/homepage.component";
import ShopPage from "./pages/shop-page/shop.component";
import Header from "./Components/header/header.component";
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import Contact from '../src/pages/contact/contac'

import SignInUpPage from './pages/SignInAndUpPage/SignInAnUpPage'

class App extends React.Component {

    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser }= this.props
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                     setCurrentUser({
                            id: snapShot.id,
                            ...snapShot.data()

                        })
                    });


            }
                setCurrentUser( userAuth)


        });

    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    };


    render() {


        return (
            <div className={'App'}>
                <Header />

                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/shop' component={ShopPage}/>
                        <Route path='/contact' component={Contact}/>
                        <Route
                            exact
                            path='/signin'
                            render={() =>
                                this.props.currentUser ? (
                                    <Redirect to='/' />
                                ) : (
                                    <SignInUpPage />
                                )
                            }
                        />

                    </Switch>

            </div>
        );
    }
}
const mapStateToProps =({user}) =>({
    currentUser:user.currentUser


})
const mapDispatchToProps = dispatch =>({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps,mapDispatchToProps)(App);
