import React from 'react'
import compLine from "../Images/compLine.png";
import ce from '../Images/ce.jpg'
import iso from '../Images/iso.jpg'
import rohs from '../Images/rohs.jpg'

import './Certificate.css'

export default function Certificates() {
  
  return (
    <div>

<div>
<div className="iotSol__head">
          <div className="iotSol__headImg1">
            <h2 className="heading_products">
              <strong>Our Certificates</strong>
            </h2>
            <img src={compLine}  />
          </div>
        </div>
</div>


<div className='text_img'>

<div className='certificate__data'>
<div className='certificate__text'>
  <p style={{color:'black', fontFamily:'Poppins', fontWeight:'600'}}>At Cellus Tech India, we prioritize quality and compliance. Our products meet the highest industry benchmarks, validated by CE, ISO, and RoHS certifications. We uphold these standards to ensure the utmost reliability, safety, and environmental responsibility in all our offerings.</p>
</div>

<div className='certificate__img'> 
    <div className='certificate__left'>
    <h4 style={{textTransform:'uppercase', fontWeight:'600'}}>CE</h4>
    <a style={{color:'var(--color-primary)'}} href={ce} target="_blank">
        <img src={ce}/></a>
    </div>


    <div className='certificate__right'>
    <h4 style={{textTransform:'uppercase', fontWeight:'600'}}>ISO</h4>
    <a style={{color:'var(--color-primary)'}} href={iso} target="_blank">
    <img src={iso}/></a>
    </div>

    <div className='certificate__mid'>
    <h4 style={{textTransform:'uppercase', fontWeight:'600'}}>RoHS</h4>
    <a style={{color:'var(--color-primary)'}} href={rohs} target="_blank">
    <img src={rohs}/></a>
    </div>
</div>
</div>
</div>
</div>
  )
}
