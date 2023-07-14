
import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
export default function App(props) {
  return (
    <div>


      <MDBCard style={{ maxWidth: '540px' }}>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src={props.imageData} position='left' alt='...' />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle className='card1cakeology'>CAKEOLOGY</MDBCardTitle>
              <MDBCardText>
                Delivering at your doorstep.
              </MDBCardText>
              <MDBCardText>
                <small className='text-muted'><input type="button" value="oder now" /></small>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  );
}