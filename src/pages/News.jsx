import React from 'react'
import data from "../assets/data.json";
import Footer from "../components/Footer";
// import SlideAnimation from './SlideAnimation';
import Carousel from '../components/Carousel';

const News = () => {
  return (
    <div className='relative w-full h-min-[135vh] sm:h-min-[300vh] select-none'>
        <Carousel />
        {/* <SlideAnimation /> */}
      <div className='text max-w-screen-xl h-full mx-auto px-7 sm:px-14 text-black'>
         
        {
          data.news.map((item, index) => (
           <NewsComponent title={item.title} subtitle={item.subtitle}
            videoSrc={item.video} imgSrc={item.img} key={index}
            />
          ))
        }

      </div>

         <Footer />
    
    </div>
  )
}



const NewsComponent = ({index,title,subtitle,videoSrc,imgSrc}) => {
  return (
    
    <div key={index} className='pt-[10vw] border-b-2 flex items-center sm:justify-between justify-between '>
        <div>
          <h3 className="w-[30%] text-[2.8vw] sm:text-[1.2vw] pl-[5vw] sm:pl-[2vw]">{title}</h3>
        </div>
     
       <div className='w-[60%] sm:w-[40%]  pb-[10vw] sm:mr-[15vw]'>
          {
            videoSrc === ""? null :
              <video autoPlay muted loop
                className=''
                src={videoSrc} type="video/mp4">
              </video>
          }
         
          <img src={imgSrc} alt=""  />

          <h2 className=' text-[3.5vw] sm:text-[3.5vw] pt-[4vw] leading-snug'>
            {subtitle}
          </h2> 
        </div>
      
    </div>
    

  )
}





export default News

