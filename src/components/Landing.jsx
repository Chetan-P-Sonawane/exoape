import React from 'react'

const Landing = () => {
  return (
    <div className='relative w-full h-[135vh] sm:h-[300vh]'>
       <div className='picture w-full h-full '>
          <img className="w-full h-full object-cover object-top" src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(webp):quality(70)" alt="" />
        </div>
       <div className="w-full absolute top-0">
        <div className=' text max-w-screen-xl h-full mx-auto px-7 sm:px-14 text-white'>
          <div className='para mt-72 sm:mt-[29rem]'>
            <p className='text-[3.4vw] sm:text-[1.56vw] font-semibold '>Global digital design studio partnering with</p>
            <p className='text-[3.4vw] sm:text-[1.56vw] font-semibold '>brands and businesses that create exceptional</p>
            <p className='text-[3.4vw] sm:text-[1.56vw] font-semibold '>experiences where people live, work, and unwind.</p>
          </div>
          <div className="headings mt-[5vw] sm:mt-[5vw] sm:-ml-[1.5vw]">
            <h1 className="text-6xl sm:text-[18vw] tracking-tighter leading-none">Digital</h1>
            <h1 className="text-6xl sm:text-[18vw] tracking-tighter leading-none">Design</h1>
            <h1 className="text-6xl sm:text-[18vw] tracking-tighter leading-none">Experience</h1>
          </div>
          <div className="para2 mt-[10vw] sm:mt-[9vw] sm:w-1/2 text-[3.4vw] sm:text-[1.51vw] font-semibold">
            <p>We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space. Unforgettable journeys start with a click.</p>
            <a className='border-b-[.3px] sm:border-b-[1px] text-sm sm:text-lg border-zinc-100 pb-1 mt-[8vw] sm:mt-24 inline-block' href="/">The Studio</a>
          </div>
        </div>
        </div>
          
    </div>
  )
}

export default Landing