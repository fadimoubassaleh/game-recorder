import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Records from './runGame/record.js'

export default class Others extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="container">
                < div className="firstDiv" >
                    < div className="firstDiv-1-1" >
                        <h1 className="group-1">Group 1</h1>
                        <div className='firstDiv-1-1'>
                        </div>
                    </div >
                    < div className="firstDiv-2-1" >
                        <h1 className="group-2">Group 2</h1>
                    </div >
                    <Records choiseRecord={this.props.choiseRecord} resultChoise={this.props.resultChoise} winLose={this.props.winLose} />
                </div >
            </div>
        )
    }
}