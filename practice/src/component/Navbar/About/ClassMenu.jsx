import React from 'react';
import { Link ,Outlet} from 'react-router-dom';
const ClassMenu = () => {
    return (
        <div>
            <div >
            {/* className='col-8 mx-auto' */}
           <ol>
            <li ><Link to='classintro'>introofclasscomponent</Link></li>
            <li ><Link to='statincompo'>stateinclasscomponent</Link></li>
           </ol> 
           </div>
           <Outlet></Outlet>
        </div>
    );
};

export default ClassMenu;