import React, { Component } from 'react';

class Lifecycleinclass extends Component {
    constructor(props) {
        console.log("called");
        super(props);
        this.state = {
            status: true,
            time: new Date()
        };
    }
    tick = () => {
        // console.log("called tick");
        this.setState({
            time: new Date()
        });
    }
    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        )
    }
    shouldComponentUpdate(nextProps, nextState) {
        // console.log("should update called", nextState);
        return true
        return false
    }

    // componentWillUnmount(){
    //     this.setstate({status:null});
    //     clearInterval(this.timer)
    // }
    componentDidUpdate = (prevprops, prevstate) => {

    }
    render() {
        return (
            <>

                <h2>{this.state.time.toLocaleTimeString()}</h2>

            </>
        );
    }
}

export default Lifecycleinclass;