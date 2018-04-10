import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Step } from 'semantic-ui-react';

export default (porps) =>
    <div className="container-2">
        <div className="item2">
            <h1>Choose your game</h1>
            <button className="button button-2-1" onClick={() => porps.nowShowFunction(3)}>Tarnib 41</button>
            <button className="button button-2-2" onClick={() => porps.nowShowFunction(3)}>Tarnib 61</button>
        </div>
        <div className='steps-main' >
            <div className='steps' >
                <Step.Group ordered size='mini'>
                    <Step completed>
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
