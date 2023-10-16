import React from 'react'
import img1 from '../images/services/check.webp'
import img6 from '../images/services/choose2.png'
import img5 from '../images/services/about3.png'
import './About.css'

export default function About() {
  return (
    <>
     <div class="ds-organise" style={{margin:'4rem'}}>
        <div class="organise-item">
            <div class="o-i-left reveal-top">
                <ol start="1">
                    <li>About Us</li>
                </ol>
                <h1>EXPOSURE IMMIGRTION is the fastest growing Immigration company specialized in providing services for people who are looking to migrate or settle in Canada, Australia, Europe. We are also specialized in doing Tourist visa applications for different countries. </h1>

                <div class="c-p-inner-ds-2 reveal-top">
                    <img src={img1}/>
                    <h2>EXPOSURE IMMIGRATION is a one of the leading Immigration Firm in India and it's a trust worthy brand in Immigration Industry.</h2>
                </div>
                {/* <!-- <div class="c-p-inner-ds-2 reveal-top" id="inner-ds">
                    <div class="inner-ds-item">
                        <img src="/images/services/check.webp">
                        <h2>Make sure you have the right team members participating in the sprint workshop</h2>
                    </div>
                    <div class="c-p-inner-i-ds-puc reveal-top" id="inner-inner-ds">
                        <img src="/images/services/check.webp">
                        <h2>Market size statistics</h2>
                    </div>
                    <div class="c-p-inner-i-ds-puc reveal-top" id="inner-inner-ds">
                        <img src="/images/services/check.webp">
                        <h2>Competitor analysis (e.g. SWOT analysis)</h2>
                    </div>
                    <div class="c-p-inner-i-ds-puc reveal-top" id="inner-inner-ds">
                        <img src="/images/services/check.webp">
                        <h2>Product analytics</h2>
                    </div>
                    <div class="c-p-inner-i-ds-puc reveal-top" id="inner-inner-ds">
                        <img src="/images/services/check.webp">
                        <h2>User feedback</h2>
                    </div>
                    <div class="c-p-inner-i-ds-puc reveal-top" id="inner-inner-ds">
                        <img src="/images/services/check.webp">
                        <h2>User interviews</h2>
                    </div>
                    <div class="c-p-inner-i-ds-puc reveal-top" id="inner-inner-ds">
                        <img src="/images/services/check.webp">
                        <h2>User Personas</h2>
                    </div>
                </div> --> */}
                <div class="c-p-inner-ds-2 reveal-top">
                    <img src={img1}/>
                    <h2>We are specialized in Visa application for different countries.</h2>
                </div>
                <div class="c-p-inner-ds-2 reveal-top">
                    <img src={img1}/>
                    <h2>Our motto is to give you the reliable and satisfactory service for your visa application.</h2>
                </div>
                <div class="c-p-inner-ds-2 reveal-top">
                    <img src={img1}/>
                    <h2>We have a team of visa experts who are specialized in filing applications for different countries as per the criteria.</h2>
                </div>
                <div class="c-p-inner-ds-2 reveal-top">
                    <img src={img1}/>
                    <h2>We have Knowledge about the application for most of the Countries to apply for your application.</h2>
                </div>


            </div>
            <div class="o-i-right reveal-top">
                <img src={img5} style={{scale: '0.8'}}/>
            </div>
        </div>
        <div class="organise-item-rev">
            <div class="o-i-right-smaller reveal-top">
                <img src={img6}/>
            </div>
            <div class="o-i-left reveal-top">
                <ol start="2">
                    <li>WHY CHOOSE WE</li>
                </ol>
                {/* <!-- <h3 class="reveal-top">Day 1: Understand and select</h3> --> */}
                <h2 class="reveal-top">EXPOSURE IMMIGRATION is one of the best option for Canada Permanent visa application. Our excellent track record, quality service and fair pricing validates the same and we believe to establish long lasting relationship with our clients in order to maintain our good will.</h2>

              
            </div>

        </div>
        
    </div>
    </>
  )
}
