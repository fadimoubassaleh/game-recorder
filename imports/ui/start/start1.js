import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Step } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import './css/style.css';
// import './css/runGame.css';

export default (porps) =>
    <div className='container-1'>
        <button className="start-button" onClick={() => porps.nowShowFunction(2)}>
            <span>
                Start game
            </span>
        </button>
        <div className='steps-main' >
            <div className='steps' >
                <Step.Group ordered size='mini'>
                    <Step active>
                        <Step.Content>
                            <Step.Title>Start</Step.Title>
                            <Step.Description></Step.Description>
                        </Step.Content>
                    </Step>

                    <Step active>
                        <Step.Content>
                            <Step.Title>Choose your game</Step.Title>
                            <Step.Description>What kind of cards game ?</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step active>
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
