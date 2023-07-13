import React, { useState } from 'react';
import logo from '../../asset/logo.png'
import './app.css'
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
export default function App() {
  const [showNavColor, setShowNavColor] = useState(false);
 return (
    <>
      <MDBNavbar expand='lg' className='dark' >
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img src={logo} alt="" className='logo'/>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0 t'>
              <MDBNavbarItem className='active '>
                <Link className='nav-link navtext' aria-current='page' to='/'>
                  Home
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className='nav-link navtext' to='/variety'>variety</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className='nav-link navtext' to='/pricing'>Pricing</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className='nav-link navtext' to='/aboutus'>About</Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      </>
  );
}