import React, { useState } from 'react';
import Honeycombtaskchild from'./Honeycombtaskchild.jsx'
function Honeycombtask (props){
    const [ele,setele]=useState();
   const parentFunction = async (data)=>{
    console.log("called parentFunction update",data);
    await setele(data)
   }
    return (
        <div>
             {  (ele && ele.length) ?
            <table>
                <thead>
                    <tr>
                        <th>col-1</th>
                        <th>col-2</th>
                    </tr>
                    <tr>
                        <td>{ele[0]}</td>
                        <td>{ele[1]}</td>
                    </tr>
                    <tr>
                        <td>{ele[2]}</td>
                        <td>{ele[3]}</td>
                    </tr>
                </thead>
            </table> 
               }
    
          <div className="remaining-details mt-5">
             <Honeycombtaskchild onAddHandler={parentFunction } /> 
          </div>
        </div>
    );
}

export default Honeycombtask;