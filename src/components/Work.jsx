import { motion } from "framer-motion";
import React from "react";

const Work = () => {
  return (
    <div className="w-full relative mx-auto">
      <div className="max-w-screen-xl h-full mx-auto my-16 sm:mb-0 sm:mt-28 px-7 sm:pl-[7vw] sm:pr-0">
        <div className=" featured flex gap-2 sm:hidden ">
          <svg
            className="w-3"
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
          <h4 className="inline-block text-sm">Featured Projects</h4>
        </div>
        <h1 className="text-[16vw] sm:text-[18vw] mt-1  sm:mb-10 font-normal tracking-tight overflow-hidden">
          <motion.span 
            initial={{rotate:10,y:"50%", opacity:0}}
            whileInView={{rotate:0,y:0, opacity:1}}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1, delay: 0.2 }}
            viewport={{once: true}}
          className="inline-block origin-left">Work</motion.span>
        </h1>

        <div className="workp1 w-full min-h-[100vh] sm:h-[66vw] sm:pb-44 flex-none sm:flex sm:flex-row-reverse justify-between">
          <div className="w-full sm:w-[34%]">
            <div className=" featured gap-2 hidden sm:flex pt-2 ">
              <svg
                className="w-3"
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
              <h4 className="inline-block">Featured Projects</h4>
            </div>

            <h3 className=" text-[4.7vw] sm:text-[1.56vw]  leading-[6.5vw] sm:leading-[2vw] pb-8 pt-10">
              Highlights of cases that we passionately built with
              forward-thinking clients and friends over the years.
            </h3>

            <div data-scroll data-scroll-speed="0.2" className="relative group cursor-pointer hidden sm:block sm:mt-[14vw] ">
              <img className="absolute  opacity-100 group-hover:opacity-0"
                src="https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)"
                alt=""
              />
              <video className="opacity-0 group-hover:opacity-100" autoPlay muted loop src="https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b"></video>
              <h3 className="sm:opacity-0 group-hover:opacity-100  duration-300 pt-3 text-[3vw] sm:text-[1vw] text-zinc-400" ><strong className="text-zinc-900"> Rino & Pelle </strong>
                - Effortless chic lifestyle
              </h3>

              
            </div>
            
          </div>

          <div className="  w-full sm:w-[54%]">

            <div data-scroll data-scroll-speed="0.1" className="relative group cursor-pointer">
              <img className="hidden sm:block absolute sm:group-hover:opacity-0 sm:opacity-100"
                src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
                alt=""
              />
              <video autoPlay muted loop className="sm:opacity-0 sm:group-hover:opacity-100" 
                src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
              ></video>
              <h3 className="sm:opacity-0 group-hover:opacity-100 duration-300 pt-3 text-[3vw] sm:text-[1vw] text-zinc-400" ><strong className="text-zinc-900">Columbia Pictures </strong>
               - Celebrating a Century of Cinema

              </h3>
            </div>

            <div data-scroll data-scroll-speed="0.2" className="relative group cursor-pointer sm:hidden pt-12 ">
              <img className="hidden sm:block absolute sm:group-hover:opacity-0 sm:opacity-100"
                src="https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)"
                alt=""
              />
              <video autoPlay muted loop className="sm:opacity-0 sm:group-hover:opacity-100" src="https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b"></video>
              <h3 className="sm:opacity-0 group-hover:opacity-100  duration-300 pt-3 text-[3vw] sm:text-[1vw] text-zinc-400" >
                <strong className="text-zinc-900"> Rino & Pelle </strong>
                - Effortless chic lifestyle
              </h3>
            </div>
            
          </div>
        </div>

        <div className="workp2 w-full flex-none sm:flex sm:ml-2">
          
          <div data-scroll data-scroll-speed="0.25" className="relative group  cursor-pointer w-full sm:w-[19vw] mt-12  sm:mt-[27vw]">
            <img  className="hidden sm:block absolute sm:group-hover:opacity-0 sm:opacity-100" src="https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)" alt="" />
            <video autoPlay muted loop className="sm:opacity-0 sm:group-hover:opacity-100" src="https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076"></video>
            <h3 className="sm:opacity-0 group-hover:opacity-100  duration-300  pt-3 text-[3vw] sm:text-[1vw] text-zinc-400"><strong className="text-zinc-900"> Pixelflakes </strong>
              - Architectural marketing agency
            </h3>
          </div>

          <div data-scroll data-scroll-speed="0.15" className=" relative  group  cursor-pointer w-full sm:w-[36vw] mt-12 sm:ml-[9.4vw]">
            
            <img className="hidden sm:block absolute sm:group-hover:opacity-0 sm:opacity-100 object-cover " src="https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)" alt="" />
            <video autoPlay muted loop className=" w-full sm:opacity-0 sm:group-hover:opacity-100" src="https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15"></video>
            <h3 className=" sm:opacity-0 group-hover:opacity-100  duration-300  pt-3 text-[3vw] sm:text-[1vw] text-zinc-400"><strong className="text-zinc-900"> Aebele Interiors </strong>
              - Luxurious design experience
            </h3>
          </div>

       
        </div>

      </div>
    </div>
  );
};

export default Work;
