import React, { useState } from 'react'
import ctiskaiologo from '../Images/ctiskaiologo.png'
import cti from '../Images/navcti.png'
// import skaio from '../Images/skaiotm.png'
import newlogo from '../Images/newlogo.jpeg'
import './Navbar.css'
import { Link } from 'react-router-dom'



export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    
  };

  const toggleMenus = () =>{
    window.scrollTo(0, 0); 
  }

  return (
    <div id='navbar'>
      <nav className={menuOpen ? 'active' : ''}>
       
        <div className='nav__logo'>
           <img src={newlogo} alt='logo'/>
        </div>  
        <div className={`nav__container ${menuOpen ? 'active' : ''}`}>
        <ul className='nav__ul'>
          <li><a href='#'><Link to='/' onClick={toggleMenus}>Home</Link></a></li>
          <li><a href='#'><Link to='/autoDetails' onClick={toggleMenus}>Automotive Solutions</Link></a></li>
          <li><a href='#'><Link to='/iotDetails' onClick={toggleMenus}>IIoT Solutions</Link></a></li>
          <li><a href='#'><Link to='/consulting' onClick={toggleMenus}>Consulting Services</Link></a></li>
          {/* <li><a href='https://www.cellustechindia.com/led-leaflet-new.pdf'>Brochure</a></li> */}
          <li><a href='#'><Link to='/present'>Our Story</Link></a></li>
          <li><a href='#'><Link to='/contact' onClick={toggleMenus}>Contact us</Link></a></li>       
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
            <div id='google_ele' style={{marginRight:'1%'}}></div>

            <div className='burger-menu' onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </nav>
      
    </div>
  )
}


