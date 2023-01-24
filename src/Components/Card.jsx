import React from 'react'

const Card = ({content, img, second}) => {
  return (
    <div className='w-5/6 md:w-[400px] md:max-h-[704px] pb-[15px] md:min-h-[704px] mx-auto md:mx-0 mb-[15px] md:mb-0' style={{ background:'#122069', boxShadow: '0px 16px 16px rgba(0, 0, 0, 0.16)',
      borderRadius: '32px 0px', marginTop: `${second ? '35px' : '0px'}`}} >
        <img src={img} alt="Kcca" className='max-h-[552px] rounded-tl-3xl w-full'  />
        <p className="mt-[32px] font-[600] text-[20px] md:text-[24px] text-white text-center">{ content }</p>
    </div>
  )
}

export default Card