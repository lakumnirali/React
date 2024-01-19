import React, { useRef, useState } from 'react';
import Honeycombtaskchild from'./Honeycombtaskchild.jsx'
function Honeycombtask (props){
    const [ele,setele]=useState();
    const childref = useRef();
   const parentFunction = async (data)=>{
    console.log("called parentFunction update",data);
    await setele(data)
   }
    return (
        <>
              {(ele && ele.length) ?
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
            </table> :"no data" }
            <div className="row mt-5">
                <div className="col">
                    <button className='btn mt-2' onClick={()=> childref.current.getAlert()}>shuffle</button>
                </div>
            </div>
    <Honeycombtaskchild onAddHandler={parentFunction } ref={childref}/> 
        
        </>
    );
};

export default Honeycombtask;