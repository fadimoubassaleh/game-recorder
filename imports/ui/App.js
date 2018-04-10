import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Start from './Start.js'
import RunGame from './runGame.js'
import Others from './others.js'
// import 'semantic-ui-css/semantic.min.css';

export default class App extends Component {
  constructor() {
    super()
    this.changeNow = this.changeNow.bind(this);
    this.state = {
      changeNow: this.changeNow,
      winLose: '',
      choiseRecord: [
        { id: 1, group: 1, choise: 8, tarnib: "./1.png" },
      ],
      resultChoise: [
        { id: 1, result: 9, group_1: 15, group_2: 25, winLose: true },
      ],
    }
  }

  changeNow(winLose, choiseRecord, resultChoise) {
    this.setState({
      winLose: winLose,
      choiseRecord: choiseRecord,
      resultChoise: resultChoise
    })
  }

  render() {
    return (
      <Router>
        <div>
          {console.log(this.state.winLose)}
          {console.log(this.state.choiseRecord)}
          {console.log(this.state.resultChoise)}
          <Route exact path="/" component={Start} />
          <Route exact path="/run" render={() => <RunGame changeNow={this.changeNow} />} />
          <Route exact path="/gameID1" render={() => <Others winLose={this.state.winLose} choiseRecord={this.state.choiseRecord} resultChoise={this.state.resultChoise} />} />
        </div>
      </Router>
    )
  }
}