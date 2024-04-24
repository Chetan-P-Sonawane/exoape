import gsap, { Linear, Power4, ScrollTrigger } from 'gsap/all';
import React, { useRef, useEffect } from 'react'
import { motion } from "framer-motion";


const Spread = () => {
    
    const spreaddiv= useRef(null);
    const one = useRef(null);
    const two = useRef(null);
    const three = useRef(null);
    const four = useRef(null);
 
    useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: spreaddiv.current,
            start: "0 90%",
            // markers: true,
            scrub: 1,
        
        }
    });

    tl
    .to(one.current,{
        x: "-40%",
        ease:Power4,
    },"f")
    .to(two.current, {
        x: "40%",
        ease: Power4,
    },"f")

    .to(three.current, {
        x: "-20%",
        ease: Power4,
    },"f")

    .to(four.current, {
        x: "20%",
        ease: Power4,
    },"f")

})


  return (
      <div ref={spreaddiv} className='w-full '>
          <div className=' relative w-full h-full flex justify-center items-center py-[15vw] '>

              <div ref={two} className='absolute top-[24%] sm:top-[24%] left-[60%] sm:left-[58%] w-[17vw] sm:w-[10vw] h-[25vw] sm:h-[14vw]'>
                  <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/700x994/filters:quality(90)" alt="" />
              </div>

              <div ref={one} className='absolute top-[35%] left-[10%] sm:left-[18%] aspect-video h-[20vw] sm:h-[14vw]'>
                  <video autoPlay muted loop className='w-full h-full' src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
              </div>

              <div ref={three} className='absolute top-[66%] left-[15%] sm:left-[15%] w-[25vw] sm:w-[25vw] h-[17vw] sm:h-[18vw]'>
                  <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)" alt="" />
              </div>

              <div ref={four} className='absolute top-[68%] left-[60%] w-[30vw] h-[30vw] sm:w-[24vw] sm:h-[24vw]'>
                  <video autoPlay muted loop className='w-full h-full' src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
              </div>

              <div className=' w-[40vw] sm:w-[24vw] h-[68vw] sm:h-[40vw] '>
                  <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)" alt="" />
              </div>
       
        </div>

          <div className="overlay w-full flex flex-col justify-between py-[20vw] sm:pt-[0vw] sm:pb-[4vw]">
              <div className="w-full flex justify-center items-center gap-2">
                  <svg className="w-2" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                  <h3 className="text-[3.4vw] sm:text-[1.2vw]">Work in motion</h3>
              </div>
               
              {["Spread", "the News"].map((item, index) => (
                  <h1
                      className="w-full text-[15vw] sm:text-[10vw] font-semibold sm:font-normal leading-[18vw] sm:leading-[10vw] flex flex-col justify-center items-center py-[5vw] sm:py-[2vw] overflow-hidden"
                      key={index}
                  >
                      <div>
                          <motion.span
                              initial={{ rotate: 10, y: "50%", opacity: 0 }}
                              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                              className="inline-block origin-left"
                          >
                              {item}
                          </motion.span>
                      </div>
                  </h1>
              ))}

              <p className="text-[4.6vw] sm:text-[1.5vw] text-center px-[17vw] sm:px-[34vw] pt-[2vw] overflow-hidden"><motion.span
                  initial={{ rotate: 10, y: "50%", opacity: 0 }}
                  whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-block origin-left">Find out more about our work on these leading design and technology platforms.</motion.span></p>

          </div>
        
    </div>
  )
}

export default Spread