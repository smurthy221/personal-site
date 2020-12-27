import React from 'react';
import Header from './components/Header.jsx';
import SkillsPic from './images/skills-pic.jpg';
//TODO: import css styling down the road

//Function for the home landing page
export default function Experience(){
    //TODO: infinite scroll?
    return (
        <div>
            <header>
                <Header page='experience' />
            </header>
            <body className='body'>
                <h1 className='experience-header'>A bit more about my skills and experience...</h1>
                <img src={SkillsPic} className='skills-pic' width='400' height='300' />
                <div className='experience-section'>
                    <ul>
                        <li><u>Back-End Skills/Tools:</u> Python, C++, Java</li>
                        <li><u>Front-End Skills/Tools:</u> HTML, CSS, React.js, Flask, AWS, Docker, </li>
                        <li><u>Other Libraries:</u> NumPy, SciPy, Pandas </li>
                    </ul>
                </div>
            </body>
        </div>
    )
}