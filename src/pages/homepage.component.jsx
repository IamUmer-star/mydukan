import React from 'react';
import './homepage.scss';
import Directory from "../Components/directory/directory.component";


const HomePage = (props) =>
    (
        <div className={'homepage'}>

            <Directory/>
        </div>
    );


export default HomePage;