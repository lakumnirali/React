import React, { Component } from 'react';

class Childcompo extends Component {
    constructor(props){
      super(props);
      this.State={
        customdata:"mydata"
     }
     this.props.parentMethodAsProps(this.state.customdata)  
    }
    render() {
        return (
            <div>
              
                 <h2>Child Component</h2>
                 <p>state data in child:{this.state.customdata}</p>
                 <p>Pros Data in Child from Parent : {this.props.parentData}</p>
            </div>
        );
    }
}

export default Childcompo;