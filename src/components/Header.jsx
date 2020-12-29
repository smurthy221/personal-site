import React from 'react';
import './Header.css';
import Icon from './Icon';

//Function for the header page
class Header extends React.Component{

    render(){
        return (
            <div className = "header">
                <Icon onPage={(this.props.page === 'landing')} page_title={'Sid Murthy'} page='' />
                <Icon onPage={(this.props.page === 'about-sid')} page_title={'About Sid'} page='about-sid'/>
                <Icon onPage={(this.props.page === 'experience')} page_title={'Experience/Skills'} page='experience'/>
            </div>
        )
    }
};

export default Header