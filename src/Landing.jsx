import React, {useEffect} from 'react';
import Header from './components/Header';
import './components/Page.css';
import headshot from './images/headshot-pic.jpg';
import paris from './images/paris.jpg';
import {Parallax } from 'react-parallax';
import TypeWriterEffect from 'react-typewriter-effect';

//Function for the home landing page
export default function Landing(){
    //TODO: infinite scroll?
    return (
        <div id='landing'>
            <header>
                <Header page="/"/>
            </header>
            <body className='body'>
                <Parallax bgImage={paris} strength={500} style={{height:600, width: 'auto'}} blur = {{max: -1, min: 2}}>
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
                            typeSpeed={90}
                            loop = {true}
                        />
                    </div>
                </Parallax>
                
                <img src={headshot} className='headshot' width='200' height='300' alt='headshot'/>

                <div className='landing-section'>
                    <h4>
                        <p>Sid Murthy</p>
                        <p>University of Michigan College of Engineering</p>
                        <p>B.S.E Computer Science, Minor in Mathematics</p>
                        <p>May 2022 Graduation</p>           
                    </h4>
                </div>

                <div className= 'landing-section2'>
                    <h4>Hey There!</h4>
                    <p>My name is Sid and welcome to my page!</p>
                    <p>This site is meant to compile my school, career and life highlights all into one page and I plan to continue updating and adding new features over time.</p>
                    <p>(And yes I took all of the header pics)</p>
                    <p><b>Looking forward to meeting you all!</b></p>
                </div>
            </body>
        </div>
    )
}