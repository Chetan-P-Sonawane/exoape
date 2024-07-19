import React from 'react'
import { motion } from 'framer-motion'


const Studio = () => {
  return (
    <div className='relative w-full h-[150vh] sm:h-[250vh]'>

      <div className='picture w-full h-full overflow-hidden'>
        <img
          data-scroll data-scroll-speed="-1"
          className="w-full h-full object-cover object-top" src="https://a.storyblok.com/f/133769/2500x2626/63a902ce2b/exo-ape-studio-hero.jpg/m/2400x2521/filters:quality(90)" alt="" />
      </div>
      <div className="w-full absolute top-0">
        <div className=' text max-w-screen-xl h-full mx-auto px-7 sm:px-14 text-white'>
          <div className='sm:grid sm:grid-cols-2 sm:grid-rows-2 '>
            <div className="headings mt-[50vw] sm:mt-[18vw] sm:-ml-[0.9vw]">
              {["Building", "Digital", "Presence"].map((item, index) => {
                return (
                  <h1 key={index} className=" overflow-hidden text-[18vw] sm:text-[11vw] py-3 -my-4 sm:py-8 sm:-my-16  tracking-tighter leading-none">
                    <motion.span
                      initial={{ rotate: 30, y: "100%", opacity: 0 }}
                      animate={{ rotate: 0, y: 0, opacity: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8, delay: 1.5 + index * 0.3 }}
                      className=' inline-block origin-left' >
                      {item}
                    </motion.span>
                  </h1>
  
                )
              })}
              <div className=" mt-[5vw] sm:mt-[4.5vw] sm:ml-[0.9vw] w-2/3 sm:w-full text-[4.6vw] sm:text-[1.2vw] tracking-tight">
                <p>Digital experiences with maximum emotional impact</p>
              </div>
            </div>
          
           
            <div className="sm:row-start-2 sm:col-start-2  mt-[18vw] sm:mt-[19vw] sm:w-[100%]  tracking-tight ">
              <p className='text-[4.8vw] sm:text-[1.7vw] font-semibold'>We explore and push the boundries of digital for brands and businesses that strive to enhance people&apos;s lives through exceptional experiences.</p>
            
              <div className=" mt-[5vw] sm:mt-[2vw] sm:w-[90%] text-[3.8vw] sm:text-[1.2vw] tracking-[0.5px] ">
                <p>For over a decade, we&apos;ve been using profound design aesthetics, meticulously crafted details and surprising interactions to create digital experiences that spark conversation, inspire action, and drive desirability.</p>
              </div>
              <a className='border-b-[.3px] sm:border-b-[1px] text-sm sm:text-lg border-zinc-100 pb-1 mt-[8vw] sm:mt-24 inline-block' href="/">The Studio</a>
           </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Studio