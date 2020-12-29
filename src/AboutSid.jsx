import React from 'react';
import Header from './components/Header.jsx';
//TODO: import css styling down the road

//Function for the home landing page
export default function AboutSid(){
    //TODO: infinite scroll?
    return (
        <div>
            <header>
                <Header page='about-sid' />
            </header>
            <body className='body'>
                <h1 className='skills-header'>A bit more about me...</h1>
                <div>
                    
                </div>


            </body>
        </div>
    )
}