import React from 'react'
import {motion} from "framer-motion"
import data from "../../assets/data.json"

const Recognition = () => {
  return (
      <div className='w-full relative mx-auto bg-white text-black'>
          <div className="max-w-screen-xl mx-7 sm:mx-28 pt-[23vw] pb-[25vw] sm:py-[10vw]">
              <div className="w-full max-w-screen-xl sm:flex items-center justify-around ">
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
                      <h4 className="text-[4.6vw] sm:text-[1.2vw]">Recognition</h4>
                  </div>
                <div className='w-[100%] sm:w-[75%]'>

                  {["Awards &", "Publications"].map((item, index) => (
                      <h1
                          className="sm:w-[80%] text-[15vw] text-left sm:text-[10vw] font-normal sm:font-normal leading-[8vw] sm:leading-none py-[5vw] sm:py-[0vw]"
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

                      <div className='w-full pt-[8vw]  '>

                          <div className='sm:flex items-center w-[100%] pt-[5vw] sm:pt-0 '>
                              <div className=" sm:w-[50%] pb-[10vw] sm:pb-[0] ">
                             {[data.recognition1.map((item,index)=>{
                                return(
                                    <div key={index} className='flex flex-col justify-between text-zinc-600 pb-[4vw] sm:pb-[0] sm:py-[1vw] text-[4.6vw] sm:text-[1.2vw]'>
                                        <h3 >{item.company}</h3>
                                        <h3 >{item.awardname}</h3>
                                        <h4 >
                                            <a target="_blank" className="w-full relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:h-[1.5px] after:w-[100%] after:scale-x-100 after:origin-right after:duration-300 after:ease-in-out hover:after:scale-x-0 hover:after:duration-300 cursor-pointer after:bg-zinc-500  font-regular " href={item.awardlinkname} >{item.awardlinkname}</a>
                                        </h4>
                                    </div>
                                )
                             })]}
                               

                             </div>
                             <div className="sm:w-[40%] items-center ">
                              
                              {[
                                data.recognition2.map((item,index)=>{
                                    return(
                                        <div key={index} className='w-[60%] flex items-center justify-between leading-loose'>
                                            <h3 className="text-[4.6vw] sm:text-[1.5vw]">{item.award}</h3>
                                            <h4 className="text-[4.6vw] sm:text-[1.3vw]">{item.times}</h4>
                                        </div>
                                    )
                                })
                              ]}
                            
                                 
                    
                             </div>
                          
                          </div>
                      </div>
                </div>
              </div>

          </div>
      </div>
  )
}

export default Recognition