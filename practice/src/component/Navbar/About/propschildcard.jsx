import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
const propschildcard = (props) => {
  return (
    <div>
      <MDBCard>
      <MDBCardImage src={props.imgdata} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{props.cardtitle}</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
  );
};
export default propschildcard;



