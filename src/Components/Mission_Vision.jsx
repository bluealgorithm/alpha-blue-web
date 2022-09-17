import React from 'react'
import vision from '../asset/images/vision.png'
import mision_bnr from '../asset/images/mision_bnr.png'
const Mission_Vision = () => {
  return (
    <div className='md:h-[930px]'>
      <div className="mision mt-[50px] md:flex items-center justify-around gap-[24px]">
        <article className='ml-[80px]'>
          <h3 className='font-[600] text-[40px] mb-[24px]'>OUR MISSION</h3>
          <p className='font-[400] text-[24px]'>Our mission is to empower Africans with digital tech skills that will promote a technologically thriving African society.</p>
        </article>
          <img src={mision_bnr} alt="" className='mr-[72px] max-w-[600px]' />
      </div>
      <div className="mision md:flex items-center justify-around gap-[24px]">
          <img src={vision} alt="" className='ml-[70px] max-w-[600px]' />
        <article className='mr-[81px] text-right'>
          <h3 className='font-[600] text-[40px] mb-[24px]'>OUR VISION</h3>
          <p className='font-[400] text-[24px]'>We envision an African society that is technologically developed, where poverty is at its minimal level and sustainable development, financial freedom, and economic prosperity.</p>
        </article>
      </div>
    </div>
  )
}

export default Mission_Vision