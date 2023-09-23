import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Classmenu = () => {
    return (
        <div>
            <ol>
                <li ><Link to='lifecycleinclass'>lifecycleinclasscomponent</Link></li>
                <li ><Link to='lifecycleloderexample'>Life cycle loder example</Link></li>
            </ol>
            <Outlet></Outlet>
        </div>
    );
};

export default Classmenu;



