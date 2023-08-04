import React, { Component } from 'react';
class controlledcompo extends Component {
    constructor(props){
        super(props);
        this.state={
            name:""
        }
    }
    setInputData=(event)=>{  
        this.setState({name:event.target.value})
    }
    render() {
        return (
            <div>
                <label >my name is</label>&nbsp;
                {/* {JSON.stringify(this.state)} */}
            {this.state.name}&nbsp; <br />
                <input type="text"  onChange={this.setInputData}  id="" /> 
            </div>
        );
    }
}
export default controlledcompo;
