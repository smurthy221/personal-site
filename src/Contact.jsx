import React from 'react';
import Header from './components/Header.jsx';
//TODO: import css styling down the road

//Function for the home landing page
export default function Contact(){
    //TODO: infinite scroll?
    
    return (
        <div>
            <header>
                <Header page='contact' />
            </header>
            <body>
                <div>This is the contact body</div>
            </body>
        </div>
    )
}