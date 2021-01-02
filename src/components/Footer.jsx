import React from 'react';
import './Footer.css';
import Facebook from '../images/fb.png';
import GitHub from '../images/github.png';
import Gmail from '../images/gmail.png';
import LinkedIn from '../images/linkedin.png';

//Function for the header page
class Footer extends React.Component{

    render(){
        return (
            <div className='footer'>
                <div className='center'>
                    <img src={Facebook} className='image' alt='facebook' onClick={()=> window.open('https://www.facebook.com/siddharth.murthy/', "_blank")}/>
                    <img src={GitHub} className='image' alt='github' onClick={()=> window.open('https://github.com/smurthy221', "_blank")}/>
                    <img src={LinkedIn} className='image' alt='linkedin' onClick={()=> window.open('https://www.linkedin.com/in/sid-murthy/', "_blank")}/>
                    <img src={Gmail} className='image' alt='gmail' onClick={()=> window.open("mailto:sjmurthy@umich.edu", "_blank")}/>
                </div>
                <div className='center'>
                    Website created by Sid Murthy with GitHub pages. All rights reserved.
                </div>
            </div>
        )
    }
};

export default Footer