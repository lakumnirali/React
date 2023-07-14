import React, { Component } from 'react';
import Card from './card/card'
import "./customcard.css"

import Cardimg1 from '../../asset/card1img.png'

class Carddata1 extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <><div className='header'><p >Bring A Box Of</p> <p id='p2' >Happiness Today</p></div></>
                </div>
                <div className="row pt-2">
                    <div className="col-lg-6">
                        <Card imageData={Cardimg1} />
                    </div>
                    <div className="col-lg-6">
                        <Card imageData={Cardimg1} />
                    </div>

                </div>
            </div>
        );
    }
}

export default Carddata1;