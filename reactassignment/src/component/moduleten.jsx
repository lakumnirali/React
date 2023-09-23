import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Moduleten = () => {
    return (
        <div>
           <div className="container">
             <div className="row text-center my-5">
                 <div className="col"><h2>Life cycle in Class Component and functional component with Hooks</h2></div>
             </div>
             <div className="row">
                 <div className="col-lg-6 text-center">
                    <Link to='classcompo'><h3>Life cycle in Class Component</h3></Link>
                     </div>
                 <div className="col-lg-6">
                    <Link to='funcompo'><h3>Fucntional Component with Hooks</h3></Link>
                    </div>
             </div>
             <div className="row">
               <div className="col">
                 <Outlet></Outlet>
               </div>
             </div>
           </div>
         </div>
    );
};

export default Moduleten;