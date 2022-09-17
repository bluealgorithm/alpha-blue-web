import React from 'react'

const Header = () => {
  return (
    <div className='h-screen head_bg pt-[224px] pl-[158px]'>
      <article className=' w-[658px] text-white'>
        <p className='mb-[58px] font-[600] text-[40px]' style={{lineHeight:'48px'}}>Promoting sustainable human capital development in Africa through technology</p>
        <button className="bg-primary_blue-200 w-[200px] h-[56px] hover:bg-primary_blue-100 text-white duration-500 px-[16px] py-[12px]  rounded text-[24px] font-[600]"
        >Get Involved</button>
      </article>
    </div>
  )
}

export default Header