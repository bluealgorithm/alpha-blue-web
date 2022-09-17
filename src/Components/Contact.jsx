import React from 'react'
import contact_brn from '../asset/images/contact_bnr.png'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <>
    <section className='md:h-[1748px] bg-primary_blue-100 overflow-hidden'>
      <div className="contact md:h-[1260px] flex mt-[56px] relative">
        <img src={contact_brn} alt="contact_bnr" className='absolute left-0 top-[56px]' />
        <aside className='w-[670px] h-[1260px] bg-white absolute left-[700px] top-[56px]'>
          <div className="w-[553px] mx-auto text-center">
            <h3 className='mb-[24px] mt-[36px] font-[600] text-[40px]'>CONTACT US</h3>
            <p>Have any inquiries and want to reach out to us? Fill out the form below and drop us a message.</p>
          </div>
          <div className="form mt-[32px] px-[80px]">
            <form action="">
              <div className="form-inp">
                <label htmlFor="fname" className='font-[400] text-[24px]'>First Name</label>
                <input type="text" id='fname' className='w-full h-[56px] border-none mt-[8px] p-[16px]' style={{background: '#FFFFFF', boxShadow:' 4px 4px 8px rgba(0, 0, 0, 0.16)', borderRadius: '8px'}} placeholder='Kelechi' />
              </div>
              <div className="form-inp mt-[24px]">
                <label htmlFor="lname" className='font-[400] text-[24px]'>Last Name</label>
                <input type="text" id='lname' className='w-full h-[56px] border-none mt-[8px] p-[16px]' style={{background: '#FFFFFF', boxShadow:' 4px 4px 8px rgba(0, 0, 0, 0.16)', borderRadius: '8px'}} placeholder='Femmyte' />
              </div>
              <div className="form-inp mt-[24px]">
                <label htmlFor="email" className='font-[400] text-[24px]'>Email Address</label>
                <input type="email" id='email' className='w-full h-[56px] border-none mt-[8px] p-[16px]' style={{background: '#FFFFFF', boxShadow:' 4px 4px 8px rgba(0, 0, 0, 0.16)', borderRadius: '8px'}} placeholder='femmyte@gmail.com' />
              </div>
              <div className="form-inp mt-[24px]">
                <label htmlFor="number" className='font-[400] text-[24px]'>Phone Number</label>
                <input type="tel" id='number' className='w-full h-[56px] border-none mt-[8px] p-[16px]' style={{background: '#FFFFFF', boxShadow:' 4px 4px 8px rgba(0, 0, 0, 0.16)', borderRadius: '8px'}} placeholder='08101234567' />
              </div>
               <div className="form-inp mt-[24px]">
                <textarea name="message" id="message" className='w-full mt-[16px] md:h-[267px] pl-[24px] pt-[32px]' style={{ background: '#FFFFFF', boxShadow: ' 4px 4px 8px rgba(0, 0, 0, 0.16)', borderRadius: '8px' }} placeholder='Your Message'></textarea>
              </div>
              <button className='h-[64px] font-[400] text-[24px] text-white w-full bg-primary_blue-100 mt-[36px] rounded'>
                Submit your message
              </button>
            </form>
            <div className="form-inp mt-[24px] w-full text-center">
              <p className='text-[16px]' style={{lineHeight:'24px'}}>Follow us on social media to keep track of Alpha Blue Foundation's latest activities.</p>
              </div>
          </div>
        </aside>
      </div>
      <footer className='pt-[56px] px-[80px] text-white'>
        <div className="flex justify-between">
          <div className="info max-w-[455px] mt-[56px]">
            <div className="mb-[24px]">
              <h4 className='mb-[8px] font-[600] text-[24px]'>Address</h4>
              <p className='font-[400] text-[16px]' style={{lineHeight:'24px'}}>Block 2, Suit 1, 2, 3, 1st Floor Kalwa Plaza,  Zaramaganda Roundabout, Jos, Plateau State, Nigeria.</p>
            </div>
            <div className="mb-[24px]">
              <h4 className='mb-[8px] font-[600] text-[24px]'>Email</h4>
              <p className='font-[400] text-[16px]' style={{lineHeight:'24px'}}>alphabluefoundationjos@gmail.com</p>
            </div>
            <div className="mb-[24px]">
              <h4 className='mb-[8px] font-[600] text-[24px]'>Phone Number</h4>
              <p className='font-[400] text-[16px]' style={{lineHeight:'24px'}}>(+234) 811 519 0900</p>
            </div>
          </div>
          <div className="link mt-[56px]">
            <h4 className='mb-[8px] font-[600] text-[24px]'>Links</h4>
            <ul>
              <li className='font-[400] text-[16px] mb-[8px]' style={{lineHeight:'24px'}}>
                <Link to='#'>About Us</Link>
              </li>
              <li className='font-[400] text-[16px] mb-[8px]' style={{lineHeight:'24px'}}>
                <Link to='#'>Get Involved</Link>
              </li>
              <li className='font-[400] text-[16px] mb-[8px]' style={{lineHeight:'24px'}}>
                <Link to='#'>Contact Us</Link>
              </li>
              <li className='font-[400] text-[16px] mb-[8px]' style={{lineHeight:'24px'}}>
                <Link to='#'>Donate</Link>
              </li>
            </ul>
          </div>
        </div>
       
      </footer>
    </section>
     <div className="copy h-[80px] bg-primary_blue-100 px-[80px] border-t border-white text-center text-white">
          <p className='font-[400] text-[16px] mt-[16px]'>Copyright ©2022 All rights reserved | Alpha Blue Foundation  Powered by Blue Algorithm Technologies Ltd</p>
        </div>
    </>
  )
}

export default Contact