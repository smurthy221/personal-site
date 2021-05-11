import React, {Fragment, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter, useLocation, BrowserRouter} from 'react-router-dom';
import './index.css';
import Landing from './Landing';
import Experience from './Experience';
import AboutSid from './AboutSid';
import Footer from './components/Footer'
import { render } from '@testing-library/react';
import Header from './components/Header';
//import ScrollNavigation from 'react-single-page-navigation';
//import Header from './components/Header';

/*<ScrollNavigation elements={{ Landing: {}, Experience: {}, AboutSid: {} }}>
    {({ refs, activeElement, goTo }) => (
    <div>
        <div ref={refs.Landing} onClick={() => goTo('Landing')}>
            <Landing/>
        </div>
        <div ref={refs.Experience} onClick={() => goTo('Experience')}>
            <Experience/>
        </div>
        <div ref={refs.AboutSid} onClick={() => goTo('AboutSid')}>
            <AboutSid/>
        </div>
    </div>
    )}
</ScrollNavigation>

<HashRouter>
                <Route exact path = '/' render = {()=><Landing/>} />
                <Route exact path = '/experience' render = {()=><Experience/>} />
                <Route exact path = '/about-sid' render = {()=><AboutSid/>} />
            </HashRouter>*/

function App(){

    const Body = () => {
        return (
            <div>
                <Landing/>
                <Experience/>
                <AboutSid/>
            </div>
        )
    }

    return(
        <div>
            <BrowserRouter>
                <Route exact path = '/experience' render={()=><Experience/>} 
                />
                <Route exact path = '/about-sid' render = {()=><AboutSid/>} 
                />
                <Route exact path = '/' render = {()=><Landing/>} 
                />
            </BrowserRouter>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}


ReactDOM.render( 
    <App/>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();