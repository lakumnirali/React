import React, { Component } from 'react';

class statincompo extends Component {
    state = {
        name: 'nirali',
    };
    funarro = () => {
        this.setState({ name: "raxit" })
    }
    render() {
        // let username = "rit"
        return (
            <>
                my name is {this.state.name}
                {/* <button onClick={() =>  this.name}>change name</button> */}
                <button onClick={this.funarro}>click</button>
            </>
        );
    }
}

export default statincompo;