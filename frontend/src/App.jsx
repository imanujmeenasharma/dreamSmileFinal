import React from 'react'
import UseLenis from './Hooks/UseLenis'
import Mainroutes from './Routes/Mainroutes'
import ScrollToTop from './Components/ScrollToTop'

const App = () => {
  UseLenis()
  return (
    <div>
      <ScrollToTop />
      <Mainroutes/>
    </div>
  )
}

export default App;
