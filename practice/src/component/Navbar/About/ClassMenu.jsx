import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const ClassMenu = () => {
    return (
        <div>
            <div >
                {/* className='col-8 mx-auto' */}
                <ol>
                    <li ><Link to='classintro'>introofclasscomponent</Link></li>
                    <li ><Link to='statincompo'>stateinclasscomponent</Link></li>
                    <li ><Link to='propsincompo'>propsinclasscomponent</Link></li>
                    <li ><Link to='lifecycleinclass'>lifecycleinclasscomponent</Link></li>
                    <li ><Link to='lifecycleloderexample'>Life cycle loder example</Link></li>
                    <li ><Link to='conditionalrenderclassexample'>conditional render classexample</Link></li>
                    <li ><Link to='list'>listinclasscomponenet</Link></li>
                    <li ><Link to='Restvsspread'>Restvsspreadinclasscomponent</Link></li>
                    <li ><Link to='controlledcompo'>Controlled Compo in Class Compo</Link></li>
                    <li ><Link to='uncontrolledcompo'>UnControlled Compo in Class Compo</Link></li>
                    <li ><Link to='composistionvsinheritance'>Composition vs Inheritance in Class Compo</Link></li>
                </ol>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ClassMenu;