import React from 'react'
import Header from './componets/Header'
import Footer from './componets/Footer'
import Slider from './componets/Slider'
import NowShowing from './componets/NowShowing'
import ComingSoon from './componets/ComingSoon'




const App = () => {
  return (
    <div>
      <Header />
      <Slider/>
      <NowShowing/>
      <ComingSoon/>
      <Footer/>

      
      
    </div>
  )
}

export default App