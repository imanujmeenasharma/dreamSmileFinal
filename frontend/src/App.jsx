import React from 'react'
import UseLenis from './Hooks/UseLenis'
import Mainroutes from './Routes/Mainroutes'
import ScrollToTop from './Components/ScrollToTop'

const App = () => {
  UseLenis()
  return (
    <div>
      <h1>Server is temporarily down please contact to the developer</h1>
      {/* <ScrollToTop />
      <Mainroutes/> */}
    </div>
  )
}

export default App;
