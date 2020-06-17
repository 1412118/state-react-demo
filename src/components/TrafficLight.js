import React, { Component } from 'react';
import './TrafficLight.css'
let classNames = require('classnames');

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component{
    constructor(){
        super();
        this.state = {
            currentColor: RED
        };
        setInterval(() => {
            this.setState({
                currentColor: this.getNextColor(this.state.currentColor)
            });
        }, 3000);
        
    }

    getNextColor(color){
        switch(color){
            case RED: 
                return ORANGE;
            case ORANGE: 
                return GREEN;
            default: 
                return RED;
        }
    }

    render(){
        let { currentColor } = this.state;
        return(
            <div className="trafficlight">
                <div className={classNames('light red', 
                {'active': currentColor === RED})}></div>
                <div className={classNames('light orange', 
                {'active': currentColor === ORANGE})}></div>
                <div className={classNames('light green', 
                {'active': currentColor === GREEN})}></div>
            </div>
        );
    }
}

export default TrafficLight;