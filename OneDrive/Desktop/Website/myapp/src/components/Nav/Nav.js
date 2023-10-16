import React from 'react'
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';


export default function Nav() {
  return (
   
    <nav class="navbar navbar-expand-lg navbar-dark bg-info nav">
    <div class="container-fluid">
    <img className='img1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXiiBx-DojbOKCEHDBhf8l6gztcUJOzAuOiUdDdJJrA&s' alt='logo' style={{height:'3rem'}}/>
    {/* <img className='img1' src='https://cellustechindia.com/img/cti_new_logo2.png' alt='logo'/> */}
    <a class="navbar-brand" href="#">
      {/* <img className='img' src='https://cellustechindia.com/img/skaio_logo.png' alt='logo'/> */}
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="main_nav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#" >Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="myDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Automotive Solutions
            </a>
            <ul class="dropdown-menu" aria-labelledby="myDropdown">
              <li>
                <a class="dropdown-item" href="#">Engineering Services &raquo;</a>
                <ul class="submenu dropdown-menu" >
                  <li>
                    <a class="dropdown-item" href="#">AUTOSAR  &raquo;</a>
                    <ul class="submenu dropdown-menu" >
                  <li>
                    <a class="dropdown-item" href="#">Classic</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Adaptive</a>
                  </li>
                  </ul>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Functionality Safety &raquo;</a>
                    <ul class="submenu dropdown-menu" >
                  <li>
                    <a class="dropdown-item" href="#">ISO 26262</a>                   
                  </li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Control Units</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Connected Car &raquo;</a>
                    <ul class="submenu dropdown-menu" >
                  <li>
                    <a class="dropdown-item" href="#">NFC</a>                   
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">OEM Cloud</a>                   
                  </li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Model Based</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Hardware Design & Development</a>
                  </li>
                  </ul>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Networking Stacks &raquo;
                </a>
                <ul class="submenu dropdown-menu" >
                  <li>
                    <a class="dropdown-item" href="#">Library of Stacks</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">UDS Stack</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">DoIP Stack</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">OBD Stack</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">CAN Stack</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">LIN Stack</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">ISOBUS Stack</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">CANFD Stack</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Flesray Stack</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">NFC Stack</a>
                  </li>                  
                </ul>
              </li>
              
            </ul>
          </li>



          <li class="nav-item">
            <a class="nav-link" href="#">IOT Solutions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#consult_services">Consulting Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#ele_products">Electrical Products</a>
          </li>
        </ul>

        <button type="button" class="btn btn-primary button">Reach Us</button>
        
      </div>
    </div>
  </nav>
  
  )
}


