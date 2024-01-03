import React, { useState } from 'react';
let clickhandleoutside=()=>{
    alert("hello click outeside")
}
const Stateinfun = () => {
    const [entername,Setother]=useState("Raxit");
    const [entersurname,Setstate]=useState("Rangadiya");
    const [entermidlename,state]=useState("Chandubhai");
        let username='what is your name?';
    let clickhandleinside=()=>{
        alert("click handle inside")
    }
   
         
    let onclickvariablechange =()=>{
        console.log('username');
        Setother("Nirali")
        Setstate("Lakum")
        state("Nagarbhai")
        // username=('data')
        let val = entername;
        let valu = entersurname;
        let value = entermidlename;

if(val === 'Raxit'){
    Setother('Nirali')
}
else{
    Setother('Raxit')  
}
if(valu === 'Rangadiya'){
    Setstate('Lakum')
}
else{
    Setstate('Rangadiya')  
}
if(value === 'Chandubhai'){
    state('Nagarbhai')
}
else{
    state('Chandubhai')  
}
    }

   
    return (
        <>
            <div className="row my-5">
           <div className="col-lg-7">
            <h2>State Exmaple in Funtional Component</h2>
            <p>detaile : {username}</p>
            <p>Firstname:{entername}</p>
            <p>middlename:{entermidlename}</p>
             <p>Lastname:{entersurname}</p>
            <button className='btn btn-primary' onClick={clickhandleinside}>click inside</button> &nbsp;
            <button className='btn btn-primary' onClick={clickhandleoutside}>click outside</button>&nbsp;
            <button className='btn btn-primary' onClick={onclickvariablechange}>onclick variable change</button>
            </div>
        </div>
        </>
    );
};

export default Stateinfun;