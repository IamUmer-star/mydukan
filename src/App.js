import React from 'react';
import HomePage from "./pages/home-page/homepage.component";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ShopPage from "./pages/shop-page/shop.component";
import Header from "./Components/header/header.component";
import './App.css';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import SignInUpPage from './pages/SignInAndUpPage/SignInAnUpPage'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()

                        }
                    });
                    console.log(this.state)
                });

            } else {
                this.setState({currentUser: userAuth})
            }

        });

    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    };


    render() {


        return (
            <div className={'App'}>
                <BrowserRouter>
                    <Header currentUser={this.state.currentUser} googlee/>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/shop' component={ShopPage}/>
                        <Route path='/contact' component={ShopPage}/>
                        <Route path='/signin' component={SignInUpPage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
