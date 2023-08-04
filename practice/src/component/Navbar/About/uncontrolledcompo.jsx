import React, { Component } from 'react';
class Uncontrolledcompo extends Component {
    constructor(props){
        super(props);
        this.input=React.createRef();
    }
    clickHandle= ()=>{
        console.log(this.input);
        console.log(this.input.current);
        console.log(this.input.current.value);
        console.log("called");
    }
    render() {
        return (
            <div>
                <form  method="post">
                <input type="text" ref={this.input} />
                <input type="button" onClick={this.clickHandle} value="Click" name="" id="" />

                </form>
            </div>
        );
    }
}
export default Uncontrolledcompo;