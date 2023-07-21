import React, { Component } from 'react';
import Childcard from './childcard.jsx'
import Cimg2 from '../../../cimg2.jpg'
class propsincompo extends Component {
    render() {
        var path = process.env.PUBLIC_URL;
        var image = "/image/img1.jpg";

        return (
            <div>
                <div className="row">
                    <div className="col-lg-4 mt-2">
                        < Childcard imgdata='https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    </div>
                    <div className="col-lg-4 mt-2">
                        < Childcard imgdata={process.env.PUBLIC_URL + '/image/img1.jpg'} />
                        {/* < Childcard imgdata={path + image} /> */}
                    </div>
                    <div className="col-lg-4 mt-2">
                        < Childcard imgdata={Cimg2} />
                    </div>
                    <div className="col-lg-4 mt-2">
                        < Childcard imgdata={'/image/img3.jpg'}/>
                    </div>
                    <div className="col-lg-4 mt-2">
                        < Childcard />
                    </div>
                    <div className="col-lg-4 mt-2">
                        < Childcard />
                    </div>
                </div>
            </div>
        );
    }
}

export default propsincompo;