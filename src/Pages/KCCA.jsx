import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Slider from '../Components/Slider'
import Contact from '../Components/Contact'
import Partners from '../Components/Partners'

const KCCA = () => {
  return (
      <>
          <Nav />
          <Header title='KIDS CODE CLUB AFRICA (KCCA)' content='Promoting sustainable human capital development in Africa through technology' btn_txt='Contact Us' link='get-in-touch' about />
          <section className='md:h-[752px] px-[20px] md:px-[80px] py-[56px] bg-white text-black' >
              <h1 className='text-[20px] md:text-[40px] font-[600] leading-10 my-[24px]'>ABOUT KCCA</h1>
              <p className='mb-[16px]'>Kids Code Club Africa (KCCA) is aimed at empowering children with the digital tech and entrepreneurial skills they need to secure their future, build their careers, and contribute to the sustainable growth of the African continent.</p>
              <p>KCCA is a three (3) years of digital tech and entrepreneurial training that provides the development of the following skills for children between the ages of nine (9) to sixteen (16) years:</p>
              <ul className='mt-[24px] ' style={{listStyleType: 'circle'}}>
                 <li className='mt-[8px] font-[400] text-[18px] md:text-[24px] leading-[32px]'> <span className='mr-2'>&#9654;</span>Web Development</li>
                  <li className='mt-[8px] font-[400] text-[18px] md:text-[24px] leading-[32px]'> <span className='mr-2'>&#9654;</span>Game Development</li>
                  <li className='mt-[8px] font-[400] text-[18px] md:text-[24px] leading-[32px]'> <span className='mr-2'>&#9654;</span>Animation</li>
                  <li className='mt-[8px] font-[400] text-[18px] md:text-[24px] leading-[32px]'> <span className='mr-2'>&#9654;</span>Robotics</li>
                  <li className='mt-[8px] font-[400] text-[18px] md:text-[24px] leading-[32px]'> <span className='mr-2'>&#9654;</span>Mobile Application</li>
                  <li className='mt-[8px] font-[400] text-[18px] md:text-[24px] leading-[32px]'> <span className='mr-2'>&#9654;</span>User Interface & User Experience (UI/UX) Design</li>
              </ul>
              <p className='mt-[24px] font-[400] text-24px] leading-[32px]'> <span className='mr-2'>&#9654;</span>The initiative was launched in 2019 to ensure that African children are empowered with the digital skills they need to gain experience working in the African tech ecosystem, turn their creative ideas into technologies that provide solutions, and establish profitable tech careers and tech startups that will promote a sustainable African continent.</p>
          </section>
          <section className='md:h-[800px] bg-primary_blue-100 text-white px-[20px] md:px-[80px] py-[56px]'>
              <h1 className='text-[20px] md:text-[40px] font-[600] leading-10 my-[24px]'>KCCA GOALS</h1>
              <ul className='' style={{ listStyleType: 'circle' }}>
                  <li className='mt-[16px] font-[400] text-[18px] md:text-[24px] leading-[32px]'> <span className='mr-2'>&#9654;</span>To build an entrepreneurial mindset in young Africans to establish tech-based business or startups.</li>
                  <li className='mt-[16px] font-[400] text-[18px] md:text-[24px] leading-[32px]'> <span className='mr-2'>&#9654;</span>To encourage young Africans to develop technologies that promote sustainable development in Africa.</li>
                  <li className='mt-[16px] font-[400] text-[18px] md:text-[24px] leading-[32px]'> <span className='mr-2'>&#9654;</span>To support children to become self-reliant and equip them with skills that enable them to stand out irrespective of their backgrounds (social, economic, or religious)</li>
                  <li className='mt-[16px] font-[400] text-[18px] md:text-[24px] leading-[32px]'> <span className='mr-2'>&#9654;</span>To promote the sustainable development of the African economy by equipping young Africans with skills that alleviate poverty.</li>
                  <li className='mt-[16px] font-[400] text-[18px] md:text-[24px] leading-[32px]'> <span className='mr-2'>&#9654;</span>To promote gender equality by balancing the already existing gender gap in the tech industry.</li>
              </ul>
              <h1 className='mt-[40px] mb-[24px] text-[20px] md:text-[40px] font-[600] leading-10'>KCCA MISSION</h1>
                <ul className='' style={{ listStyleType: 'circle' }}>
                  <li className='mt-[16px] font-[400] text-[18px] md:text-[24px] leading-[32px]'> <span className='mr-2'>&#9654;</span>To provide the African child with digital tech and entrepreneurial skills. </li>
              </ul>
               <h1 className='mt-[40px] mb-[24px] text-[20px] md:text-[40px] font-[600] leading-10'>KCCA VISION</h1>
                <ul className=' mb-[24px]' style={{ listStyleType: 'circle' }}>
                  <li className='mt-[16px] font-[400] text-[18px] md:text-[24px] leading-[32px]'> <span className='mr-2'>&#9654;</span>To raise African children to become digital tech heroes. </li>
              </ul>
              <Link to='#' className='mt-[24px]'>Visit KCCA WEBSITE </Link>
          </section>
          <section className='pb-[30px] md:pb-[80px]'>
             <h1 className='text-center md:text-left md:ml-[70px] font-[600] text-[20px] md:text-[40px] mt-[20px] md:mt-[56px] mb-[26px]'>KCCA TESTIMONIALS</h1>
      <Slider />
      </section> 
      <section className=' pb-[20px] md:pb-[80px]'>
             <h1 className='text-center md:text-left md:ml-[70px] font-[600] text-[20px] md:text-[40px] mb-[26px]'>KCCA GALLERY
</h1>
      <Slider gallery />
      </section> 
      <Partners />
          <Contact />
    </>
  )
}

export default KCCA