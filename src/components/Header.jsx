import React from 'react';
import './Header.css';
import Icon from './Icon';

//Function for the header page
class Header extends React.Component{
    //TODO: add hover capabilities

    render(){
        const icon = this.props.page;
        return (
            <div className = "header">
                <Icon onPage={(icon === 'landing')} page_title={'Sid Murthy'} page=''/>
                <Icon onPage={(icon === 'contact')} page_title={'Contact'} page='contact'/>
                <Icon onPage={(icon === 'about-sid')} page_title={'About Sid'} page='about-sid'/>
                <Icon onPage={(icon === 'experience')} page_title={'Experience'} page='experience'/>
            </div>
        )
    }
};

export default Header