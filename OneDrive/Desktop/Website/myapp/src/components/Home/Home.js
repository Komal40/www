import React from "react";
import "./Home.css";
import logo from "./bulb.png"

export default function Home() {
  return (
    <div id="main" >
      {/* <img src={logo} style={{float:"right",marginTop:"7rem",height:"30rem",width:"30rem"}}/> */}
      <div className="name">
        <h1>WELCOME TO SS TEXTILE INDIA</h1>
        <div>
        <p className="details">A SYMBOL OF TECHNICAL EXCELLENCE</p>
       
          <p className="details">AN ISO 9001:2015, CE, ROHS CERTIFIED COMPANY</p>
          <p className="details">TRADEMARK REGISTERED, START-UP INDIA REGISTERED</p>
        </div>
        <div>
          <div style={{marginTop:'2rem'}}>
          <button className="header-btn">Our Products</button>
          </div>
          <div>
        <p style={{fontSize:'2rem', marginTop:'2rem'}}>Also available on 
        <img src='https://www.cellustechindia.com/img/flipkart.png' alt='logo'/>
        <img src='https://www.cellustechindia.com/img/amazon.png'/>
        <img src='https://www.cellustechindia.com/img/paytym.png'/>
        <img src='https://www.cellustechindia.com/img/snapdeal.jpg'/>
        <img src='https://www.cellustechindia.com/img/shopclue.png'style={{height:'40px', width:'38px'}}/>
        <img src='https://www.cellustechindia.com/img/meesho1.png' style={{height:'30px', width:'38px'}}/>
        </p>

        <img src='https://www.cellustechindia.com/img/trustseal1.png'/>
      </div>
        </div>
      </div>


    
    </div>
  );
}





