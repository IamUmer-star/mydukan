import React from 'react';
import HomePage from "./pages/home-page/homepage.component";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ShopPage from "./pages/shop-page/shop.component";
import Header from "./Components/header/header.component";
import './App.css';

function App() {
    return (
        <div className={'App'}>
            <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/contact' component={ShopPage} />
            </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
