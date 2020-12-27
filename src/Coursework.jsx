import React from 'react';
import Header from './components/Header';
import './components/Page.css';
import headshot from './images/headshot-pic.jpg';

//Function for the home landing page
export default function Coursework(){
    //TODO: infinite scroll?
    return (
        <div>
            <header>
                <Header page='coursework' />
            </header>
            <body className='body'> 
                Coursework here
            </body>
        </div>
    )
}