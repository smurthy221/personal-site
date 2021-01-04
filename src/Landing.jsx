import React from 'react';
import Header from './components/Header';
import './components/Page.css';
import headshot from './images/headshot-pic.jpg';
import sunset from './images/sunset.jpg';
import {Parallax } from 'react-parallax';
import TypeWriterEffect from 'react-typewriter-effect';

//Function for the home landing page
export default function Landing(){
    //TODO: infinite scroll?
    //sticky header?

    return (
        <div>
            <div>
                <header>
                    <Header page='landing'/>
                </header>
            </div>

            <body className='body'>
                <Parallax bgImage={sunset} strength={500} style={{height:600, width: 'auto'}}>
                    <div className='typewriter-format'>
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'Hind Siliguri',
                                color: '#ffffff',
                                fontWeight: 500,
                                fontSize: '30px',
                            }}
                            startDelay={500}
                            cursorColor="#ffffff"
                            multiText={[
                                'hey there!',
                                'my name is sid',
                                "and i can't wait to meet you!"
                            ]}
                            multiTextDelay={1000}
                            typeSpeed={75}
                        />
                    </div>
                </Parallax>
                
                <img src={headshot} className='headshot' width='200' height='300' alt='headshot'/>

                <div className='landing-section'>
                    <p><b>Sid Murthy</b></p>
                    <p><b>University of Michigan College of Engineering</b></p>
                    <p><b>B.S.E Computer Science, Minor in Mathematics</b></p>
                    <p><b>May 2022 Graduation</b></p>
                </div>

                <div className= 'landing-section2'>
                    Intro section<br/>
                    Stuff about yourself and why you made the site<br/>
                    Idea: use the top heading for your intro and add a bunch of pics where everything was before<br/>
                    Yes i took that header pic
                </div>
            </body>
        </div>
    )
}