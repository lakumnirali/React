import React, { Component } from 'react';

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
class ChildCompoForComposition extends Component {
    render() {
        return (
        
             <div className='card border border-secondary my-3'>  
      <MDBCard >
      <MDBCardBody>
        <MDBCardTitle>Special title treatment</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#'>Go somewhere</MDBBtn>
        {this.props.children}
      </MDBCardBody>
    </MDBCard>
                </div>   
    
        );
    }
}

export default ChildCompoForComposition;