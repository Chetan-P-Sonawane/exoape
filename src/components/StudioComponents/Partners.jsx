import gsap, { Power4, ScrollTrigger } from 'gsap/all';
import React, { useRef, useEffect } from 'react'

const Partners = () => {

    const partnerdiv = useRef(null);
    const partner1 = useRef(null);
    const partner2 = useRef(null);

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: partnerdiv.current,
                start: "0 90%",
                // markers: true,
                scrub: 1,

            }
        });

        tl
            .to(partner1.current, {
                y: "-40%",
                ease: Power4,
            }, "f")

            .to(partner2.current, {
                y: "40%",
                ease: Power4,
            }, "f")

    })



  return (
      <div className='w-full relative mx-auto'>
          <div className="max-w-screen-xl mx-7 sm:mx-28">
              <div ref={partnerdiv} className="h-[100vw] sm:h-[100vh] w-full  px-7 sm:pl-[10vw] sm:pr-0  relative flex justify-center items-center">
              
              <div className=' w-[50vw] sm:w-[30vw] h-[35vw] sm:h-[20vw]'>
                  <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/1500x1003/2581b1d31d/exo-ape-studio-collage-2.jpg/m/1000x669/filters:quality(90)" alt="" />
              </div>

                  <div ref={partner1} data-scroll-speed="2" className='absolute top-[22%] sm:top-[25%] left-[2%] sm:left-[5%] w-[28vw] sm:w-[25vw]  sm:h-[35vw]'>
                  <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/1500x2123/637f850b2b/exo-ape-studio-collage-1.jpg/m/1000x1415/filters:quality(90)" alt="" />
              </div>

                  <div ref={partner2} className='absolute top-[52%] sm:top-[50%] left-[65%] sm:left-[67%] w-[25vw] sm:w-[15vw] sm:h-[20vw] '>
                  <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/569x809/dd3f38466e/exo-ape-studio-collage-3.jpg/m/1000x1422/filters:quality(90)" alt="" />
              </div>

            
           
            </div>

              <div className='w-full py-[8vw] sm:flex items-center justify-between '>  
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
                      <h4 className="text-[4.6vw] sm:text-[1.2vw]">Partners</h4>
                  </div>
                  <div className='sm:w-[75%] pt-[5vw] sm:pt-0 '>
                      <h3 className="headings sm:w-[100%] text-[6vw] sm:text-[3.5vw] tracking-none leading-snug">We partner with brands and businesses that create exceptional experiences where people live, work and unwind.</h3>
                 
                 <div className=' pt-[4vw]'>
                      {["Interior Design & Furniture",
                        "Architecture & Real Estate",
                        "Hospitality, Travel & Tourism"].map((item,index)=>{
                            return(
                                <h5 key={index} className="text-gray-500 text-[3.5vw] sm:text-[1.2vw] leading-loose">{item}</h5>

                            )
                        })}
                        
                 </div>
                  </div>
          </div>
          </div>
    </div>
  )
}

export default Partners