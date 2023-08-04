import React, { Component } from 'react';
class controlledcompo extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            password:""
        }
    }
    setInputData=(event)=>{  
        this.setState({name:event.target.value})
        // this.setState({password:event.target.value})
    }
    render() {
        return (
            <div>
                <label >my name is</label>&nbsp;
            {this.state.name}&nbsp; <br />
                <input type="text"  onChange={this.setInputData}  id="" /> 
                <input type="text"  onChange={(e)=>{ this.setState({password:e.target.value}) }} id="" />
                {JSON.stringify(this.state.password)}
            </div>
        );
    }
}
export default controlledcompo;



