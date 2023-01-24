import React from 'react'
import afrilab from '../asset/images/afrilab.png'
import alpha_blue from '../asset/images/alpa_blue.png'
const Partners = ({btn}) => {
  return (
    <div className='h-[260px] md:h-[360px] '>
      <h1 className='font-[600] text-[30px] md:text-[40px] mt-[56px] text-center mb-[50px] md:mb-[84px]'>PARTNERS</h1>
      <div className="flex items-center justify-center">
        <img src={afrilab} alt="afrilab logo" />
        <img src={alpha_blue} alt="alpha_blue logo" />
        </div>
      {btn &&
        <>
          <button className="bg-primary_blue-200 w-[239px] h-[56px] hover:bg-primary_blue-100 text-white duration-500 px-[16px] py-[12px]  rounded text-[24px] font-[600] mx-[560px] mt-[40px]"
          >{btn}</button>
        </>
        }
    </div>
  )
}

export default Partners