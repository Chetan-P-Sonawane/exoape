import React from 'react'

import Landing from "./Landing"
import Work from './Work'
import Playreel from './Playreel'
import Spread from './Spread'
import Footer from './Footer'


const Home = () => {
    return (
        <div className="w-full">
            <Landing />
            <Work />
            <Playreel />
            <Spread />
            <Footer />
        </div>
    )
}

export default Home