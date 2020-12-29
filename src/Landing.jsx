import React from 'react';
import Header from './components/Header';
import './components/Page.css';
import headshot from './images/headshot-pic.jpg';

//Function for the home landing page
export default function Landing(){
    //TODO: infinite scroll?
    return (
        <div>
            <header>
                <Header page='landing' />
            </header>
            <body className='body'> 
                <img src={headshot} className='headshot' width='200' height='300' />
                <div className='landing-section'>
                    <p><b>Sid Murthy</b></p>
                    <p><b>University of Michigan College of Engineering</b></p>
                    <p><b>B.S.E Computer Science, Minor in Mathematics</b></p>
                    <p><b>May 2022 Graduation</b></p>
                </div>
                <div className= 'landing-section2'>
                    Intro section<br/>
                    Stuff about yourself and why you made the site<br/>
                    Idea: use the top heading for your intro and add a bunch of pics where everything was before
                </div>
            </body>
        </div>
    )
}