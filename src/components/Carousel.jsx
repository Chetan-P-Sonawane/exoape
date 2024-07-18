import React from 'react'
import { Autoplay, EffectCreative, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';

import 'swiper/css/effect-fade'

const Carousel = () => {
  return (
    <div className='w-full bg-zinc-400 h-[50vw] overflow-hidden'>
          <Swiper
              spaceBetween={0}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay:2000,
                disableOnInteraction: false
              }}
             
              
             
              
              effect="creative"
              
              creativeEffect={{
                prev: {
                  shadow: true,
                  origin: 'left center',
                  translate: ['-5%', 0, -400],
                  rotate: [0, 0, 0],
                },
                next: {
                  origin: 'right center',
                  translate: ['5%', 0, -400],
                  rotate: [0, 0, 0],
                },
              }}
              modules={[Autoplay, EffectCreative]}
                    className="myswiper"
          
                >   

              <SwiperSlide><img src="https://a.storyblok.com/f/133769/2500x1339/a0431054ca/columbia-pictures-lady.jpg/m/2400x1285/filters:quality(90)" alt="" /></SwiperSlide>  
              <SwiperSlide><img src="https://a.storyblok.com/f/133769/2844x1600/67feeb64de/exo-ape-awwwards-annual-2023.jpg/m/2400x1350/filters:quality(90)" alt="" /></SwiperSlide>
              <SwiperSlide><video className="w-full" autoPlay muted loop src="https://a.storyblok.com/f/133769/x/aaf6399723/exo-ape-news-win-sotm.mp4"></video></SwiperSlide>
              <SwiperSlide><img src="https://a.storyblok.com/f/133769/2500x1669/f17a650324/pixelflakes-news-hero.jpg/m/2400x1602/filters:quality(90)" alt="" /></SwiperSlide>
              
          </Swiper>
    
    </div>
  )
}

export default Carousel