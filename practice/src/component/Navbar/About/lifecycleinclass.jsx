import React, { Component } from 'react';

class Lifecycleinclass extends Component {
    constructor(props){
        console.log("called");
        super(props);
        this.state={time:new Date()};
    }
   tick=()=>{
    console.log("called ");
    this.setstate={
        time:new Date()
    };
   }
   
    render() {
        return (
            <>
             
             l
             componentWillMount() {
                
             }
                
            </>
        );
    }
}

export default Lifecycleinclass;