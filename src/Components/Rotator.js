import React, { useEffect } from "react";
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'
import './App.css'

const categoryData=['Lorem','Lorem','Dolor','Ipsum','Dolor','Dolor'];

const Rotator = (props) => {

  useEffect(() => {
    const swiper = new Swiper('.swiper-container',
    {
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // spaceBetween: 30,
    });
  });

  const rotatorItems = categoryData.map((item, index) => {
    console.log('item: ', item);
    return (
      <div className="swiper-slide" key={index}>
        <div class="image-holder">
          <img src="http://www.coxreps.com/rf/image_medium/Pub/Web/CoxReps/Images/smartlocal-hero.jpg" alt="smart, local media. national scale." title="smart, local media. national scale." />
        </div>
        <div class="content-holder">
          <p class="headline">smart, local media. national scale.</p>
          <div class="list-text">
              <p>400+ best-in-class local broadcast television stations covering more than 87% of U.S. TV households</p>
          </div>
        </div>
      </div>
    );
  })

  return (
    <div className="App">
      <div className="swiperMainContainer">
        {/* Here we will be adding swiper container */}
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {rotatorItems}
          </div>
          {/* -- If we need pagination -- */}
          <div class="swiper-pagination"></div>
          {/* -- If we need navigation buttons -- */}
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  )
}

export default Rotator;