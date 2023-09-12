import React, { Component } from 'react';
import childcompo from './childcompo.jsx'
class StateLiftingInClassCompo extends Component {
    state={
        ParentCompoData:"Data From The Parent Compo",
        ChildCompoData:null,

    }
    parentMethod=(data)=>{
        console.log("Called",data);
        this.setState({ChildCompoData:data})
    }
    render() {
        return (
            <div>
                   <h2>Parent Compo</h2>
                   <p>State Data in Parent : {this.state.ParentCompoData}</p>
            <p>Child State Data in Parent : {this.state.ChildCompoData}</p>
                <div className="child">
                    <childcompo parentMethodAsProps={this.parentMethod} parentData = {this.state.ParentCompoData} />
                </div>
            </div>
        );
    }
}

export default StateLiftingInClassCompo;