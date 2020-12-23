import React from 'react';
import Header from './components/Header';
import LandingBody from './components/LandingBody';
//TODO: import css styling down the road

//Function for the home landing page
export default function Landing(){
    //TODO: infinite scroll?
    return (
        <div>
            <Header/>
            <LandingBody/>
        </div>
    )
}