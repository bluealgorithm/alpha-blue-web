import React from 'react'
import afrilab from '../asset/images/afrilab.png'
import alpha_blue from '../asset/images/alpa_blue.png'
const Partners = () => {
  return (
    <div className='h-[360px] '>
      <h1 className='font-[600] text-[40px] mt-[56px] text-center mb-[84px]'>PARTNERS</h1>
      <div className="flex items-center justify-center">
        <img src={afrilab} alt="afrilab logo" />
        <img src={alpha_blue} alt="alpha_blue logo" />
      </div>
    </div>
  )
}

export default Partners