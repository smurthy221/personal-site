import React, {useEffect} from 'react';
import Header from './components/Header.jsx';
import sb from './images/sb.jpg';
import {Parallax } from 'react-parallax';
import TypeWriterEffect from 'react-typewriter-effect';
//TODO: import css styling down the road

//Function for the home landing page
export default function AboutSid(){
    //TODO: infinite scroll?
    //first find the header height
    function printstuff(){
        let x = '';
        let i = 0;
        for (; i<100; i=i+1){
            x = x+<p>Text to fill</p>;
        }
        return x;
    }

    return (
        <div id='about-sid'>
            <header>
                <Header page="/"/>
            </header>
            <body className='body'>
                <Parallax bgImage={sb} strength={500} style={{height:600, width: 'auto'}} blur = {{max: -1, min: 2}}>
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
                                'a slice of my life',
                                '(outside of just school)'
                            ]}
                            multiTextDelay={1000}
                            typeSpeed={90}
                            loop = {true}
                        />
                    </div>
                </Parallax>
                <div><h1 className='skills-header'>Yes, I have a life outside of school (at least I try to)</h1></div>
                <div className= 'landing-section2'>
                    {printstuff()};
                </div>
            </body>
        </div>
    )
}