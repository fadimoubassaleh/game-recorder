import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Records from './runGame/record.js'

export default class Others extends Component {
    constructor(props){
        super(props)
        this.showButtonStartNext = this.showButtonStartNext.bind(this);
        this.forms = this.forms.bind(this);
        this.whatHeChoose = this.whatHeChoose.bind(this);
        
        this.state = {
            showButtonStartNext: this.showButtonStartNext,
            forms: this.forms,
            whatHeChoose: this.whatHeChoose
        }
    }

    /**
     * resultChoise
     * buttonStartEnd
     */
    showButtonStartNext() {
        if (this.state.buttonStartEnd == 1) {
            return <button className="button runEnd" onClick={this.startButton}>start</button>
        } else if (this.state.buttonStartEnd == 2) {
            return <button className="button runEnd" onClick={this.nextButton}>next</button>
        }
    }
    forms() {
        if (this.state.resultChoise[0].group_1 > 29 || this.state.resultChoise[0].group_2 > 29) {
            alert('Your game is done Congrats for the winer')
        } else {
            if (this.state.buttonStartEnd == 1) {
                return (
                    < div >
                        < div className="firstDiv" >
                            < div className="firstDiv-1" >
                                <h1 className="group-1">Group 1</h1>
                                <input type="number" className="inputScore inputScore-1" value={this.state.group_1} onChange={this.handleChangeGroup_1} />
                            </div >
                            < div className="firstDiv-2" >
                                <h1 className="group-2">Group 2</h1>
                                <input type="number" className="inputScore inputScore-2" value={this.state.group_2} onChange={this.handleChangeGroup_2} />
                            </div >
                            <Records choiseRecord={this.state.choiseRecord} resultChoise={this.state.resultChoise} winLose={this.state.winLose} />
                        </div >
                        <div className="secondaryDiv">
                            <div className="chooseTarneb">
                                <img className="tarnib" src="./1.png" onClick={() => this.choiseTarnib("./1.png")} />
                                <img className="tarnib" src="./2.png" onClick={() => this.choiseTarnib("./2.png")} />
                                <img className="tarnib" src="./3.png" onClick={() => this.choiseTarnib("./3.png")} />
                                <img className="tarnib" src="./4.png" onClick={() => this.choiseTarnib("./4.png")} />
                            </div>
                            {this.showButtonStartNext()}
                            <div className="timer"><span>time: 00:00:00</span></div>
                            <div className="menuDiv"><button className="menu button"><span>| |</span></button></div>
                        </div>
                    </div >
                );
            } else if (this.state.buttonStartEnd == 2) {
                return (
                    < div >
                        {this.whatHeChoose()}
                        <div className="secondaryDiv">
                            <div className="resultNow">
                                <button className="button" onClick={() => this.runWinLose(true)} >win</button>
                                <button className="button" onClick={() => this.runWinLose(false)} >lose</button>
                                <div className=''>
                                    <h3>score</h3>
                                    <input type='number' value={this.state.scoreNow} onChange={this.handleChangeScoreNow} />
                                </div>
                                {this.showButtonStartNext()}
                            </div>
                            <div className="timer"><span>time: {this.state.timerNow.hours}:{this.state.timerNow.minute}:{this.state.timerNow.second}</span></div>
                            <div className="menuDiv"><button className="menu button"><span>| |</span></button></div>
                        </div>
                    </div >
                );
            }
        }

    }
    whatHeChoose() {
        if (this.state.inTimeChois.group == 1) {
            return (
                < div className="firstDiv" >
                    < div className="firstDiv-1-1" >
                        <h1 className="group-1">Group 1</h1>
                        <div className='firstDiv-1-1'>
                            <input type="text" className="inputScore inputScore-1" value={this.state.inTimeChois.choise} />
                            <img className='tarnibNow' src={this.state.inTimeChois.tarnib} />
                        </div>
                    </div >
                    < div className="firstDiv-2-1" >
                        <h1 className="group-2">Group 2</h1>
                        <input type="text" className="inputRun inputScore-2" />
                    </div >
                    <Records choiseRecord={this.state.choiseRecord} resultChoise={this.state.resultChoise} winLose={this.state.winLose} />
                </div >
            )
        } else if (this.state.inTimeChois.group == 2) {
            return (
                < div className="firstDiv" >
                    < div className="firstDiv-1-1" >
                        <h1 className="group-1">Group 1</h1>
                        <input type="text" className="inputRun inputScore-1" value='' />
                    </div >
                    < div className="firstDiv-2-1" >
                        <h1 className="group-2">Group 2</h1>
                        <div className='firstDiv-1-1'>
                            <input type="text" className="inputRun inputScore-2" value={this.state.inTimeChois.choise} />
                            <img src={this.state.inTimeChois.tarnib} className='tarnibNow' />
                        </div >
                    </div >
                    <Records choiseRecord={this.state.choiseRecord} resultChoise={this.state.resultChoise} winLose={this.state.winLose} />
                </div >
            )
        }
    }
    render() {
        return (

        )
    }
}