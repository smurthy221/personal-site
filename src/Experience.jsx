import React from 'react';
import Header from './components/Header.jsx';
import SkillsPic from './images/skills-pic.jpg';
import Amazon from './images/corporate-scum.jpg';
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
                <h1 className='skills-header'>A bit more about my programming skills...</h1>
                <img src={SkillsPic} className='skills-pic' width='400' height='300' />
                <div className='skills-section'>
                    <ul>
                        <li><u>Programming Languages:</u> Python, C++, Java</li>
                        <li><u>Front-End Skills/Tools:</u> HTML/CSS, JavaScript (React/Node), Flask, a *touch* of Hadoop</li>
                        <li><u>Other Tools/Libraries:</u> SQL, AWS, Docker, NumPy, SciPy, Pandas (Yes, I love Python)</li>
                        <li><u>Miscellaneous:</u> Microsoft Power BI, MATLAB, Excel</li>
                    </ul>
                </div>
                <h1 className='experience-header'>My past projects & internships!</h1>
                <div className='internship-section'>
                    <img src={Amazon} className='internship-pic' height='150' width='200'/>
                    <div>
                        <div className='internship-text-header'>
                            <b>Amazon</b> - Incoming Software Engineering Intern
                            <div className='internship-text-loc'>Seattle, WA</div>
                        </div>
                    </div>
                    <br/>
                    <div className='internship-text-body'>
                        <ul>
                            <li>Interning here next summer!</li>
                        </ul>
                    </div>
                </div>
            </body>
        </div>
    )
}