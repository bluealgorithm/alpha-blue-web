import React, {useState, useRef} from 'react'
import contact_brn from '../asset/images/contact_bnr.png'
import { Link } from 'react-router-dom'
import FadeIn from './Animation/FadeIn'
import FadeLeft from './Animation/FadeLeft'
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com'
const isValidEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
};
const Contact = () => {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();
  const serviceId = 'service_gcgjwa8'
  const tempalteId = 'template_5kx1orj'
  const public_key = 'v4ZHCDxAsv0CA_FVw'
  const sendEmail = (e) => {
    e.preventDefault()
    if (fname && lname && email && number && message) {
      const user_name = `${fname} ${lname}`
      setEmail(isValidEmail(email))
      // const templateParams = {
      //           user_name,
      //           user_email: email,
      //           message
      //       };
       // TODO - send mail
         emailjs.sendForm(serviceId, tempalteId, form.current, public_key)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     
        setFName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
    } else {
        alert('Please fill in all fields.');
    }
}
  return (
    <>
    <section className='h-auto md:h-[1748px] bg-primary_blue-100 overflow-hidden'>
        <div className="contact h-full md:h-[1260px] block md:flex mt-[56px] md:relative">
          <FadeIn delay={1000}>
            <img src={contact_brn} alt="contact_bnr" className='hidden md:block md:absolute left-0 top-[56px]' />
          </FadeIn>
          <FadeLeft delay={1200}>
        <aside className='w-5/6 mx-auto md:mx-0 md:w-[670px] md:h-[1260px] bg-white md:absolute md:left-[700px] md:top-[56px] py-[20px]'>
          <div className="md:w-[553px] w-full text-center">
            <h3 className='mb-[24px] mt-[36px] font-[600] text-[20px] md:text-[40px]'>CONTACT US</h3>
            <p className='mx-[10px] md:mx-0'>Have any inquiries and want to reach out to us? Fill out the form below and drop us a message.</p>
          </div>
          <div className="form mt-[32px] px-[20px] md:px-[80px]">
            <form  ref={form} onSubmit={sendEmail}>
              <div className="form-inp">
                <label htmlFor="fname" className='font-[400] text-[20px] md:text-[24px]'>First Name</label>
                <input type="text" id='fname' className='w-full h-[56px] border-none mt-[8px] p-[16px]' style={{background: '#FFFFFF', boxShadow:' 4px 4px 8px rgba(0, 0, 0, 0.16)', borderRadius: '8px'}} name='user_first_name' placeholder='Kelechi' value={fname} onChange={e => setFName(e.target.value)} />
              </div>
              <div className="form-inp mt-[24px]">
                <label htmlFor="lname" className='font-[400] text-[20px] md:text-[24px]'>Last Name</label>
                <input type="text" id='lname' className='w-full h-[56px] border-none mt-[8px] p-[16px]' style={{background: '#FFFFFF', boxShadow:' 4px 4px 8px rgba(0, 0, 0, 0.16)', borderRadius: '8px'}} placeholder='Femmyte' name='user_last_name' value={lname} onChange={e => setLName(e.target.value)} />
              </div>
              <div className="form-inp mt-[24px]">
                <label htmlFor="email" className='font-[400] text-[20px] md:text-[24px]'>Email Address</label>
                <input type="email" id='email' className='w-full h-[56px] border-none mt-[8px] p-[16px]' style={{background: '#FFFFFF', boxShadow:' 4px 4px 8px rgba(0, 0, 0, 0.16)', borderRadius: '8px'}} placeholder='femmyte@gmail.com' value={email} name='user_email' onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="form-inp mt-[24px]">
                <label htmlFor="number" className='font-[400] text-[20px] md:text-[24px]'>Phone Number</label>
                <input type="tel" id='number' className='w-full h-[56px] border-none mt-[8px] p-[16px]' style={{background: '#FFFFFF', boxShadow:' 4px 4px 8px rgba(0, 0, 0, 0.16)', borderRadius: '8px'}} placeholder='08101234567' name='user_number' value={number} onChange={e => setNumber(e.target.value)} />
              </div>
               <div className="form-inp mt-[24px]">
                <textarea name="message" id="message" className='w-full mt-[16px] h-[150px] md:h-[267px] pl-[24px] pt-[32px]' style={{ background: '#FFFFFF', boxShadow: ' 4px 4px 8px rgba(0, 0, 0, 0.16)', borderRadius: '8px' }} placeholder='Your Message' value={message} onChange={e => setMessage(e.target.value)}></textarea>
              </div>
              <button className='h-[64px] font-[400] text-[20px] md:text-[24px] text-white w-full bg-primary_blue-100 hover:bg-primary_blue-200 mt-[36px] rounded'>
                Submit your message
                  </button>
                  <span className={emailSent ? 'block' : 'hidden'}>Thank you for your message, we will be in touch in no time!</span>
            </form>
            <div className="form-inp  mt-[24px] w-full text-center">
              <p className='text-[16px]' style={{lineHeight:'24px'}}>Follow us on social media to keep track of Alpha Blue Foundation's latest activities.</p>
              </div>
          </div>
            </aside>
          </FadeLeft>
          
        </div>
      <footer className='pt-[56px] px-[20px] md:px-[80px] text-white text-center md:text-left'>
        <div className="block md:flex md:justify-between">
          <div className="info md:max-w-[455px] mb-[15px] md:mb-0 mt-[56px]">
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
                <Link to='/about-us'>About Us</Link>
              </li>
              <li className='font-[400] text-[16px] mb-[8px]' style={{lineHeight:'24px'}}>
                <Link to='/get-involved'>Get Involved</Link>
              </li>
              <li className='font-[400] text-[16px] mb-[8px]' style={{lineHeight:'24px'}}>
                <Link to='/get-in-touch'>Contact Us</Link>
              </li>
              <li className='font-[400] text-[16px] mb-[8px]' style={{lineHeight:'24px'}}>
                <Link to='#'>Donate</Link>
              </li>
            </ul>
          </div>
        </div>
       
      </footer>
      </section>
      <div className='w-full' style={{border: "0.2px solid #7D7B7B"}}></div>
     <div className="copy md:h-[80px] bg-primary_blue-100 px-[15px] md:px-[80px] py-[10px] border-white text-center text-white">
          <p className='font-[400] text-[16px] mt-[16px]'>Copyright ©2022 All rights reserved | Alpha Blue Foundation  Powered by Blue Algorithm Technologies Ltd</p>
        </div>
    </>
  )
}

export default Contact