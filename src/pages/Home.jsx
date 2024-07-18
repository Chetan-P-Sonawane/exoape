import React from 'react'

import Landing from "../components/HomeComponents/Landing"
import Work from '../components/HomeComponents/Work'
import Playreel from '../components/HomeComponents/Playreel'
import Spread from '../components/HomeComponents/Spread'
import Footer from '../components/Footer'


const Home = () => {
    return (
        <div className="w-full select-none ">
            <Landing />
            <Work />
            <Playreel />
            <Spread />
            <Footer />
        </div>
    )
}

export default Home