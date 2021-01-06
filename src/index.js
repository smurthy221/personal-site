import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, useLocation} from 'react-router-dom';
import './index.css';
import Landing from './Landing';
import Experience from './Experience';
import AboutSid from './AboutSid';
import Footer from './components/Footer'

/*function usePageViews() {
    let {location} = useLocation();
    React.useEffect(() => {
      console.log(location);
    }, [location]);
}*/

function App(){

    //usePageViews();

    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path = '/' render = {()=><Landing/>} />
                    <Route path = '/experience' render = {()=><Experience/>} />
                    <Route path = '/about-sid' render = {()=><AboutSid/>} />
                </Switch>
            </BrowserRouter>
            <Footer />
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