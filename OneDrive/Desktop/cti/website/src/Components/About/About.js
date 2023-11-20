import React from "react";
import img1 from "../imgs/services/check.webp";
import img6 from "../imgs/services/choose2.png";
import img5 from "../imgs/services/about3.png";
import compLine from "../Images/compLine.png";
import about2 from '../Images/about2.avif';
import about from "../Images/about_us.jpg";
import "./About.css";

export default function About() {
  return (
    <>
      <div class="ds-organise" style={{ margin: "4rem" }}>
        <div class="organise-item">
          <div class="o-i-left reveal-top">
            <ol start="1">
              <li style={{ listStyle: "none" }}>About Us</li>
            </ol>
            <div className="iotSol__head">
              <div className="iotSol__headImg1">
                {/* <img src={compLine} style={{ width: "20rem", marginTop:'-7rem' }} /> */}
              </div>
            </div>
            <h1 style={{ marginTop: "-6rem", fontWeight: "400" }}>
              CELLUS TECH INDIA stands at the forefront of the LED lighting
              industry, distinguished as a comprehensive solution provider. Our
              core focus lies in crafting energy-efficient lighting systems
              driven by LED technology, a beacon of sustainable illumination. We
              are impassioned by a vision of a greener tomorrow, where
              innovative and intelligent lighting solutions lead the charge in
              curbing carbon emissions.
              <br />
              <br />
              Our expansive product portfolio spans across architectural,
              commercial, and household LEDs, offering versatile options
              tailored to diverse lighting needs. From enhancing the aesthetic
              appeal of spaces to boosting energy conservation efforts, our
              solutions are engineered to deliver excellence.
              <br />
              <br />
              {/* In addition to our cutting-edge products, we pride ourselves on a commitment to unparalleled customer service. We consider the journey with our clients to extend far beyond the sale, placing utmost importance on lasting relationships. This dedication is woven into our DNA, ensuring that our customers receive unwavering support and expertise, fostering a reputation of excellence that defines CELLUS TECH INDIA in the industry. */}
            </h1>

            {/* <div class="c-p-inner-ds-2 reveal-top">
              <img src={img1} />
              <h2>
              We resolve to provide outstanding service before and after the sale, and take pride in maintaining long term relationships with our customers.
              </h2>
            </div> */}

            {/*                 
            <div class="c-p-inner-ds-2 reveal-top">
              <img src={img1} />
              <h2>
                We are specialized in Visa application for different countries.
              </h2>
            </div>
            <div class="c-p-inner-ds-2 reveal-top">
              <img src={img1} />
              <h2>
                Our motto is to give you the reliable and satisfactory service
                for your visa application.
              </h2>
            </div>
            <div class="c-p-inner-ds-2 reveal-top">
              <img src={img1} />
              <h2>
                We have a team of visa experts who are specialized in filing
                applications for different countries as per the criteria.
              </h2>
            </div>
            <div class="c-p-inner-ds-2 reveal-top">
              <img src={img1} />
              <h2>
                We have Knowledge about the application for most of the
                Countries to apply for your application.
              </h2>
            </div> */}
          </div>
          <div class="o-i-right reveal-top">
            {/* <img src={img5} style={{scale: '0.8'}}/> */}

            <img src={about} />
          </div>
        </div>
        <div class="organise-item-rev">
          <div class="o-i-right-smaller reveal-top">
            {/* <img src={img6}/> */}

            <img src={about2} />
          </div>
          <div class="o-i-left reveal-top">
            <ol start="2">
              <li>WHY CHOOSE WE</li>
            </ol>
            {/* <!-- <h3 class="reveal-top">Day 1: Understand and select</h3> --> */}
            <h2
              class="reveal-top"
              style={{ color: "black", fontWeight: "400" }}
            >
              The mission of CELLUS TECH INDIA is anchored in becoming the
              foremost purveyor of cutting-edge, high-quality lighting solutions
              for commercial, municipal, and utility sectors. Our relentless
              pursuit is to furnish our customers and their clients with
              consistently superior value, setting new industry standards.
              <br />
              <br />
              We are resolute in our commitment to delivering an unmatched level
              of service that spans the entire customer journey - from pre-sales
              inquiries to post-purchase support. This dedication reflects in
              the enduring relationships we cherish with our customers. We take
              immense pride in being a trusted partner in their endeavors,
              always striving to exceed expectations. By doing so, we not only
              provide illumination but also light the path towards enduring
              partnerships and mutual success.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}