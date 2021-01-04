import React, {useState} from 'react';
import './Header.css';
import Icon from './Icon';
import Facebook from '../images/fb-alt.png';
import GitHub from '../images/github-alt.png';
import Gmail from '../images/gmail-alt.png';
import LinkedIn from '../images/linkedin-alt.png';

//Function for the header page
function Header(page){
    const [header, showHeader] = useState(page.page !== 'landing');
    
    const changeHeader = () => {
        if (page.page === 'landing'){
            if (window.scrollY < 400){
                showHeader(false);
            }
            else{
                showHeader(true);
            }
        }
    }
    
    window.addEventListener('scroll',changeHeader);

    return(
        <div className = {header ? 'header' : 'header-transparent'}>
            <Icon onPage={(page.page === 'landing')} page_title={'Sid Murthy'} page='' show={header ? 'header-title' : 'header-title-transparent'}/>
            <img src={Gmail} className='image' alt='gmail' onClick={()=> window.open("mailto:sjmurthy@umich.edu", "_blank")}/>
            <img src={Facebook} className='image' alt='facebook' onClick={()=> window.open('https://www.facebook.com/siddharth.murthy/', "_blank")}/>
            <img src={GitHub} className='image' alt='github' onClick={()=> window.open('https://github.com/smurthy221', "_blank")}/>
            <img src={LinkedIn} className='image' alt='linkedin' onClick={()=> window.open('https://www.linkedin.com/in/sid-murthy/', "_blank")}/>
            <Icon onPage={(page.page === 'about-sid')} page_title={'About Sid'} page='about-sid'/>
            <Icon onPage={(page.page === 'experience')} page_title={'Experience/Skills'} page='experience'/>
        </div>
    )
};

export default Header