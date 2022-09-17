import React from 'react'
import img from '../asset/images/who_we_are_bnr.png'
const About = () => {
  return (
    <div className='bg-primary_blue-100 md:h-[496px] md:flex items-center justify-around gap-[35px] md:pl-[60px] text-white text-right'>
      <img src={img} alt="" className='w-[600px] h-[400px]' />
      <div className="mr-[85.5px]">
        <h1 className='font-[600] md:text-[40px] mb-[24px]'>WHO ARE WE?</h1>
        <p className='font-[400] text-[24px]' style={{lineHeight:'32px', fontStyle: 'normal' }}>Alpha Blue Foundation (ABF) is a tech-based non-profit organisation founded in 2020. ABF was launched to empower Africans with digital tech skills to ensure they contribute to the technological and socio-economic advancement of Africa and the world. </p>
        <button className='font-[600] text-xl bg-transparent border-2 border-[#b9bab7] rounded mt-[48px] px-4 py-1'>Read More</button>
      </div>
    </div>
  )
}

export default About