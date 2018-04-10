import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Start1 from './start/start1.js';
import Start2 from './start/start2.js';
import Start3 from './start/start3.js';
import Start4 from './start/start4.js';

export default class Start extends Component {
    constructor(props){
        super(props)
        this.nowShowFunction = this.nowShowFunction.bind(this);
        this.state = {
            nowShowFunction: this.nowShowFunction,
            nowShow: 1
        }
    }
    nowShowFunction (showNext){
        this.setState({
            nowShow: showNext
        });
    }
    nowShowViewer(){
        if (this.state.nowShow == 1){
            return(
                <Start1 nowShowFunction={this.state.nowShowFunction}/>
            )
        }else if (this.state.nowShow == 2){
            return(
                <Start2 nowShowFunction={this.state.nowShowFunction}/>
            )
        }else if (this.state.nowShow == 3){
            return(
                <Start3 nowShowFunction={this.state.nowShowFunction}/>
            )
        }else if (this.state.nowShow == 4){
            return(
                <Start4 />
            )
        }
    }
    render() {
        return(
            <div>
                <div className="start-app">
                    {this.nowShowViewer()}
                </div>
            </div>
        )
    }

} 