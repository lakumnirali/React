import React,{useMemo,useState} from 'react';

const UseMemoexample = () => {
    const[StudentIndex, setStudentIndex]=useState(0);
    const students=["tom","thomas","john","heny","giva"];
    const  student=students[StudentIndex];
    const computeStudentcount = (student) =>{
        let i = 0;
        while (i < 100000) i++;
        return student.length;
    }
    const studentCount =useMemo(()=> computeStudentcount(student))

    return (
        <div>
            <p>use memo react hooks</p>
"{student} has{studentCount}"
             <button onClick={() => {
                if (StudentIndex + 1 === student.length) {
                    setStudentIndex(0);
                } else {
                    setStudentIndex(StudentIndex + 1);
                }
            }}>
                Click
            </button>
        </div>
    );
};

export default UseMemoexample;




// import React, { useMemo, useState } from 'react';

// const UseMemoFunctionalCompo = () => {
//     const [wordIndex, setWordIndex] = useState(0);
//     const words = ["hey", "this", "is", "cool"];
//     const word = words[wordIndex];
//     const computeLetterCount = (word) => {
//         console.log("called computeLetterCount");
//         let i = 0;
//         while (i < 100000) i++;
//         return word.length;
//     }
//     // const letterCount = computeLetterCount(word)
//     const letterCount =useMemo(()=> computeLetterCount(word))

//     return (
//         <div>
//             <p>useMemo is a React Hook that lets you cache the result of a calculation between re-renders.</p>
//             "{word}" has {letterCount} letters
//             <button onClick={() => {
//                 if (wordIndex + 1 === words.length) {
//                     setWordIndex(0);
//                 } else {
//                     setWordIndex(wordIndex + 1);
//                 }
//             }}>
//                 Click
//             </button>
//         </div>
//     );
// };

// export default UseMemoFunctionalCompo;