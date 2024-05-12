import React from 'react'

const Footer = () => {
  return (
    <div className="w-full  bg-zinc-900 text-orange-100 overflow-hidden">
      <div data-scroll data-scroll-speed="-0.25" className=" mx-7 sm:mx-28 ">
          
         <div className='pt-[14vw] sm:pt-[6vw] border-b-[1px] border-orange-100 border-opacity-65'>
           {[
             "Our",
             "Story"
           ].map((item, index) => {
             return (
               <p key={index} className="text-[15vw] sm:text-[10vw] tracking-wide leading-none" >{item}</p>
             )
           })}

          <h4 className=" text-[4.6vw] sm:text-[1.5vw] opacity-90 w-[100%] sm:w-[30vw] pt-[10vw] pb-[5vw] sm:pt-[4vw] sm:pb-[5vw]">The story behind Exo Ape is one of exploration, creativity and curiosity.</h4>
           
          <h3 className='sm:hidden text-[5vw] opacity-85 mb-[7vw] '>Our Story</h3>
         </div>
            

        <div className="flex gap-[25vw] sm:gap-[10vw] mt-[7vw] sm:mt-[2vw] pb-[20vw] sm:pb-[6vw] text-[3.6vw] sm:text-[1.15vw]">
              <div>
                {[
                  "Work",
                  "Studio",
                  "News",
                  "Contact"
                ].map((item,index)=>
                 {
                  return(
                    <a 
                      className="flex opacity-85 my-2 relative after:content-[''] after:absolute after:bottom-[1px] after:left-0 after:h-[1px] after:w-[100%] after:scale-x-0 after:origin-left after:duration-300 after:ease-in-out hover:after:scale-x-100 hover:after:duration-300 cursor-pointer after:bg-orange-200"
                       key={index}>{item}</a>
                  )
                  })}
              </div>

              <div>
                {[
                  "Behance",
                  "Dribble",
                  "Twitter",
                  "Instagram"
                ].map((item, index) => 
                {
                  return (
                    <a
                      className="flex opacity-85 my-2 relative after:content-[''] after:absolute after:bottom-[1px] after:left-0 after:h-[1px] after:w-[100%] after:scale-x-0 after:origin-left after:duration-300 after:ease-in-out hover:after:scale-x-100 hover:after:duration-300 cursor-pointer after:bg-orange-200"
                      key={index}>{item}</a>
                  )
                })}
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer