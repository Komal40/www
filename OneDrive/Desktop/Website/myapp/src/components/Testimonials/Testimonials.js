import React from 'react'
import './Testimonials.css'
import img1 from '../images/peoples/p1.jpg'
// import img2 from '../images/peoples/p2.jpg'
// import img3 from '../images/peoples/p3.jpg'
// import img4 from '../images/peoples/p4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




export default function Testimonials() {
  return (
    <section id='testimonials'>
        

        <Swiper 
         // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
     
        className='container testimonials__container'>
            <SwiperSlide className='testimonial'>
                <div className='client__avatar'>
                    <img src={img1} alt='people' />
                                   
                </div>
                <h5 className='client__name'>Ernest Achiever</h5>
                    <small className='client__review'>
                        i am very pleased with your project management capability. your team has excellent communicatipn skills ad a fast response and turnaround time hishest work quality.
                    </small>    
            </SwiperSlide>

            <SwiperSlide className='testimonial'>
                <div className='client__avatar'>
                    <img src={img1} alt='people' />
                                   
                </div>
                <h5 className='client__name'>Ernest Achiever</h5>
                    <small className='client__review'>
                        i am very pleased with your project management capability. your team has excellent communicatipn skills ad a fast response and turnaround time hishest work quality.
                    </small>    
            </SwiperSlide>

            <SwiperSlide className='testimonial'>
                <div className='client__avatar'>
                    <img src={img1} alt='people' />
                                   
                </div>
                <h5 className='client__name'>Ernest Achiever</h5>
                    <small className='client__review'>
                        i am very pleased with your project management capability. your team has excellent communicatipn skills ad a fast response and turnaround time hishest work quality.
                    </small>    
            </SwiperSlide>


           
        </Swiper>
    </section>
  )
}


