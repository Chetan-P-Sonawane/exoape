import React from 'react'
import Footer from '../components/Footer'
import {motion} from "framer-motion"

const Contact = () => {
  return (
      <div className="w-full relative mx-auto select-none">
          
          <div className='w-full absolute top-72 -z-10 flex overflow-hidden whitespace-nowrap'>
              <motion.h2
                  initial={{ x: "0" }}
                  animate={{ x: "-100%" }}
                  transition={{ repeat: Infinity, ease:"linear", duration: 30 }}
                  className=' text-[15vw] sm:text-[9vw] font-medium'>
                  Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·&nbsp;
              </motion.h2>

              <motion.h2
                  initial={{ x: "0" }}
                  animate={{ x: "-100%" }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                  className=' text-[15vw] sm:text-[9vw] font-medium'>
                  Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·&nbsp;
              </motion.h2>
          </div>

          <div className="max-w-screen-xl h-full mx-auto flex align-center justify-center pt-[40vw] sm:pt-[8vw] ">
              <img className="h-[100vw] sm:h-[38vw] " src="https://a.storyblok.com/f/133769/758x1134/002f93a9b3/exo-ape-contact.jpg/m/1240x1855/filters:quality(90)" alt="" srcset="" />
           </div>

          <div className="mx-7 sm:mx-28 py-14">
              <h3 className="text-[6.5vw] sm:text-[2vw] sm:w-[30%] py-7 leading-tight">Ready for lift-off? Ping, tweet, message or poke — and we will get back as soon as possible.</h3>
              
              <div className="text-[4vw] sm:text-[1.2vw] w-[37%] sm:w-[12%] pb-4">
                  <a href="mailto:hello@exoape.com" className=" relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:h-[1px] after:w-[100%] after:scale-x-0 after:origin-left after:duration-300 after:ease-in-out hover:after:scale-x-100 hover:after:duration-300 cursor-pointer after:bg-gray-800">hello@exoape.com</a>
                  <a href="tel:+31772086200" className=" relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:h-[1px] after:w-[100%] after:scale-x-0 after:origin-left after:duration-300 after:ease-in-out hover:after:scale-x-100 hover:after:duration-300 cursor-pointer after:bg-gray-800">+31772 086 200</a>
              </div>
              
              <div className="w-[40%] text-[4vw] sm:text-[1.2vw]">
                  <h5>Willem II Singel 8 6041 H, Roermond The Netherlands</h5>
              </div>
           </div>
        
        <Footer />
        
    </div>
  )
}

export default Contact