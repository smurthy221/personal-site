import React from 'react';
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
    render() {
        if (this.state.page_title === 'Sid Murthy'){
            return (
                <a className = "header-title" href={`${process.env.PUBLIC_URL}/${this.state.page}`}>
                    {this.state.page_title}
                </a>
            )
        }
        else if (this.state.onPage === true){
            return (
                <a className = "header-element-onpage" href={`${process.env.PUBLIC_URL}/${this.state.page}`}>
                    {this.state.page_title}
                </a>
            )
        }
        else{
            return (
                <a className = "header-element" href={`${process.env.PUBLIC_URL}/${this.state.page}`}>
                    {this.state.page_title}
                </a>
            )
        }
    }
};

export default Icon