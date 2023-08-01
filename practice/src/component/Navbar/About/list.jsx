import React, { Component } from 'react';
import {Warriors} from './data.js'
class List extends Component {
    render() {
        let listdata = Warriors.map((kaipan,index)=>{
            console.log(kaipan.name);
            return(
                <li key={index}>
                 <p><b>{kaipan.name}</b> {kaipan.birthdate}</p>
                </li>
            )
        })
        return (
            <>
            <ul>
                {listdata}
                </ul></>
        );
    }
}

export default List;