import React from 'react'
import { Link } from 'react-router-dom'
import Contact from '../Components/Contact'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Partners from '../Components/Partners'
import img from '../asset/images/difference_kcca.png'

const OurInitiative = () => {
  return (
    <div>
      <Nav />
      <Header title='OUR INITIATIVES' content='Promoting sustainable human capital development in Africa through technology' btn_txt='Contact Us' link='get-in-touch' />
      <section className='bg-primary_blue-100 h-[960px] px-[128px] pt-[56px] pb-[40px]'>
        <h2 className='mb-[40px] font-[600] text-[20px] md:text-[40px] mx-[20px] md:mx-[287px] text-center'>We promote sustainable human capital development in Africa through our initiatives</h2>
        <div className="flex gap-[64px]">
          <div className='w-5/6 md:w-[560px] md:max-h-[760px] pb-[15px] md:min-h-[704px] mx-auto md:mx-0 mb-[15px] md:mb-0' style={{ background:'#122069', boxShadow: '0px 16px 16px rgba(0, 0, 0, 0.16)',
      borderRadius: '32px 0px', marginTop: '35px'}} >
        <img src={img} alt="Kcca" className='max-h-[552px] rounded-tl-3xl w-full'  />
            <p className="mt-[43px] mb-[40px] font-[600] text-[20px] md:text-[24px] text-white text-center">KIDS CODE CLUB AFRICA (KCCA)</p>
            <p className='text-[16px] md:mx-[54.5px] text-center text-black'>Kids Code Club Africa (KCCA) is aimed at empowering children with the digital tech and entrepreneurial skills they need to secure their future, build their careers, and contribute to the sustainable growth of the African continent... 
              <Link to='/kcca'>
               <button className='h-[64px] font-[400] text-[20px] md:text-[24px] text-white w-full bg-primary_blue-100 hover:bg-primary_blue-200 mt-[36px] rounded'>
                Read More
                </button>
                </Link>
</p>
    </div>
        </div>
      </section>
      <Partners />
      <Contact />
    </div>
  )
}

export default OurInitiative