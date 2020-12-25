import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './temp/index.css';
import Landing from './Landing';
import Experience from './Experience';
import AboutSid from './AboutSid';
import Contact from './Contact';
import Header from './components/Header.jsx';

ReactDOM.render( 
    //TODO: also get paths for my experience n shit
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path = '/' component = {Landing} />
                <Route path = '/experience' component = {Experience} />
                <Route path = '/about-sid' component = {AboutSid} />
                <Route path = '/contact' component = {Contact} />
            </Switch>
        </BrowserRouter>
    </div>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();