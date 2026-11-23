import React from 'react'
import Header from '../componets/Header'
import Footer from '../componets/Footer'
import Slider from '../componets/Slider'
import NowShowing from '../componets/NowShowing'
import ComingSoon from '../componets/ComingSoon'




const Home = () => {
  return (
    <div>
     
      <Slider/>
      <NowShowing/>
      <ComingSoon/>
     

      
      
    </div>
  )
}

export default Home