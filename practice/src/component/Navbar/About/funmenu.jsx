import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const funmenu = () => {
    return (
        <div className=' col-mg-6 offset-6'>
           <ol>
            <li ><Link to='funintro'>functionintro</Link></li>
            <li ><Link to='stateinfun'>Stateinfunctioncomponent</Link></li>
            <li ><Link to='propsinfun'>propsinfunctioncomponent</Link></li>
            <li><Link to="useeffectinfunctionalcompo">useEffect in Fucntional Compo</Link></li>
            <li><Link to="styledinfunctinalcompo">styled in functinal compo</Link></li>
            <li><Link to="usecallbaclfunctionalcompo">use callback functional compo</Link></li>
           

           </ol>
           <Outlet></Outlet>
        </div>
    );
};

export default funmenu;