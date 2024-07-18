import React, {useEffect, useRef} from 'react'
import data from "../assets/data.json"
import gsap, { Power4 } from 'gsap/all';

const SlideAnimation = () => {

    const imgeffect = useRef(null)
    useEffect(() => {
        var tl = gsap.timeline()

        tl.to(imgeffect.current, {
            duration: 1,
            x: "100%",
            ease: Power4.easeInOut,

        });

    })
   
    

  return (
      <div className="w-full bg-zinc-400 h-[50vw] overflow-hidden">
        {
            data.carousel.map((item,index) => (
                <div ref={imgeffect} className="slideanimation w-full h-[50vw] overflow-hidden" key={index}>
                    <img  className="w-full h-full object-cover object-top" src={item.img} alt="" />
                </div>
            ))
        }
      </div>
  )
}

export default SlideAnimation