import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import Landing from './Landing';
import Experience from './Experience';
import AboutSid from './AboutSid';
import Footer from './components/Footer'


ReactDOM.render( 
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path = '/' exact component = {Landing} />
                <Route path = '/experience' exact component = {Experience} />
                <Route path = '/about-sid' exact component = {AboutSid} />
            </Switch>
        </BrowserRouter>
        <Footer />
    </div>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();