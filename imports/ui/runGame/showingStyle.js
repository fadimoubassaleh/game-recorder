
    forms() {
        if (this.state.newId == 1) {
            return (
                < div >
                    < div className="firstDiv" >
                        <h1 className="group group-1">Group 1</h1>
                        <input type="number" className="inputScore inputScore-1" value={this.state.group_1} onChange={this.handleChangeGroup_1} />
                        <h1 className="group group-2">Group 2</h1>
                        <input type="number" className="inputScore inputScore-2" value={this.state.group_2} onChange={this.handleChangeGroup_2} />
                        <div className="score"></div>
                    </div >
                    <div className="secondaryDiv">
                        <div className="chooseTarneb">
                            <img className="tarnib" src="./1.png" onClick={() => this.choiseTarnib(1)} />
                            <img className="tarnib" src="./2.png" onClick={() => this.choiseTarnib(2)} />
                            <img className="tarnib" src="./3.png" onClick={() => this.choiseTarnib(3)} />
                            <img className="tarnib" src="./4.png" onClick={() => this.choiseTarnib(4)} />
                        </div>
                        <button className="button runEnd" onClick={this.startButton}>start</button>
                        <div className="timer"><span>time: 00:00:00</span></div>
                        <div className="menuDiv"><button className="menu button"><span>=</span></button></div>
                    </div>
                </div >
            );
        }
    }



    2


    if (this.state.newId > 1) {
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
                    <div className="score"></div>
                </div >
                <div className="secondaryDiv">
                    <div className="chooseTarneb">
                        <img className="tarnib" src="./1.png" onClick={() => this.choiseTarnib(1)} />
                        <img className="tarnib" src="./2.png" onClick={() => this.choiseTarnib(2)} />
                        <img className="tarnib" src="./3.png" onClick={() => this.choiseTarnib(3)} />
                        <img className="tarnib" src="./4.png" onClick={() => this.choiseTarnib(4)} />
                    </div>
                    <button className="button runEnd" onClick={this.startButton}>start</button>
                    <div className="timer"><span>time: 00:00:00</span></div>
                    <div className="menuDiv"><button className="menu button"><span>=</span></button></div>
                </div>
            </div >
        );
    }