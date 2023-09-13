import React, { Component } from 'react';

class Incrementdecrement extends Component {
    state = { counter: 0 }
    clickhandleincrement = () => {
        let value = this.state.counter + 1;
        this.setState({ counter: value })
    };
    clickhandledecrement = () => {
        let value = this.state.counter - 1;
        this.setState({ counter: value })
    };
        clickhandle=(a)=>{
          let value=a.target.value ? parseInt(a.target.value):0
          this.setState({counter:value})
        }
    
    render() {
        return (
            <div>
                <ul><h1><li>Create Increment decrement state change by button click?</li></h1></ul>
                {/* <p>my name:{this.State.counter}</p> */}
                <button onClick={this.clickhandleincrement}>Increment</button>
                <button onClick={this.clickhandledecrement}>Decrement</button>
                <input type="number" value={this.state.counter} onChange={this.clickhandle} />
            </div>
        );
    }
}

export default Incrementdecrement;