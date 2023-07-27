import React, { Component } from 'react';
import ChildCompoForComposition from './ChildCompoForComposition.jsx'
class Composistionvsinheritance extends Component {
    render() {
        return (
            <div className='row'>
                <div className="col-lg-3">
                <ChildCompoForComposition>
                    <h2>anything</h2>
                    <p>jjksdkfjhds</p>
                </ChildCompoForComposition>
                </div>
                <div className="col-lg-3">
                <ChildCompoForComposition></ChildCompoForComposition>
                </div>
                <div className="col-lg-3">
                <ChildCompoForComposition></ChildCompoForComposition>
                </div>
                <div className="col-lg-3">
                <ChildCompoForComposition></ChildCompoForComposition>
                </div>
                <div className="col-lg-3">
                <ChildCompoForComposition></ChildCompoForComposition>
                </div>
                <div className="col-lg-3">
                <ChildCompoForComposition></ChildCompoForComposition>
                </div>
            </div>
        );
    }
}

export default Composistionvsinheritance;