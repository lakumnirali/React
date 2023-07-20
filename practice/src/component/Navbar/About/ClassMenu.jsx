import React from 'react';
import { Link ,Outlet} from 'react-router-dom';
const ClassMenu = () => {
    return (
        <div>
           <ol>
            <li><Link to='classintro'>intro</Link></li>
           </ol> 
           <Outlet></Outlet>
        </div>
    );
};

export default ClassMenu;