import React from 'react';
import './Header.css';

//creating a header icon

class Icon extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isHovered : props.isHovered,
            onPage : props.onPage,
            page : props.page
        };
    }
    render() {

        if (this.state.page === 'Sid Murthy'){
            return (
                <a className = "header-title">
                    {this.state.page}
                </a>
            )
        }
        return (
            <a className = "header-element">
                {this.state.page}
            </a>
        )
    }
};

export default Icon