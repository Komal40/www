import React from 'react'
import {content} from './Content.js'
import './ServiceSection.css'

export default function ServiceSection() {
    
  return (
    <>
    <div id='consult_services' >

   
    <h2 className="heading_products" style={{display:'flex', justifyContent:'center'}}><strong>Our Services</strong></h2>
    <div style={{display:'flex' , flexWrap:'wrap', margin:'3rem', backgroundColor:' #00C2C1'}}>
    {
        content.map((item)=>
        (
            
                <div class="card card2" style={{ 
                  
                  display:"flex", marginTop:'1.3rem',marginLeft:"3rem",margin:"2rem",height:'max-content', width: "18rem",backgroundColor:'whitesmoke' }}>
            
          
      <div class="card-body" style={{ 
                  }}>
          <img src={item.bulb} alt='logo' style={{display:'flex', margin:'1rem auto'}}/>
            {/* <i class="fa fa-lightbulb-o"></i> */}
        <h5 class="card-title" style={{textAlign:'center'}}><strong>{item.heading}</strong></h5>
        <p class="card-text" style={{textAlign:'center'}}>{item.para}</p>
        
      </div>
    </div>
           
        ))
    }
     </div>
     </div>
    </>
  )
 
}




