import React from 'react'
import {motion} from "framer-motion"

const TheApes = () => {
  return (
      <div className='w-full relative mx-auto bg-zinc-900 text-orange-50'>
          <div className="max-w-screen-xl mx-7 sm:mx-28 pt-[23vw] pb-[25vw] sm:py-[10vw]">
              <div className="w-full max-w-screen-xl sm:px-[20vw] sm:pb-[0vw] ">
                  {["Design &", "Technology", "Enthusiasts"].map((item, index) => (
                      <h1
                          className="w-full text-[15vw] text-left sm:text-[10vw] font-normal sm:font-normal leading-[8vw] sm:leading-none py-[5vw] sm:py-[0vw]"
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
              </div>

              <div className='w-full pt-[8vw] sm:flex items-center justify-around '>
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
                      <h4 className="text-[4.6vw] sm:text-[1.2vw]">The Apes</h4>
                  </div>
                  <div className='sm:w-[75%] pt-[5vw] sm:pt-0 '>
                      <h3 className="headings sm:w-[70%] text-[6vw] sm:text-[1.8vw] tracking-none leading-snug">We are a team* of like-minded design enthusiasts and tech aficionados that explore the digital frontier with grit and dedication. Intrigued by beauty, fascinated by technology and fuelled with an everlasting devotion to digital craftsmanship and meaningful aesthetics.</h3>
                  </div>
              </div>

         <div className='relative w-full h-[125vw] sm:h-[100vh]'>
                  <img data-scroll data-scroll-speed="-0.10" className="absolute left-[15%] top-[15%] sm:left-[10%] sm:top-[40%] h-[50vw]  sm:h-[22vw]" src="https://a.storyblok.com/f/133769/1920x1280/b13859fdad/exo-ape-studio-mood-team-04.jpg/m/650x433/filters:quality(90)" alt="" />
        
                  <div className='absolute top-[28%] left-[0%]  sm:left-[70%] sm:top-[20%]'>
                  <img className=" h-[60vw] sm:h-[30vw]" src="https://a.storyblok.com/f/133769/1200x1790/ac2f6934ee/exo-ape-studio-mood-team-03.jpg/m/650x970/filters:quality(90)" alt="" />
                      <h5 className=' text-[2.7vw] sm:text-[0.8vw] w-[46%] sm:w-[80%] mt-[20px] pt-[20px] border-t-[1px] border-orange-50'>
                          *We believe in a fluid team approach that allows us to bring together the best designers, developers and agencies in the world in order to serve the needs of today’s clients.</h5>
                  </div>
        
         </div>

          </div>
          </div>
  )
}

export default TheApes