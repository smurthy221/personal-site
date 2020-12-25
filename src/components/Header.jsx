import React from 'react';
import './Header.css';
import Icon from './Icon';

//Function for the header page
class Header extends React.Component{
    //TODO: add client side capabilities

    constructor(props){
        super(props)
        this.state = {
            icon : this.props.page
        }
    }

    render(){
        return (
            <div className = "header">
                <Icon onPage={(this.state.icon === 'landing')} page_title={'Sid Murthy'} page='' />
                <Icon onPage={(this.state.icon === 'contact')} page_title={'Contact'} page='contact'/>
                <Icon onPage={(this.state.icon === 'about-sid')} page_title={'About Sid'} page='about-sid'/>
                <Icon onPage={(this.state.icon === 'experience')} page_title={'Experience'} page='experience'/>
            </div>
        )
    }
};

export default Header