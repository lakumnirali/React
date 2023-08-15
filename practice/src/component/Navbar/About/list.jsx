import React, { Component } from 'react';
import {Indianbestcook} from './indianbestcook'
import './list.css'
class List extends Component {
    render() {
        let listdata=Indianbestcook.map ((anything,index)=>{
            return(
                <li key={index}>
                <div className='renderimg'>
                <img  src={anything.ImageUrl} alt="" />
                </div>
               <p><b>{anything.Name}</b>&nbsp;<br />{anything.Born}<br/>{anything.Aboutus}</p>
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

export default List;