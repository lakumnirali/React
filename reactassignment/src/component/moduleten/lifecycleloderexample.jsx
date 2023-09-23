import React, { Component } from 'react';
import { json } from 'react-router-dom';
class Lifecycleloderexample extends Component {
    constructor(props) {
        super(props);
        this.state = { loader: false };
    }
    componentDidMount() {
        console.log("called did mount");
        setTimeout(() => {
            this.setState({ loader: true })
        }, 2000);
    }
    // componentDidUpdate(prevprops,prevstate){

    // }
    render() {
        let HtmlDisp = null;
        if (this.state.loader) {
            // HtmlDisp = <img src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="tia " />
            HtmlDisp =<img src="https://media.tenor.com/7NX24XoJX0MAAAAM/loading-fast.gif" alt="" />


        } else {
            HtmlDisp = "inside else"
        }
        return (
            <div>
                {JSON.stringify(this.state.loader)}
                {HtmlDisp}
                {/* raxit */}
                {/* <button onClick={()=>this.state({data:"testing"})}>click</button> */}
                {/* <p><strong>{this.state.data}</strong></p> */}
            </div>
        );
    }
}

export default Lifecycleloderexample;