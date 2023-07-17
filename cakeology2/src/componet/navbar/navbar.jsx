import React, { useState } from 'react';
import logo from '../../asset/logo.png'
import './app.css'
// import './app.js'
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  // MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  // MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
export default function App() {
  const [showNavColor, setShowNavColor] = useState(false);
  return (
    <>
      <MDBNavbar expand='lg' className='dark' >
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img src={logo} alt="" className='logo' />
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
              <MDBNavbarItem className=' '>
                <NavLink className='nav-link  navtext' aria-current='page' to='/'>
                  Home
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink className='nav-link navtext' to='/variety'>variety</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink className='nav-link navtext' to='/pricing'>Pricing</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink className='nav-link navtext' to='/aboutus'>About</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link navtext' role='button'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem >
                    <NavLink className='nav-link dtext' to='/variety'>variety</NavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem >
                   <NavLink className='nav-link dtext' to='/pricing'>pricing</NavLink>
                    </MDBDropdownItem>
                  <MDBDropdownItem >
                   <NavLink className='nav-link dtext' to='/aboutus'>aboutus</NavLink>
                   </MDBDropdownItem>
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