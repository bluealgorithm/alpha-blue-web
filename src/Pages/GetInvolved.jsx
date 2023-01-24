import React, {useState, useEffect} from 'react'
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
const GetInvolved = () => {
  
// const [offsetY, setOffsetY] = useState(0)
// const handleScroll = () => setOffsetY(window.pageYOffset)

//     useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//         window.removeEventListener('scroll', handleScroll)
// }
// }, [])

  return (
          <div className='overflow-x-hidden'>
            <FadeLeft>
              <Nav />
            </FadeLeft>
          <Header title='GET INVOLVED' content='Promoting sustainable human capital development in Africa through technology
' btn_txt='Contact Us' link='get-in-touch' />
          <FadeIn>
              <Difference title='HOW TO GET INVOLVED' text1='Become a partner' text2='Become a volunteer' text3='Donate' img1={kcca} img2={scaleup} img3={state} />
          </FadeIn>
          <FadeLeft>
              <Contact />
              </FadeLeft>
    </div>
      )
}

export default GetInvolved