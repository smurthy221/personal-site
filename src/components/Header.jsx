import React from 'react';
import './Header.css';

//Function for the header page
export default function Header(){
    //TODO: add underscore to indicate which page you are on
    
    return (
        <div className = "header">
            <a className = "header-title">
                Sid Murthy
            </a>
            <a className = "header-element">
                Contact Me
            </a>
            <a className = "header-element">
                About Me
            </a>
            <a className = "header-element">
                My Experience
            </a>
        </div>
    )
}