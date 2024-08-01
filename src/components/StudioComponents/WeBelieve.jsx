import React, { useRef, useEffect } from 'react'
import {motion} from "framer-motion"
import gsap, { Linear, ScrollTrigger } from 'gsap/all';

const WeBelieve = () => {
    
    const lengthendiv = useRef(null)
    const lengthenimage = useRef(null)

    useEffect(() =>
    {
        gsap.registerPlugin(ScrollTrigger)
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: lengthendiv.current,
                start: "0 90%",
                end:"0 10%",
                // markers: true,
                scrub: 1,

            }
        });


        tl
            .to(lengthenimage.current, {
               width:"100%",
               height:"100%",
                // padding: "0",
                ease: Linear,
            }, "f")

    })

  return (

  <div className='w-full relative mx-auto'>
          <div className='w-full relative mx-auto bg-white text-black'>
              <div className="max-w-screen-xl mx-7 sm:mx-28 pt-[23vw] pb-[25vw] sm:py-[10vw]">
                  <div className="w-full max-w-screen-xl  sm:flex items-center justify-around  ">
                      <div className=" featured w-full sm:w-[20%] gap-2 flex ">
                          <svg
                              className="w-3 "
                              data-v-669b4a84=""
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                  data-v-669b4a84=""
                                  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                                  fill="currentColor"
                              ></path>
                          </svg>
                          <h4 className="text-[4.6vw] sm:text-[1.2vw]">What We Believe</h4>
                      </div>
                      <div className='w-[75%]'>

                          {["Data", "Informs","–Emotion", "Converts"].map((item, index) => (
                              <h1
                                  className="w-[80%] text-[15vw] text-left sm:text-[10vw] font-normal sm:font-normal leading-[8vw] sm:leading-none py-[5vw] sm:py-[0vw]"
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

                          <div className='w-full pt-[8vw] '>

                              <div className='sm:w-[100%] pt-[5vw] sm:pt-0 '>
                                  <h3 className="headings sm:w-[70%] text-[6vw] sm:text-[1.8vw] tracking-none leading-snug">We believe that the most effective outcomes are achieved when data-driven insights are used to inspire emotive experiences. Leading to increased brand loyalty, long-term customer engagement, and higher conversion rates.</h3>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>

          <div ref={lengthendiv} className='relative flex justify-center w-full h-[60vw] sm:h-[60vw] overflow-hidden'>
              <div ref={lengthenimage} className='relative overflow-hidden  z-[99] w-[80%] '>
                  <img  src="https://a.storyblok.com/f/133769/2500x1667/5224da023b/exo-ape-studio-mood.jpg/m/2400x1600/filters:quality(90)" alt="" />
               </div>
          </div>
          

      </div>
  )
}

export default WeBelieve