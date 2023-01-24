import React from 'react'
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import About from '../Components/About'
import Mission_Vision from '../Components/Mission_Vision'
import Difference from '../Components/Difference'
import Partners from '../Components/Partners'
import Contact from '../Components/Contact'
import vision from '../asset/images/vision.png'
import mision_bnr from '../asset/images/mision_bnr.png'
import kcca from '../asset/images/difference_kcca.png'
import scaleup from '../asset/images/scaleup.png'
import state from '../asset/images/state.png'
import FadeIn from '../Components/Animation/FadeIn'
import FadeLeft from '../Components/Animation/FadeLeft'
import FadeDown from '../Components/Animation/FadeDown'
import FadeUp from '../Components/Animation/FadeUp'

const AboutUs = () => {
  return (
      <div className='overflow-x-hidden'>
          <FadeLeft>
          <Nav />
          </FadeLeft>
          <Header title='WHO WE ARE' content='Promoting sustainable human capital development in Africa through technology
' btn_txt='Contact Us' link='get-in-touch' about />
          <FadeLeft>
              <Mission_Vision content='Alpha Blue Foundation (ABF) is a tech-based non-profit organisation founded in 2020. ABF was launched to empower Africans with digital tech skills to ensure they contribute to the technological and socio-economic advancement of Africa and the world.' img={mision_bnr} second about />
          </FadeLeft>
          <FadeIn>
              <Mission_Vision content='The future of work is technologically driven and enabled, thus, our drive is to prepare them for it. Tech-enabled jobs have fewer people competing for such opportunities, thus, ABF has implemented projects that empower individuals with the skills they need to become critical thinkers, problem solvers, and agents of sustainable development.' img={vision} first />
          </FadeIn>
          <FadeLeft>
          <Difference title='MEET THE TEAM' text1='370 KCCA PARTICIPANTS
' text2='SCALE UP AFRICA PARTICIPANTS' text3='1 STATE REACHED' img1={kcca} img2={scaleup} img3={state} />
          </FadeLeft>
          <FadeIn>
              <Partners btn='Become A Partner' />
          </FadeIn>
          <FadeUp>
              <Contact />
          </FadeUp>
          
    </div>
  )
}

export default AboutUs