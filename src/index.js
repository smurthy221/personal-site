import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './temp/index.css';
import Landing from './Landing';
import Experience from './Experience';
import AboutSid from './AboutSid';
import Contact from './Contact';

ReactDOM.render( 
    //TODO: also get paths for my experience n shit
    <div>
        <BrowserRouter>
            <Route path = '/' exact component = {Landing} />
            <Route path = '/experience' exact component = {Experience} />
            <Route path = '/about-sid' exact component = {AboutSid} />
            <Route path = '/contact' exact component = {Contact} />
        </BrowserRouter>
    </div>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();