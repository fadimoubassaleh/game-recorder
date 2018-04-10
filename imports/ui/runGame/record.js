import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Records extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="score">
                {this.props.resultChoise.map((prop) => {
                    let _id
                    if (prop.id == this.props.resultChoise.length) {
                        _id = 0
                        console.log(_id)
                    } else {
                        _id = this.props.resultChoise.length - prop.id
                        console.log(_id)
                    }
                    if (prop.winLose) {
                        if (this.props.choiseRecord[_id].group == 1) {
                            return (
                                <div className="scoreNow" key={_id}>
                                    <input className="round" value={"Round: " + parseInt(prop.id -1) } />
                                    <div className="talab">
                                        <div className="howTalab">
                                            <div className='inputTheTalab'  >                                   {this.props.choiseRecord[_id].choise} </div>
                                            <div className='inputTheTarnib' > <img className='tarnibNow' src={this.props.choiseRecord[_id].tarnib} /> </div>
                                        </div>
                                        <div className='inputTheWin'    > Result:                           {prop.result} </div>
                                        <div className='inputTheScore'  > Score:                            {prop.group_1} </div>
                                    </div>
                                    <div className="talab">
                                        <div className='inputTheTalab'  ></div>
                                        <div className='inputTheTarnib' ><img className='tarnibNow' /> </div>
                                        <div className='inputTheWin'    ></div>
                                        <div className='inputTheScore'  >Score:                            {prop.group_2}</div>
                                    </div>
                                </div>
                            )
                        } else if (this.props.choiseRecord[_id].group == 2) {
                            return (
                                <div className="scoreNow" key={_id}>
                                    <input className="round" value={"Round: " + parseInt(prop.id -1) } />
                                    <div className="talab">
                                        <div className='inputTheTalab'  ></div>
                                        <div className='inputTheTarnib' ><img className='tarnibNow' /> </div>
                                        <div className='inputTheWin'    ></div>
                                        <div className='inputTheScore'  >Score: {prop.group_1} </div>
                                    </div>
                                    <div className="talab">
                                        <div className="howTalab">
                                            <div className='inputTheTalab'  >                                   {this.props.choiseRecord[_id].choise}</div>
                                            <div className='inputTheTarnib' ><img className='tarnibNow' src={this.props.choiseRecord[_id].tarnib} /> </div>
                                        </div>
                                        <div className='inputTheWin'    >Result:                           {prop.result} </div>
                                        <div className='inputTheScore'  >Score:                            {prop.group_2}</div>
                                    </div>
                                </div>
                            )
                        }
                    } else if (!prop.winLose) {
                        if (this.props.choiseRecord[_id].group == 1) {
                            return (
                                <div className="scoreNow" key={_id}>
                                    <input className="round" value={"Round: " + parseInt(prop.id -1) } />
                                    <div className="talab">
                                        <div className="howTalab">
                                            <div className='inputTheTalab'  >                                   {this.props.choiseRecord[_id].choise} </div>
                                            <div className='inputTheTarnib' > <img className='tarnibNow' src={this.props.choiseRecord[_id].tarnib} /> </div>
                                        </div>
                                        <div className='inputTheWin'    >  </div>
                                        <div className='inputTheScore'  > Score:                            {prop.group_1} </div>
                                    </div>
                                    <div className="talab">
                                        <div className='inputTheTalab'  ></div>
                                        <div className='inputTheTarnib' ><img className='tarnibNow' /> </div>
                                        <div className='inputTheWin'    > Result:                           {prop.result}</div>
                                        <div className='inputTheScore'  >Score:                            {prop.group_2}</div>
                                    </div>
                                </div>
                            )
                        } else if (this.props.choiseRecord[_id].group == 2) {
                            return (
                                <div className="scoreNow" key={_id}>
                                    <input className="round" value={"Round: " + parseInt(prop.id -1) } />
                                    <div className="talab">
                                        <div className='inputTheTalab'  ></div>
                                        <div className='inputTheTarnib' ><img className='tarnibNow' /> </div>
                                        <div className='inputTheWin'    > Result:                           {prop.result}</div>
                                        <div className='inputTheScore'  >Score: {prop.group_1} </div>
                                    </div>
                                    <div className="talab">
                                        <div className="howTalab">
                                            <div className='inputTheTalab'  >                                   {this.props.choiseRecord[_id].choise}</div>
                                            <div className='inputTheTarnib' ><img className='tarnibNow' src={this.props.choiseRecord[_id].tarnib} /> </div>
                                        </div>
                                        <div className='inputTheWin'    > </div>
                                        <div className='inputTheScore'  >Score:                            {prop.group_2}</div>
                                    </div>
                                </div>
                            )

                        }


                    }
                })}
            </div>
        )
    }
}