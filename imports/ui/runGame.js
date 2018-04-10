import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Records from './runGame/record.js'

export default class Start extends Component {
    constructor(props) {
        super(props)
        this.runWinLose = this.runWinLose.bind(this);
        this.startButton = this.startButton.bind(this);
        this.nextButton = this.nextButton.bind(this);
        this.forms = this.forms.bind(this);
        this.handleChangeGroup_1 = this.handleChangeGroup_1.bind(this);
        this.handleChangeGroup_2 = this.handleChangeGroup_2.bind(this);
        this.handleChangeScoreNow = this.handleChangeScoreNow.bind(this);
        this.choiseTarnib = this.choiseTarnib.bind(this);
        this.whatHeChoose = this.whatHeChoose.bind(this);
        this.showButtonStartNext = this.showButtonStartNext.bind(this);
        this.timer = this.timer.bind(this);
        this.state = {
            inTimeChois: '',
            choiseRecord: [
                { id: 1, group: 1, choise: 0, tarnib: "./1.png" },
            ],
            resultChoise: [
                { id: 1, result: 0, group_1: 0, group_2: 0, winLose: true },
            ],
            timerNow: { second: "00", minute: "00", hours: "00" },
            timer: this.timer,
            startButton: this.startButton,
            nextButton: this.nextButton,
            showButtonStartNext: this.showButtonStartNext,
            whatHeChoose: this.whatHeChoose,
            choiseTarnib: this.choiseTarnib,
            runWinLose: this.runWinLose,
            handleChangeGroup_1: this.handleChangeGroup_1,
            handleChangeGroup_2: this.handleChangeGroup_2,
            handleChangeScoreNow: this.handleChangeScoreNow,
            forms: this.forms,
            group_1: "",
            group_2: "",
            tarnib: "",
            scoreNow: "",
            newId: 2,
            run: false,
            buttonStartEnd: 1,
            intervalId: '',
            winLose: '',
            theEnd: 0
        }
    }
    runWinLose(run) {
        if (run == true) {
            return (
                this.setState({ winLose: true })
            )
        } else if (run == false) {
            return (
                this.setState({ winLose: false })
            )
        }
    }
    timer() {
        console.log("timer")
        this.setState({ timerNow: { second: parseInt(this.state.timerNow.second) + 1, minute: "00", hours: "00" } })
        // if (this.state.timerNow.second < 60) {
        //     const second = parseInt(this.state.timerNow.second) + 1
        //     this.setState({ timerNow: { second: second, minute: this.state.timerNow.minute, hours: this.state.timerNow.hours } })
        // } else if (this.state.timerNow.minute < 60) {
        //     const minute = parseInt(this.state.timerNow.minute) + 1
        //     this.setState({ timerNow: { second: "00", minute: minute, hours: this.state.timerNow.hours } })
        // } else {
        //     const hours = parseInt(this.state.timerNow.hours) + 1
        //     this.setState({ timerNow: { second: "00", minute: "00", hours: hours } })
        // }
    }
    whatHeChoose() {
        if (this.state.inTimeChois.group == 1) {
            return (
                < div className="firstDiv" >
                    < div className="firstDiv-1-1" >
                        <h1 className="group-1">Group 1</h1>
                        <div className='firstDiv-1-1'>
                            <input type="text" className="inputScore inputScore-1" placeholder="your choice" value={this.state.inTimeChois.choise} />
                            <img className='tarnibNow' src={this.state.inTimeChois.tarnib} />
                        </div>
                    </div >
                    < div className="firstDiv-2-1" >
                        <h1 className="group-2">Group 2</h1>
                        <input type="text" className="inputRun inputScore-2" placeholder="your choice" />
                    </div >
                    <Records choiseRecord={this.state.choiseRecord} resultChoise={this.state.resultChoise} winLose={this.state.winLose} />
                </div >
            )
        } else if (this.state.inTimeChois.group == 2) {
            return (
                < div className="firstDiv" >
                    < div className="firstDiv-1-1" >
                        <h1 className="group-1">Group 1</h1>
                        <input type="text" className="inputRun inputScore-1" placeholder="your choice" value='' />
                    </div >
                    < div className="firstDiv-2-1" >
                        <h1 className="group-2">Group 2</h1>
                        <div className='firstDiv-1-1'>
                            <input type="text" className="inputRun inputScore-2" placeholder="your choice" value={this.state.inTimeChois.choise} />
                            <img src={this.state.inTimeChois.tarnib} className='tarnibNow' />
                        </div >
                    </div >
                    <Records choiseRecord={this.state.choiseRecord} resultChoise={this.state.resultChoise} winLose={this.state.winLose} />
                </div >
            )
        }
    }
    forms() {
        if ((this.state.resultChoise[0].group_1 > 29 || this.state.resultChoise[0].group_2 > 29) && this.state.theEnd == 0) {
            alert('Your game is done Congrats for the winer')
            this.setState({
                buttonStartEnd: 3,
                theEnd: 1
            })
        }
            if (this.state.buttonStartEnd == 1) {
                return (
                    < div >
                        < div className="firstDiv" >
                            < div className="firstDiv-1" >
                                <h1 className="group-1">Group 1</h1>
                                <input type="number" className="inputScore inputScore-1" placeholder="your choice" value={this.state.group_1} onChange={this.handleChangeGroup_1} />
                            </div >
                            < div className="firstDiv-2" >
                                <h1 className="group-2">Group 2</h1>
                                <input type="number" className="inputScore inputScore-2" placeholder="your choice" value={this.state.group_2} onChange={this.handleChangeGroup_2} />
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
            }else if (this.state.buttonStartEnd == 3) {
                return (
                    < div >
                        < div className="firstDiv" >
                            < div className="firstDiv-1" >
                                <h1 className="group-1">Group 1</h1>
                                <input type="number" className="inputScore inputScore-1" placeholder="your choice" value="" />
                            </div >
                            < div className="firstDiv-2" >
                                <h1 className="group-2">Group 2</h1>
                                <input type="number" className="inputScore inputScore-2" placeholder="your choice" value="" />
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
                            <div className="timer"><span>time: 00:00:00</span></div>
                            <div className="menuDiv"><button className="menu button"><span>| |</span></button></div>
                        </div>
                    </div >
                );
            }
        

    }
    choiseTarnib(tarnib) {
        this.setState({
            tarnib: tarnib
        })
    }
    handleChangeGroup_1(e) {
        this.setState({ group_1: e.target.value })
    }
    handleChangeGroup_2(e) {
        this.setState({ group_2: e.target.value })
    }
    handleChangeScoreNow(e) {
        this.setState({ scoreNow: e.target.value })
    }
    startButton() {
        let choiseNum = ""
        let group = ""
        if (this.state.group_1 == "" && this.state.group_2 == "") {
            return alert("please your choise")
        } else if (this.state.group_1 == "") {
            if (this.state.group_2 < 7 || this.state.group_2 > 13) {
                return (
                    alert("please choose between 7 and 13 only"),
                    this.setState({ group_2: "" })
                )
            } else {
                choiseNum = parseInt(this.state.group_2, 10)
                group = 2
            }
        } else if (this.state.group_2 == "") {
            if (this.state.group_1 < 7 || this.state.group_1 > 13) {
                return (
                    alert("please choose between 7 and 13 only"),
                    this.setState({ group_1: "" })
                )
            } else {
                choiseNum = parseInt(this.state.group_1, 10)
                group = 1
            }
        }
        if (this.state.tarnib == "") {
            return alert("choose your tarnib")
        }
        const inTimeChois = { id: this.state.newId, group: group, choise: choiseNum, tarnib: this.state.tarnib }
        this.setState({
            inTimeChois: inTimeChois,
            group_1: "",
            group_2: "",
            tarnib: "",
            run: true,
            buttonStartEnd: 2
        })
        // if (this.state.newId == 1) {
        //     let interval = setInterval(this.timer(), 1000)
        //     this.setState({ intervalId: interval })
        // }
    }
    nextButton() {

        if (this.state.winLose === '' || this.state.scoreNow === '' || this.state.scoreNow < 7 || this.state.scoreNow > 13) {
            alert('you miss somthing')
        } else {
            // const inTimeChois = this.state.choiseRecord[this.state.choiseRecord.length - 1]
            if (this.state.winLose) {

                if (this.state.inTimeChois.group == 1) {
                    const score = parseInt(this.state.resultChoise[0].group_1) + parseInt(this.state.scoreNow)
                    const record = {
                        id: this.state.newId,
                        result: this.state.scoreNow,
                        group_1: score,
                        group_2: this.state.resultChoise[0].group_2,
                        winLose: this.state.winLose
                    }
                    const newRound = this.state.inTimeChois
                    var choiseRecord = this.state.choiseRecord.slice()
                    choiseRecord.unshift(newRound)
                    var resultChoise = this.state.resultChoise.slice()
                    resultChoise.unshift(record)
                    this.setState({

                        choiseRecord: choiseRecord,
                        scoreNow: '',
                        resultChoise: resultChoise,
                        newId: this.state.newId + 1,
                        run: false,
                        buttonStartEnd: 1,
                    })
                } else if (this.state.inTimeChois.group == 2) {
                    const score = parseInt(this.state.resultChoise[0].group_2) + parseInt(this.state.scoreNow)
                    const record = {
                        id: this.state.newId,
                        result: this.state.scoreNow,
                        group_2: score,
                        group_1: this.state.resultChoise[0].group_1,
                        winLose: this.state.winLose
                    }
                    const newRound = this.state.inTimeChois
                    var choiseRecord = this.state.choiseRecord.slice()
                    choiseRecord.unshift(newRound)
                    var resultChoise = this.state.resultChoise.slice()
                    resultChoise.unshift(record)
                    this.setState({

                        choiseRecord: choiseRecord,
                        scoreNow: '',
                        resultChoise: resultChoise,
                        newId: this.state.newId + 1,
                        run: false,
                        buttonStartEnd: 1,
                    })

                }
            } else {
                if (this.state.inTimeChois.group == 1) {
                    const score_1 = parseInt(this.state.resultChoise[0].group_1) - parseInt(this.state.choiseRecord[this.state.choiseRecord.length - 1].choise)
                    const score_2 = parseInt(this.state.resultChoise[0].group_2) + parseInt(this.state.scoreNow)
                    const record = {
                        id: this.state.newId,
                        result: this.state.scoreNow,
                        group_1: score_1,
                        group_2: score_2,
                        winLose: this.state.winLose
                    }
                    const newRound = this.state.inTimeChois
                    var choiseRecord = this.state.choiseRecord.slice()
                    choiseRecord.unshift(newRound)
                    var resultChoise = this.state.resultChoise.slice()
                    resultChoise.unshift(record)
                    this.setState({
                        choiseRecord: choiseRecord,
                        scoreNow: '',
                        resultChoise: resultChoise,
                        newId: this.state.newId + 1,
                        run: false,
                        buttonStartEnd: 1
                    })
                } else if (this.state.inTimeChois.group == 2) {
                    const score_1 = parseInt(this.state.resultChoise[0].group_1) + parseInt(this.state.scoreNow)
                    const score_2 = parseInt(this.state.resultChoise[0].group_2) - parseInt(this.state.choiseRecord[this.state.choiseRecord.length - 1].choise)
                    const record = {
                        id: this.state.newId,
                        result: this.state.scoreNow,
                        group_1: score_1,
                        group_2: score_2,
                        winLose: this.state.winLose
                    }
                    const newRound = this.state.inTimeChois
                    var choiseRecord = this.state.choiseRecord.slice()
                    choiseRecord.unshift(newRound)
                    var resultChoise = this.state.resultChoise.slice()
                    resultChoise.unshift(record)
                    this.setState({
                        choiseRecord: choiseRecord,
                        scoreNow: '',
                        resultChoise: resultChoise,
                        newId: this.state.newId + 1,
                        run: false,
                        buttonStartEnd: 1,
                    })
                }
            }
            this.props.changeNow(this.state.winLose, this.state.choiseRecord, this.state.resultChoise)
        }
    }
    showButtonStartNext() {
        if (this.state.buttonStartEnd == 1) {
            return <button className="button runEnd" onClick={this.startButton}>start</button>
        } else if (this.state.buttonStartEnd == 2) {
            return <button className="button runEnd" onClick={this.nextButton}>next</button>
        }
    }
    render() {
        return (
            <div className="container">
                {this.forms()}
            </div>
        )
    }
}
