import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

//creating a header icon

class Icon extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            onPage : props.onPage,
            page_title : props.page_title,
            page : props.page
        };
    }

    handleChange(items){
        this.setState({
            onPage: true,
            page_title: items.page_title,
            page: items.page
        })
    }

    render() {
        if (this.state.page_title === 'Sid Murthy'){
            return (
                <Link to='/' className = "header-title">
                    {this.state.page_title}
                </Link>
            )
        }
        else if (this.state.onPage === true){
            return (
                <Link className = "header-element-onpage" to={`/${this.state.page}`}>
                    {this.state.page_title}
                </Link>
            )
        }
        else{
            return (
                <Link className = "header-element" to={`/${this.state.page}`}>
                    {this.state.page_title}
                </Link>
            )
        }
    }
};

export default Icon