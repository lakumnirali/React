import React, { Component } from 'react';
import {Powerfullwomen} from './powerfullwomen.js'
class Renderlist extends Component {
    
    render() {
        let listdata=Powerfullwomen.map((anything,index)=>{
            console.log(anything);
            return(
                <li key={index}>
                    <div className='renderimg'>
                    <img  src={anything.ImageUrl} alt="" />
                    </div>
                   <p><b>{anything.Name}</b>&nbsp;<br />{anything.Born}<br/>{anything.Awards}</p>
                </li>
            )
        })
        return (
            <>
            <ul><h1><li>How to Create a List View in React Js?</li></h1></ul>
              <ul className='renderlist'>
             {listdata}
              </ul>
            </>
        );
    }
}

export default Renderlist;