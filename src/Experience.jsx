import React from 'react';
import Header from './components/Header.jsx';
import SkillsPic from './images/skills-pic.jpg';
import Amazon from './images/corporate-scum.jpg';
import Novacoast from './images/novacoast.png';
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

                <h1 className='experience-header'>My past internships!</h1>

                <div className='internship-section'>
                    <img src={Amazon} className='internship-pic' height='150' width='200'/>
                    <div>
                        <div className='internship-text-header'>
                            <b>Amazon</b> - Software Development Engineering Intern
                            <div className='internship-text-loc'>Seattle, WA</div>
                        </div>
                    </div>
                    <div className='internship-text-body'>
                        <ul>
                            <li>Interning here next summer!</li>
                        </ul>
                    </div>
                </div>
                <div className='internship-section'>
                    <img src={Novacoast} className='internship-pic' height='150' width='200'/>
                    <div className='internship-text-header'>
                        <b>Novacoast</b> - Development Intern (Data Analytics)
                        <div className='internship-text-loc'>Santa Barbara, CA</div>
                    </div>
                    <div className='internship-text-body'>
                        <ul>
                            <li>My first internship</li>
                        </ul>
                    </div>
                </div>
            
                <h1 className='experience-header'>Some projects I've done...</h1>

                <div className='internship-section'>
                    <div className='internship-text-header'>
                        <b>Spotify Song Suggestion Model</b> - <a href='https://github.com/jcasero2/spotify-suggestion' target="_blank">GitHub Link</a>
                    </div>
                    <div className='internship-text-body'>
                        <ul>
                            <li>It was kinda lit</li>
                        </ul>
                    </div>
                </div>
            
                <h1 className='experience-header'>Some of my coursework from my time at the University of Michigan!</h1>
        
                <div className='internship-section'>
                    <div className='internship-text-header'>
                        <b>Computer Science Courses</b>
                    </div>
                    <div className='internship-text-body'>
                        <b>ENGR 101</b> - Introductory Computer Programming
                        <ul>
                            <li>Class was light</li>
                        </ul>
                        <b>EECS 203</b> - Discrete Mathematics
                        <ul>
                            <li>oh god.</li>
                            <li><u>One cool thing I learned</u>- The set of all irrational numbers is uncountable.</li>
                        </ul>
                    </div>
                    
                </div>

            </body>
        </div>
    )
}