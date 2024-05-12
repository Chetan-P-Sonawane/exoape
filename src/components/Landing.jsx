import { motion } from 'framer-motion'
import React from 'react'


const Landing = () => {
  return (
    <div className='relative w-full h-[135vh] sm:h-[300vh]'>
       
       <div className='picture w-full h-full overflow-hidden'>
          <img 
            data-scroll data-scroll-speed="-1"
            className="w-full h-full object-cover object-top" src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(webp):quality(70)" alt="" />
        </div>
       <div className="w-full absolute top-0">
         <div className=' text max-w-screen-xl h-full mx-auto px-7 sm:px-14 text-white'>
          <div className='para mt-72 sm:mt-[29rem]'>
              {[
                 "Global digital design studio partnering with",
                 "brands and businesses that create exceptional",
                 "experiences where people live, work, and unwind."
              ].map((item, index) => {
                return (
                  <p key={index} className=' overflow-hidden text-[3.4vw] sm:text-[1.56vw] tracking-[0.5px] font-semibold '>
                    <motion.span
                     initial={{rotate: 30, y:"100%", opacity:0 }}
                      animate={{ rotate: 0, y: 0, opacity: 1}}
                      transition={{ ease: [0.22, 1, 0.36, 1], duration:1, delay:index*0.2}}
                      className=' inline-block origin-left' >
                      {item}
                    </motion.span>
                  </p>
                )
                

              } )}
           
             </div>
          <div className="headings mt-[5vw] sm:mt-[5vw] sm:-ml-[1.5vw]">
              
              {["Digital","Design","Experience"].map((item,index) => {
                return(
                  <h1 key={index} className="overflow-hidden text-[15vw] sm:text-[17vw] py-4 -my-4 sm:py-12 sm:-my-16  tracking-tight leading-none">
                    <motion.span
                      initial={{ rotate: 30, y: "100%", opacity: 0 }}
                      animate={{ rotate: 0, y: 0, opacity: 1,delay: index*0.2 }}
                      viewport={{ once: true }}
                      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8, delay:1.5+index * 0.3 }}
                      className=' inline-block origin-left' >
                      {item}
                    </motion.span>
                   </h1>

              )
              })}
          </div>
          <div className="para2 mt-[10vw] sm:mt-[9vw] sm:w-1/2 text-[3.4vw] sm:text-[1.51vw] tracking-[0.5px] font-semibold">
            <p>We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space. Unforgettable journeys start with a click.</p>
            <a className='border-b-[.3px] sm:border-b-[1px] text-sm sm:text-lg border-zinc-100 pb-1 mt-[8vw] sm:mt-24 inline-block' href="/">The Studio</a>
          </div>
         </div>
        </div>
          
    </div>
  )
}

export default Landing