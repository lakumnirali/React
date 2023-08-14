import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassMenu from './ClassMenu.jsx';
import ClassIntro from './ClassIntro.jsx'
import Statincompo from './Statincompo.jsx'
import Propsincompo from './propsincompo.jsx'
import Lifecycleinclass from './lifecycleinclass.jsx'
import Lifecycleloderexample from './lifecycleloderexample.jsx'
import Conditionalrenderclassexample from './conditionalrenderclassexample.jsx'
import List from './list.jsx'
import Restvsspread from './restvsspread.jsx'
import Controlledcompo from './controlledcompo.jsx'
import UnControlledcompo from './uncontrolledcompo.jsx'
import Composistionvsinheritance from './composistionvsinheritance.jsx'
class ClassRouter extends Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={<ClassMenu />}>
                    <Route path="/classintro" element={<ClassIntro />} />
                    <Route path="/statincompo" element={<Statincompo />} />
                    <Route path="/propsincompo" element={<Propsincompo />} />
                    <Route path="/lifecycleinclass" element={<Lifecycleinclass />} />
                    <Route path="/lifecycleloderexample" element={<Lifecycleloderexample />} />
                    <Route path="/conditionalrenderclassexample" element={<Conditionalrenderclassexample />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/restvsspread" element={<Restvsspread />} />
                    <Route path="/controlledcompo" element={<Controlledcompo />} />
                    <Route path="/uncontrolledcompo" element={<UnControlledcompo />} />
                    <Route path="/composistionvsinheritance" element={<Composistionvsinheritance />} />
                </Route>
            </Routes>
        );
    }
}

export default ClassRouter;