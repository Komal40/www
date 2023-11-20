import React, { useEffect, useState } from 'react'
import ctiskaiologo from '../Images/ctiskaiologo.png'
import cti from '../Images/navcti.png'
// import skaio from '../Images/skaiotm.png'
import newlogo from '../Images/newlogo.jpeg'
import logocti from '../Images/logocti.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Navlogo from './Navlogo/Navlogo'



export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [shouldHideLogo, setShouldHideLogo] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    
  };

  const toggleMenus = () =>{
    window.scrollTo(0, 0); 
  }

  useEffect(() => {
    const handleScroll = () => {
      // You can adjust the scroll threshold based on your design
      const scrollThreshold = 50;
      const shouldHide = window.scrollY > scrollThreshold;
      setShouldHideLogo(shouldHide);

      // const navElement = document.getElementById('navbar');
      // if (navElement) {
      //   navElement.style.marginTop = shouldHide ? '0' : '0rem';
      // }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
<div className={`nav-container ${shouldHideLogo ? 'hide-logo' : ''}`}>
  <Navlogo/>

    <div id='navbar'>
       
      {/* <nav className={menuOpen ? 'active' : ''} > */}
      <div id='navbar' className={menuOpen ? 'active' : ''}>
          {/* <nav className={shouldHideLogo ? 'scrolled' : ''}> */}
    <nav>
     <div className='nav__logo'>
           <img src={logocti} alt='logo'/>
        </div>   
             
        <div className={`nav__container ${menuOpen ? 'active' : ''}`}>
        <ul className='nav__ul'>
          <li><a href='#'><Link to='/' onClick={toggleMenus}>Home</Link></a></li>
          {/* <li><a href='#'><Link to='/autoDetails' onClick={toggleMenus}>Automotive Solutions</Link></a></li> */}
          {/* <li><a href='#'><Link to='/iotDetails' onClick={toggleMenus}>IIoT Solutions</Link></a></li> */}
          <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Fabrication
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/autoDetails">Automotive Solutions</a>
          <a class="dropdown-item" href="/iotDetails">IIoT Solutions</a>
        </div>
      </li>

          {/* <li><a href='#'><Link to='/consulting' onClick={toggleMenus}>Consulting Services</Link></a></li> */}
          <li><a href='#'><Link to='/products' onClick={toggleMenus}>Products</Link></a></li>
          <li><a href='#'><Link to='/' onClick={toggleMenus}>Testing Tools</Link></a></li>

          {/* <li><a href='https://www.cellustechindia.com/led-leaflet-new.pdf'>Brochure</a></li> */}
          {/* <li><a href='#'><Link to='/present'>Our Story</Link></a></li> */}
          <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          About Us
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/present">Our Story</a>
          <a class="dropdown-item" href="/contact">Contact Us</a>
          <a class="dropdown-item" href="#">Privacy Policy</a>
        </div>
      </li>


          {/* <li><a href='#'><Link to='/contact' onClick={toggleMenus}>Contact us</Link></a></li>    */}
          <li>
            <div id='google_ele' ></div>
          </li>    
          </ul> 
        </div>
        
          {/* <div className='loginbtn'>
            <Link to='/login'>
            <button >Login</button>
            </Link>
            
            </div> */}
            {/* <div className='nav_skaio'>
              <img src={skaio}/>
            </div> */}
            

            <div className='burger-menu' onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </nav>
      </div>
    </div>
    </div>
    </>
  )
}

