import React, {useState} from 'react'
import img from '../asset/images/who_we_are_bnr.png'
import {useTransition, animated} from 'react-spring'
const About = () => {
    const [isVisible, setIsVisible] = useState(true)
    const transition = useTransition(isVisible, {
    from: { x:-100, y: -100, opacity: 0 },
    enter: {x:0, y: 0, opacity: 1 },
    leave: { opacity: 0 },
    reverse: isVisible,
    delay: 200,
    // config: config.molasses,
    onRest: () => setIsVisible(isVisible),
    })
  return transition(
    (styles, item) => item && 
    <animated.div style={styles} className='bg-primary_blue-100 md:h-[496px] block md:flex md:items-center md:justify-around md:gap-[35px] md:pl-[60px] py-[10px] md:py-0 text-white text-center md:text-right'>
      <img src={img} alt="" className='w-5/6 mx-auto md:mx-0 my-[20px] md:mb-0 md:w-[600px] h-auto md:h-[400px]' />
      <div className="md:mr-[85.5px] w-5/6 mx-auto md:mx-0 md:w-full">
        <h1 className='font-[600] md:text-[40px] mb-[24px]'>WHO ARE WE?</h1>
        <p className='font-[400] text-[18px] md:text-[24px]' style={{lineHeight:'32px', fontStyle: 'normal' }}>Alpha Blue Foundation (ABF) is a tech-based non-profit organisation founded in 2020. ABF was launched to empower Africans with digital tech skills to ensure they contribute to the technological and socio-economic advancement of Africa and the world. </p>
        <button className='font-[600] text-xl bg-transparent border-2 border-[#b9bab7] rounded mb-[18px] mt-[18px] md:mb-0 md:mt-[48px] px-2 md:px-4 py-1'>Read More</button>
      </div>
    </animated.div>
  )
}

export default About