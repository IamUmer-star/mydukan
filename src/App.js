import React from 'react';
import HomePage from "./pages/homepage.component";
import {BrowserRouter} from 'react-router-dom'





function App(props) {
    return (
     <div className="App">
         <BrowserRouter>

            <HomePage/>
         </BrowserRouter>
         </div>


    );
}

export default App;
