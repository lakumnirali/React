import React, { useContext } from 'react';

function Usecontextcompo(props) {
    return (
        <>
        <h3>usecontext component</h3>
         <From/>   
        </>
    );
}
const From = ()=>{
     return(
        <>
        <panel tittle='welcome'>
            <h3>form</h3>
            <button>sign up</button>
            <button>sign in</button>
        </panel>
        </>
     )
};
function panel({ tittle,children}) {
    return(
        <section className={'children'}>
         <h3>pannel</h3>
         {children}
        </section>
    )
}
function Button({children}) {
    const theme = useContext(theme)
}

export default Usecontextcompo;