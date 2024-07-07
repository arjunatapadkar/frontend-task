import React from 'react'
import Characteristics from './components/Characteristics'
import ExitFastSection from './components/ExitFastSection'
import Footer from './components/Footer'
import ForwardTogether from './components/ForwardTogether'
import GetInTouch from './components/GetInTouch'
import GrowthAndWhy from './components/GrowthAndWhy'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import vector1 from './assets/vector1.svg'
import vector from './assets/vector.svg'


const App = () => {
  return (
    <>

      <div className='relative text-white overflow-hidden  bg-transparent w-screen h-full  flex flex-col justify-between mx-auto'>
          <Navbar />
          <Hero />
          <Characteristics />
          <ForwardTogether />
          <GrowthAndWhy />
          <ExitFastSection />
          <GetInTouch />
          <Footer />
          <img src={vector1}  className='overflow-hidden absolute bg-transparent w-[800px] h-[1300px] z-5 right-[-57px] top-[-249px] top-0  '/>
        
          <img src={vector}  className='overflow-hidden absolute  bg-transparent right-0 top-0 '/>
      </div>

    </>
  )
}

export default App