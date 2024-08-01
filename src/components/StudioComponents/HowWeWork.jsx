import React from 'react'
import { motion } from "framer-motion"
import data from "../../assets/data.json";

const HowWeWork = () => {
  return (
      <div className='w-full relative mx-auto bg-zinc-900 text-orange-50'>
          <div className="max-w-screen-xl mx-7 sm:mx-28">
              
              <div className=" featured w-full sm:w-[20%] pt-[25vw] sm:pt-[14vw] gap-2 flex ">
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
                  <h4 className="text-[4.6vw] sm:text-[1.2vw]">How we work</h4>
              </div>

              <h3 className="headings sm:w-[45%] text-[6vw] sm:text-[2.1vw] py-[10vw] sm:py-[5vw] tracking-none leading-tight sm:leading-snug">We believe that all good things are achieved by those who are willing to put in passion, courage and craftsmanship.</h3>
             
              
              <div className=' max-w-screen-xl  mx-auto sm:ml-[10vw] sm:mr-[4vw]'>
                <div className='sm:flex gap-[6vw] pt-[7vw] '>

                {
                    data.howwework.map((item,index) => {
                        return ( 
                            <div className={`${index < 2 ? "" : "hidden"} ${index === 1 ? "sm:pt-[15vw]" : "" }  `} key={index}> 
                               <WorkComponent index={index} sr={item.sr} title={item.title} subtitle={item.subtitle}  />
                            </div>
                        )
                    })
                }
                     
                </div>
              </div>
          </div>

          <div className='w-full flex whitespace-nowrap overflow-hidden py-[10vw] sm:py-[0] sm:pb-[3vw]'>
              <motion.h2
                  initial={{ x: "0%" }}
                  animate={{ x: "-100%" }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                  className=' text-[15vw] sm:text-[17vw]  font-regular'>
                  ∞  Forever Upwards&nbsp;   </motion.h2>
              


              <motion.h2
                  initial={{ x: "0%" }}
                  animate={{ x: "-100% " }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                  className=' text-[15vw] sm:text-[17vw] font-regular'>
                  ∞ Forever Upwards&nbsp;
              </motion.h2>
          </div>
  

                  <div className=' max-w-screen-xl mx-auto sm:ml-[10vw] sm:mr-[4vw]'>
                  <div className='sm:flex mx-7 sm:mx-28 gap-[6vw] pt-[10vw] pb-[5vw] '>

                          {
                              data.howwework.map((item, index) => {
                                  return (
                                      <div className={`${index >= 2 ? "" : "hidden"} ${index === 3 ? " sm:pt-[15vw]" : ""}  `} key={index}>
                                          <WorkComponent index={index} sr={item.sr} title={item.title} subtitle={item.subtitle} />
                                      </div>
                                  )
                              })
                          }

                      </div>
                
              
              </div>

        

          </div>
  )
}



const WorkComponent = ({index, sr, title, subtitle,key }) => {
  return (
      <div key={key} className="flex py-[10vw] sm:pt-[0vw] sm:items-center justify-around">
          <div className="w-[10%] text-[4.6vw] sm:text-[1.2vw] text-gray-100 pt-[2vw] sm:pt-[0]">
              {sr}
          </div>
          <div className='w-[80%]'>
              <h3 className=' text-[8.5vw] sm:text-[3.5vw] leading-tight sm:leading-snug'>{title}</h3>
              <h5 className='w-[85%] sm:w-[75%] text-[4vw] sm:text-[1.2vw]  pt-[2vw] leading-snug'>{subtitle}</h5>
          </div>
      </div>
  )
}



export default HowWeWork






{/* {
                          data.howwework.map((item, index) => {
                              return (
                                  <div className={`${index >= 2 ? "" : "hidden"}`} key={index}>
                                      <WorkComponent index={index} sr={item.sr} title={item.title} subtitle={item.subtitle} />
                                      {console.log(item.sr)}
                                  </div>

                              )
                          })} */}

{/* <div className='sm:w-1/2 flex py-[10vw] sm:pt-[0vw] sm:items-center justify-around'> 
                          <div className="w-[10%] text-[4.6vw] sm:text-[1.2vw] text-gray-100 pt-[2vw] sm:pt-[0]">
                            01
                        </div>
                          <div className='w-[80%]'>
                              <h3 className=' text-[8.5vw] sm:text-[3.5vw] leading-tight sm:leading-snug'>Elevating sophistication across all senses</h3>
                          <h5 className='w-[85%] sm:w-[75%]  text-[4vw] sm:text-[1.2vw]  pt-[2vw] leading-snug'>We ensure that the high standards and sophistication of your product are experienced by all senses while blurring the lines between the physical and the digital world. We go deep into details to provide a holistic experience that leaves a lasting impression on your customers and fits seamlessly into your existing ecosystem.</h5>
                        </div>
                     </div> */}


{/* <div className='sm:w-1/2 flex pt-[17vw] sm:pt-[27vw]  sm:items-center justify-around'>
                          <div className="w-[10%] text-[4.6vw] sm:text-[1.2vw] text-gray-100 pt-[2vw] sm:pt-[0]">
                              02
                          </div>
                          <div className='w-[80%]'>
                              <h3 className=' text-[8.5vw] sm:text-[3.5vw] leading-tight sm:leading-snug'>To be human is our greatest quality</h3>
                              <h5 className='w-[85%] sm:w-[75%]  text-[4vw] sm:text-[1.2vw]  pt-[2vw]  leading-snug'>We believe that intuition is the most advanced technology we have, and curiosity is our most powerful tool. Our team is guided by the principles of compassion and honesty in our day-to-day communications, and we understand that people value feeling more than information. That's why we pour a lot of soul and passion into our work, delivering experiences that touch people on a deeper level.</h5>
                          </div>
                      </div> */}