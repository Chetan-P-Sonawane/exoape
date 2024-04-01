
import './App.css'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Playreel from './components/Playreel'
import Spread from './components/Spread'
import LocomotiveScroll from 'locomotive-scroll';

function App() {


  const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className="w-full">
      <Navbar />
      <Landing />
      <Work />
      <Playreel />
      <Spread />
    </div>
  )
}

export default App
