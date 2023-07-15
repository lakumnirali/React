import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom"

export default function App() {
  const [showNavColor, setShowNavColor] = useState(false);
  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
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
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <Link aria-current='page' className='nav-link ' to='/'>
                  Home
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className='nav-link ' to='/features'>Features</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className='nav-link ' to='/pricing'>Pricing</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className='nav-link ' to='/about'>About</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button' to= '/Dropdown'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link >Features</MDBDropdownItem>
                  <MDBDropdownItem link>Pricing</MDBDropdownItem>
                  <MDBDropdownItem link>About</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar> 
         </>
  );
}