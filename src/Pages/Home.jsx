import React from 'react'
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import About from '../Components/About'
import Mission_Vision from '../Components/Mission_Vision'
import Difference from '../Components/Difference'
import Partners from '../Components/Partners'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <div>
          <Nav />
          <Header />
          <About />
          <Mission_Vision />
          <Difference />
          <Partners />
          <Contact />
    </div>
  )
}

export default Home