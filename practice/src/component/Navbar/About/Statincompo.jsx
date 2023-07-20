import React, { Component } from 'react';

class statincompo extends Component {
    state = {
        name:'rit',
        age:9,
    };
    uname="somthingfrom dm "
    clikHandlecustom=()=>{
        this.setState({name:"testing"})
        console.log("called");
        this.uname='test'
    }
    render() {
        let username ="test"
        return (
            <>
             <h2>state in class compo</h2>   
             <p>state is</p>
                username is {this.uname}
             {this.state.name}
             <button onClick={()=>{username="testing"}}>change variable value</button>
             <button onClick={this.clikHandlecustom}>click</button>
            </>
        );
    }
}

export default statincompo;