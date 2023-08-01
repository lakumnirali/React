import React from 'react';
import Propschildcard from './propschildcard.jsx'
import Cimg2 from '../../../cimg2.jpg'
import PropTypes from 'prop-types';

Propsinfun.propTypes = {

};

function Propsinfun(props) {
    return (
        <>
            <div className="row">
                <div className="col-lg-3">
                    <Propschildcard cardtitle="data" imgdata='https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                </div>
                <div className="col-lg-3"><Propschildcard /></div>
                <div className="col-lg-3"><Propschildcard /></div>
                <div className="col-lg-3"><Propschildcard /></div>
            </div>
        </>
    );
}

export default Propsinfun;