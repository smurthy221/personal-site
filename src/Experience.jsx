import React, {useEffect} from 'react';
import Header from './components/Header.jsx';
import SkillsPic from './images/skills-pic.jpg';
import Amazon from './images/corporate-scum.jpg';
import Novacoast from './images/novacoast.png';
import banff from './images/banff.jpg';
import {Parallax } from 'react-parallax';
import TypeWriterEffect from 'react-typewriter-effect';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Ann from './images/ann-arbor.jpg';
//TODO: import css styling down the road

//Function for the home landing page
export default function Experience(){
    //TODO: infinite scroll?

    return (
        <div id='experience'>
            <header>
                <Header page="/"/>
            </header>
            <body className='body'>
                <Parallax bgImage={Ann} strength={500} style={{height:600, width: 'auto'}} blur = {{max: -1, min: 2}}>
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
                                'some of my past programming experience'
                            ]}
                            multiTextDelay={1000}
                            typeSpeed={90}
                            loop = {true}
                        />
                    </div>
                </Parallax>

                <div id='programming-skills'>
                    <h1 className='skills-header'>A bit more about my programming skills...</h1>
                </div>

                <img src={SkillsPic} className='skills-pic' width='400' height='300' alt='coys'/>

                <div className='skills-section'>
                    <ul>
                        <li><u>Programming Languages:</u> Python, C++, Java</li>
                        <li><u>Front-End Skills/Tools:</u> HTML/CSS, JavaScript (React/Node), Flask, a *touch* of Hadoop</li>
                        <li><u>Other Tools/Libraries:</u> SQL, AWS, Docker, NumPy, SciPy, Pandas (Yes, I love Python)</li>
                        <li><u>Miscellaneous:</u> Microsoft Power BI, MATLAB, Excel</li>
                    </ul>
                </div>

                <div id='past-internships'>
                    <h1 className='experience-header'>My past internships!</h1>
                </div>

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
                            <li>Working on the AWS Platform Team</li>
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
                            <li>My first (real) internship!</li>
                            <li>Streamlined security alarm datasets by writing Python scripts, helping managers highlight analyst performance and identify company alarm patterns.</li>
                            <li>Optimized same security alarm Python scripts by writing data to an external CSV file, shortening program runtime by up to 70%.</li>
                            <li>Created sales dashboards using Microsoft Power BI for project managers, verified dashboard data by writing MySQL queries and trained employees in dashboard analysis.</li>
                            <li>Got to visit the office in Santa Barbara, it was pretty sweet.</li>
                        </ul>
                    </div>
                </div>
            
                <div id='projects'>
                    <h1 className='experience-header'>Some projects I've done...</h1>
                </div>

                <div className='internship-section'>
                    <div className='internship-text-header' onClick={()=> window.open("https://github.com/jcasero2/spotify-suggestion", "_blank")}>
                        <b>Spotify Song Suggestion Model</b>
                    </div>
                    <div className='internship-text-body'>
                        <ul>
                            <li>It was kinda lit</li>
                        </ul>
                    </div>
                </div>
            
                <div id='coursework'>
                    <h1 className='experience-header'>Some of my coursework from my time at the University of Michigan!</h1>
                </div>
        
                <div className='internship-section'>

                    <div className='internship-text-header'>
                        <b>Computer Science Courses</b>
                    </div>
                    <br/>
                    <div className='internship-text-body'>
                        
                        <b>ENGR 101</b> - Introductory Computer Programming
                        <ul>
                            <li>Class was light</li>
                        </ul>
                        <b>EECS 203</b> - Discrete Mathematics
                        <ul>
                            <li>Difficult class to grasp, a lot of the concepts were all over the place but I ended up seeing many of them in other places.</li>
                            <li><u>One cool thing I learned</u>- The set of all irrational numbers is uncountable.</li>
                        </ul>
                        <b>EECS 280</b> - Programming and Introductory Data Structures
                        <ul>
                            <li>Cool class, projects were a bit tedious.</li>
                            <li><u>One cool thing I learned</u>- Maps and Euchre.</li>
                        </ul>
                        <b>EECS 281</b> - Data Structures and Algorithms
                        <ul>
                            <li>Fantastic course.</li>
                            <li>This was the course that made me know CS was the right major for me, all of the projects were so engaging and I grew so much as a programmer.</li>
                            <li><u>One cool thing I learned</u>- The Traveling Salesperson Problem and how to actually write a program from scratch!</li>
                        </ul>
                        <b>EECS 370</b> - Introduction to Computer Organization
                        <ul>
                            <li>This class was a bit of a drag to begin the semester, there was a lot of stuff that wasn't explained as in depth as I thought necessary but I found the content towards the end more interesting.</li>
                            <li><u>One cool thing I learned</u>- Page tables and caching.</li>
                        </ul>
                        <b>EECS 376</b> - Foundations of Computer Science
                        <ul>
                            <li>Unpopular opinon but I honestly liked the class, just got a bit tedious sometimes with tough weekly homeworks.</li>
                            <li>I liked learning about some of the theory behind randomness and complexity.</li>
                            <li><u>One cool thing I learned</u>- The Travelling Salesperson Problem is NP-Complete.</li>
                        </ul>
                        <b>EECS 445</b> - Introduction to Machine Learning
                        <ul>
                            <li>Interesting class, but I wish there were more office hours and group discussion.</li>
                            <li>A lot of the concepts we learned about were cool and it was nice to see how you can make ML models on your own with some of the libraries we used.</li>
                            <li><u>One cool thing I learned</u>- Neural Networks and how you can use them to classify immages.</li>
                        </ul>
                        <b>EECS 485</b> - Web Systems
                        <ul>
                            <li>Another fanastic course.</li>
                            <li>While they did teach you different full-stack tools and very interesting web concepts, the real value of the class was learning how to read online documentation and using that in your own programs.</li>
                            <li>Googling is important in development, you had to become good at it to do well in the class.</li>
                            <li><u>One cool thing I learned</u>- Hadoop!</li>
                        </ul>
                    </div>
                </div>
                
                <div className='internship-section'>
                    <div className='internship-text-header'>
                        <b>Math Courses</b>
                    </div>
                    <br/>
                    <div className='internship-text-body'>
                        <b>Math 116</b> - Calculus II
                        <ul>
                            <li>A pre-req for Engineering, had taken the course in high school.</li>
                            <li>Understandable why a lot of kids fail the course, especially with first years.</li>
                            <li><u>One cool thing I learned</u>- Infinite series and sequences are gross.</li>
                        </ul>
                        <b>Math 214</b> - Applied Linear Algebra
                        <ul>
                            <li>An interesting class that was really helpful in classes like Machine Learning.</li>
                            <li>Got to create a cool final project that generated Spotify suggestions with Linear Algebra concepts.</li>
                            <li><u>One cool thing I learned</u>- Linear Transformations</li>
                        </ul>
                        <b>Math 215</b> - Calculus III
                        <ul>
                            <li>This class was another pre-req for Engineering, not a ton of concepts have really come up outside of other math courses.</li>
                            <li><u>One cool thing I learned</u>- Triple integrals (they aren't as scary as they sound)</li>
                        </ul>
                        <b>Math 425</b> - Probability and Statistics
                        <ul>
                            <li>A pre-req for a lot of the math classes I wanted to take, many concepts overlapped with previous coursework.</li>
                            <li>Went more in depth on multi-variable probability though.</li>
                            <li><u>One cool thing I learned</u>- Normal mutlivariate distributions.</li>
                        </ul>
                    </div>
                </div>

                <div className='internship-section'>
                    <div className='internship-text-header'>
                        <b>Other Cool Courses</b>
                    </div>
                    <br/>
                    <div className='internship-text-body'>
                        <b>IOE 202</b> - Operations Modeling
                        <ul>
                            <li>Class was about stuff like queueing theory and a bunch of IOE stuff.</li>
                        </ul>
                        <b>Phil 355</b> - Contemporary Moral Problems
                        <ul>
                            <li>Class was about arguing different political and social issues through the lens of different authors.</li>
                            <li>We used reconstructions to look at each of their arguments.</li>
                        </ul>
                    </div>
                </div>
            </body>
        </div>
    )
}