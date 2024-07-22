import React from 'react'
import StudioLanding from '../components/StudioComponents/StudioLanding'
import Footer from '../components/Footer'
import Partners from '../components/StudioComponents/Partners'

const Studio = () => {
  return (
    <div className='w-full select-none'>
        <StudioLanding />
         <Partners />
        <Footer />
    </div>
  )
}

export default Studio