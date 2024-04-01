import React from 'react'

const Playreel = () => {
  return (
    <div className="playreel w-full h-screen overflow-hidden relative bg-zinc-900 text-white">
       <div className="w-32 sm:w-72 aspect-auto absolute top-[42%] sm:top-[37%] left-1/2 -translate-x-1/2 -translate-y-1/2y">
        <video className='rounded' autoPlay muted loop src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"></video>
       </div>

      <div className="overlay w-full h-full flex flex-col justify-between py-20">
        <div className="w-full flex justify-center items-center gap-2">
                  <svg className="w-2" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                  <h3 className="text-[3.4vw] sm:text-[1.2vw]">Work in motion</h3>
        </div>
          <h1 className="z-[1] w-full text-[14vw] sm:text-[10vw] font-semibold sm:font-normal flex justify-center gap-[38vw]">
            <div>Play</div>
            <div>Reel</div>
          </h1>
        <p className="text-[3.8vw] sm:text-[1.2vw] text-center px-[14vw] sm:px-[38vw] ">Our work is best experienced in motion. Don’t forget to put on your headphones.</p>
         
      </div>
    </div>
  )
}

export default Playreel