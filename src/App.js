import React from 'react';
import HomePage from "./pages/home-page/homepage.component";
import {BrowserRouter ,Switch,Route} from 'react-router-dom'
import ShopPage from "./pages/shop-page/shop.component";






function App(props) {
    return (
     <div className="App">
         <BrowserRouter>
<Switch>
            <Route exact path={'/'} component={HomePage}/>
            <Route path={'/shop'} component={ShopPage}/>
</Switch>
         </BrowserRouter>
         </div>


    );
}

export default App;
