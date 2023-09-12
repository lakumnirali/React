import React, { Component } from 'react';

class Restvsspread extends Component {

    render() {
        const numbersone= [1,2,3,4]; <br />
        const numbersotwo=[4,6,5,7,0]; <br />
        const numcombined=[...numbersone,...numbersotwo]; <br />
        
        return (
          
            <>
            <div>
                <h1 className='text-danger'>{numcombined}</h1>
            </div>
                
            </>
        );
    }
}

export default Restvsspread;