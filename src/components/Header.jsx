import React from 'react';
import './Header.css';
import Icon from './Icon';

//Function for the header page
export default function Header(props){
    //TODO: add props to indicate which page you are on
    //TODO: add hover capabilities
    const icon = props.section
    
    return (
        <div className = "header">
            <Icon isHovered={false} onPage={(icon === 'landing')} page={'Sid Murthy'} />
            <Icon isHovered={false} onPage={(icon === 'contact')} page={'Contact'} />
            <Icon isHovered={false} onPage={(icon === 'about_sid')} page={'About Sid'} />
            <Icon isHovered={false} onPage={(icon === 'experience')} page={'Experience'} />
        </div>
    )
}