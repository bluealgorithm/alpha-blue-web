import React, {useState, useEffect} from 'react'

const Mission_Vision = ({ title, content, img, first, second, about }) => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  

  return (
    <div className={`${second != about ? 'pt-[20px] md:pt-0' : 'pt-[50px]'} ${first && 'pt-0'}`}>
      <div className={`${second ? 'flex-col-reverse flex md:flex-row-reverse' : 'flex-col-reverse flex md:flex-row' } md:flex md:items-center md:justify-around md:gap-[24px] my-0 w-5/6 mx-auto md:mx-0 md:w-full`}>
        <article className={`${second ? 'md:mr-[81px] text-center md:text-right' : 'text-center md:text-left md:ml-[80px]'}`}>
          <h3 className='font-[600] text-[30px] md:text-[40px] mb-[24px]'>{title}</h3>
          <p className='font-[400] text-[24px] mb-[20px] md:mb-0'>{content }</p>
        </article>
        <img src={img} alt="" className={`${second ? 'md:ml-[70px]': 'md:mr-[72px]'} max-w-6/7 mx-auto md:mx-0 md:max-w-[600px]`} />
      </div>
    </div>
  )
}

export default Mission_Vision