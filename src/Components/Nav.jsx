import React, {useState} from 'react'
import logo from '../asset/images/logo.png'
import { Link } from 'react-router-dom';
import { GrMenu, } from 'react-icons/gr';
import facebook from '../asset/images/facebook.png'
import linkedin from '../asset/images/linkedin.png'
import twitter from '../asset/images/twitter.png'
const Nav = () => {
   const [menu, setMenu] = useState(false)
  const handleMenu = () => {
    if (menu) {
      setMenu(false)
    } else {
      setMenu(true)
    }
  }
  return (
    <nav>
          <div className="top flex justify-end h-[56px] items-center font-primary bg-primary_blue-100 pr-[60px]">
                <img src={facebook} alt="facebook_icon" className='h-[24px] w-[24px]' />
                <img src={twitter} alt="twitter_icon" className='mx-[16px] h-[24px] w-[24px]' />
                <img src={linkedin} alt="linkedin_icon" className='h-[24px] w-[24px]' />
          </div> 
      <div className="py-3 md:px-8 bg-white max-h-[104px] w-full mb-1 md:flex md:items-center md:justify-between text-2xl">
        <div className="flex justify-between items-center">
          <Link className="text-xl hover:text-text_primary duration-500" to="/">
    <img
      src={logo}
      className="ml-3 h-[44.16px]"
      alt="auth wiki logo"
      />
      </Link>
    <span className="text-3xl cursor-pointer mx-3 md:hidden block">
        <GrMenu onClick={handleMenu} />
    </span>
  </div>
        <ul className={`${menu ? 'top-[160px] opacity-100 pb-6 z-10' : 'hidden'} md:justify-between md:flex md:items-center md:static absolute md:bg-transparent bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:mr-20 font-normal text-xl`}>
      <li className="md:mr-[32px] my-3 md:my-0">
      <Link className="text-xl hover:text-text_primary duration-500 " to="/">Home</Link>
        
          </li>
      <li className="md:mr-[32px] my-3 md:my-0">
              <Link className="text-xl hover:text-text_primary duration-500" to="/dashboard">About Us</Link>
    
      </li>
      <li className="md:mr-[32px] my-3 md:my-0">
              <Link className="text-xl hover:text-text_primary duration-500" to="/about">Our Invite</Link>
          </li>
          <li className="md:mr-[32px] my-3 md:my-0">
              <Link className="text-xl hover:text-text_primary duration-500" to="/about">Magazine</Link>
          </li>
          <li className="md:mr-[32px] my-3 md:my-0">
              <Link className="text-xl hover:text-text_primary duration-500" to="/about">Award</Link>
          </li>
          <li className="md:mr-[72px] my-3 md:my-0">
              <Link className="text-xl hover:text-text_primary duration-500" to="/about">Get Involved</Link>
      </li>
              <Link className="text-xl hover:text-text_primary duration-500" to="/signup">
            
      <button
        className="bg-primary_blue-200 w-[200px] h-[56px] hover:bg-primary_blue-100 text-white duration-500 px-[16px] py-[12px]  rounded"
        >
        Contact Us
              </button>
          </Link>
        </ul>
          </div>
    </nav>
  )
}

export default Nav