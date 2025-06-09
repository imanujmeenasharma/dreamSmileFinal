import React from 'react'
import UseLenis from './Hooks/UseLenis'
import Mainroutes from './Routes/Mainroutes'
import ScrollToTop from './Components/ScrollToTop'

const App = () => {
  UseLenis()
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="font-bold text-center">Server is temporarily down please contact to the developer</h1>
      {/* <ScrollToTop />
      <Mainroutes/> */}
    </div>
  )
}

export default App;
