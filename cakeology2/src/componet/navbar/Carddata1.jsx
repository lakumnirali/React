import React, { Component } from 'react';
import Card from './card/card'
import "./customcard.css"

class Carddata1 extends Component {
    render() {
        return (
            <div>
            <div className="row">
            <><div className='header'><p>Bring A Box Of</p> <p>Happiness Today</p></div></>
            </div>
            <div className="row">
                <div className="col-lg-3 mt-2"> <Card /></div>
                <div className="col-lg-3 mt-2"> <Card /></div>
                <div className="col-lg-3 mt-2"> <Card /></div>
                <div className="col-lg-3 mt-2"> <Card /></div>
                <div className="col-lg-3 mt-2"> <Card /></div>
                
            </div>
        </div>
        );
    }
}

export default Carddata1;