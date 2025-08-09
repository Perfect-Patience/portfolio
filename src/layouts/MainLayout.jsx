import React from 'react'

import NavBar from '../components/NavBar'
import Home from '../pages/Home'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Resume from '../pages/Resume'
import Contact from '../pages/Contact'

function MainLayout() {
  return (
    <div>
        <NavBar/>
        <Home/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Contact/>
           
    </div>
    
  )
}

export default MainLayout