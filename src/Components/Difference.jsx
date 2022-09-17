import React from 'react'
import kcca from '../asset/images/difference_kcca.png'
import scaleup from '../asset/images/scaleup.png'
import state from '../asset/images/state.png'

const Difference = () => {
  return (
    <>
    <div className='md:h-[923px] bg-white '>
      <h1 className='font-[600] text-[40px] text-center mt-[56px] mb-[40px]'>WE ARE MAKING A DIFFERENCE</h1>
      <section className='md:flex gap-[16px] mx-[80px]'>
      <div className='md:w-[416px] max-h-[704px] card' style={{ background:'#122069', boxShadow: '0px 16px 16px rgba(0, 0, 0, 0.16)',
      borderRadius: '32px 0px'}}>
            <img src={kcca} alt="Kcca" className="max-h-[552px]" style={{borderTopLeftRadius: '32px'}}/>
            <p className="mt-[32px] font-[600] text-[24px] text-white text-center">370 KCCA PARTICIPANTS</p>
          </div>
      <div className='md:w-[416px] min-h-[704px] card' style={{ background:'#122069', boxShadow: '0px 16px 16px rgba(0, 0, 0, 0.16)',borderRadius: '32px 0px', marginTop: '35px'}}>
        <img src={scaleup} alt="Kcca" className="max-h-[552px]" style={{borderTopLeftRadius: '32px'}} />
        <p className="mt-[32px] font-[600] text-[24px] text-white text-center">SCALE UP AFRICA PARTICIPANTS</p>
      </div>
      <div className='md:w-[416px] max-h-[704px] card' style={{ background:'#122069', boxShadow: '0px 16px 16px rgba(0, 0, 0, 0.16)', borderRadius: '32px 0px'}}>
        <img src={state} alt="state" className="max-h-[552px]" style={{borderTopLeftRadius: '32px'}} />
        <p className="mt-[32px] font-[600] text-[24px] text-white text-center">1 STATE REACHED</p>
        </div>
      </section>
      </div>
      </>
  )
}

export default Difference