import React from 'react'
import UseLenis from './Hooks/UseLenis'
import Mainroutes from './Routes/Mainroutes'
import ScrollToTop from './Components/ScrollToTop'

const App = () => {
  UseLenis()
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ScrollToTop />
      <Mainroutes/>
    </div>
  )
}

export default App;
