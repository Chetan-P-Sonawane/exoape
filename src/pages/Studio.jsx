import React from 'react'
import StudioLanding from '../components/StudioComponents/StudioLanding'
import Footer from '../components/Footer'
import Partners from '../components/StudioComponents/Partners'
import HowWeWork from '../components/StudioComponents/HowWeWork'
import WeBelieve from '../components/StudioComponents/WeBelieve'
import TheApes from '../components/StudioComponents/TheApes'
import Recognition from '../components/StudioComponents/Recognition'

const Studio = () => {
  return (
    <div className='w-full select-none'>
        <StudioLanding />
         <Partners />
         <HowWeWork />
         <WeBelieve />
         <TheApes />
         <Recognition />
        <Footer />
    </div>
  )
}

export default Studio