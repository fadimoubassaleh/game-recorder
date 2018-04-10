import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Step } from 'semantic-ui-react';


export default () =>
    <div className="container-4">
        <div className="item4-1">
            <h1 className="item4-1-2">Group 1</h1>
            <li className="item4-1-1">Me</li>
            <li className="item4-1-3">
                <button className="button">Player 3</button>
            </li>
        </div>
        <div className="item4-2">
            <h1>Group 2</h1>
            <li>
                <button className="button">Player 2</button>
            </li>
            <li>
                <button className="button">Player 4</button>
            </li>
        </div>
        <div className="item4-3">
            <button className="button item4-3-1">
                <Link className="button-link" to="/run"></Link>
                Start the game
                </button>
            <div className="item4-3-2">
                <input className='copylink-input' type="text" value="localhost:3000/gameID1" />
                <button class="button copylink-button" >
                    <Link className="button-link" to="/gameID1"></Link>
                    Copy
                </button>
            </div>
        </div>
        <div className='steps-main' >
            <div className='steps steps-4' >
                <Step.Group ordered size='mini'>
                    <Step completed>
                        <Step.Content>
                            <Step.Title>Start</Step.Title>
                            <Step.Description></Step.Description>
                        </Step.Content>
                    </Step>

                    <Step completed>
                        <Step.Content>
                            <Step.Title>Choose your game</Step.Title>
                            <Step.Description>What kind of cards game ?</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step completed>
                        <Step.Content>
                            <Step.Title>How do you play ?</Step.Title>
                            <Step.Description>Single or Group</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step active>
                        <Step.Content>
                            <Step.Title>Confirm your friends</Step.Title>
                        </Step.Content>
                    </Step>
                </Step.Group>
            </div>
        </div>
    </div>

