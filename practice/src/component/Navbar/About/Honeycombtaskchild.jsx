import React, { useState }  from 'react';
import { useEffect } from "react";

function Honeycombtaskchild(props) {
    const[ele,setele]=useState({});
    const[ele2,setele2]=useState({});
      useEffect(()=>{
        //   console.log("called inside useEffect");
        let sufer = shuffle(arry);
        setele(sufer[0]);
        setele2(sufer[1]);
        sufer.shift();
        sufer.shift();
         props.onAddHandler(sufer);
      },[ele]) ;  
    const arry=[1,2,3,4,5,6];
    const shuffle=(array)=>{
        // console.log("called inside shuffle");
        for (let i = array.length -1; i > 0; i--){
            const t =Math.floor(Math.random()*(i+1));
            const tempry = array[i];
            array[i]=array[t];
            array[t]=tempry; 
            // console.log("array[i]",array[i]);
        }

        return array;
    };
    return (
        <>
           Remaining Array Element = {JSON.stringify(ele)}, {JSON.stringify(ele2)}
           <br />
           <br />
           All the values of Array={(arry)}
        </>
    );
}

export default Honeycombtaskchild;