import React from 'react'
import './Services.css'
import img1 from '../images/services/docas.png'
import img2 from '../images/services/casestudy.png'
import img3 from "../images/services/visa.png"
import img4 from '../images/services/inter2.png'

export default function Services() {
  return (
    <>
    <div class="livenbrathe" style={{zIndex:'0'}}>
                <h1 style={{display:'flex', justifyContent:'center', margin:'1rem'}}>Our Products</h1>
                {/* <h3>Exposure Immigration provides a wide range of immigration services and solutions!</h3> */}
            </div>

            <div class="mymargin"></div>

            <div id="includeHtmlcards"></div>
            <div class="mymargin"></div>


            
 <div class="cards">
   <div class="card">
     <span class="close"></span>
     <span class="arrow"></span>
     <article>
       <h2>Documentation Assistance</h2>
       <div class="pic" style={{backgroundColor:' var(--white)', border:' 3px solid #00C2C1'}}><img src={img1} style={{backgroundColor:' var(--white)'}}/></div>
 
       <div class="desc">Proper documentation is the key to successful application and visa approval.</div>
 
     </article>
     {/* <!-- <div class="actions">
       <button class="btn"><span>like</span><img class="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/heart.svg"></button>
       <button class="btn"><span>trade</span><img class="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/trade.svg"></button>
 
     </div> --> */}
   </div>
   <div class="card">
     <span class="close"></span>
     <span class="arrow"></span>
     <article>
       <h2>Case<br/> Study </h2>
       <div class="pic" style={{backgroundColor:' var(--white)', border:' 3px solid #00C2C1'}}><img src={img2} style={{paddingTop: '16px', backgroundColor: 'var(--white)'}}/></div>
 
       <div class="desc">Exposure Immigration experts do proper case study and analysis, before start of the process.</div>
 
     </article>
     {/* <!-- <div class="actions">
       <button class="btn"><span>like</span><img class="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/heart.svg"></button>
       <button class="btn"><span>trade</span><img class="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/trade.svg"></button>
 
     </div> --> */}
   </div>
   <div class="card">
    <span class="close"></span>
    <span class="arrow"></span>
    <article>
      <h2>Visa<br/>Application</h2>
      <div class="pic" style={{backgroundColor:' var(--white)', border:' 3px solid #00C2C1'}}><img src={img3} style={{paddingTop: '16px'}}/></div>

      <div class="desc">We help you to file visa applications accurately under the guidance of qualified visa experts.</div>

    </article>
    {/* <!-- <div class="actions">
      <button class="btn"><span>like</span><img class="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/heart.svg"></button>
      <button class="btn"><span>trade</span><img class="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/trade.svg"></button>

    </div> --> */}
  </div>
  <div class="card">
    <span class="close"></span>
    <span class="arrow"></span>
    <article>
      <h2>International Admission</h2>
      <div class="pic" style={{backgroundColor:' var(--white)', border:' 3px solid #00C2C1'}}><img src={img4} style={{paddingTop: '16px'}}/></div>

      <div class="desc">We help you choose the best college/universities and apply for visa to study abroad.</div>

    </article>
 {/* <div class="actions">
      <button class="btn"><span>like</span><img class="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/heart.svg"></button>
      <button class="btn"><span>trade</span><img class="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/trade.svg"></button>

    </div>  */}
  </div>
 </div>
    </>
  )
}





