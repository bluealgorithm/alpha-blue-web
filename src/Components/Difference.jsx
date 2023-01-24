import React from 'react'
import Card from './Card'
import FadeDown from './Animation/FadeDown'
import FadeUp from './Animation/FadeUp'
const Difference = ({ ...props }) => {
  const { title, text1, text2, text3, img1, img2, img3 } = props
  return (
    <>
    <div className='md:h-[923px] bg-white '>
        <h1 className='font-[600] text-[20px] md:text-[40px] text-center mt-[20px] md:mt-[56px] mb-[30px] md:mb-[40px]'>{title}</h1>
        <section className='md:flex gap-[16px] mx-[20px] md:mx-[80px]'>
          <FadeUp>
            <Card content={text1} img={img1} />
          </FadeUp>
          <FadeUp>
            <Card content={text2} img={img2} second />
          </FadeUp>
          <FadeUp>
            <Card content={text3} img={img3} />
            </FadeUp>
      {/* <div className='md:w-[416px] min-h-[704px] card' style={{ background:'#122069', boxShadow: '0px 16px 16px rgba(0, 0, 0, 0.16)',borderRadius: '32px 0px', marginTop: '35px'}}>
        <img src={scaleup} alt="Kcca" className="max-h-[552px]" style={{borderTopLeftRadius: '32px'}} />
        <p className="mt-[32px] font-[600] text-[24px] text-white text-center"></p>
      </div>
      <div className='md:w-[416px] max-h-[704px] card' style={{ background:'#122069', boxShadow: '0px 16px 16px rgba(0, 0, 0, 0.16)', borderRadius: '32px 0px'}}>
        <img src={state} alt="state" className="max-h-[552px]" style={{borderTopLeftRadius: '32px'}} />
        <p className="mt-[32px] font-[600] text-[24px] text-white text-center"></p>
        </div> */}
      </section>
      </div>
      </>
  )
}

export default Difference