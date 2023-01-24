import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {useTransition, animated} from 'react-spring'

const Header = ({ home, title, content, btn_txt, link, about, img_height }) => {
  let size = window.innerWidth
    const [isVisible, setIsVisible] = useState(true)
    const transition = useTransition(isVisible, {
    from: { x:-100, y: 600, opacity: 0, width: 10, height: 10 },
    // enter: {x:0, y: 0, opacity: 1 },
      enter: item => async (next) => {
        await next({ y: 0, opacity: 1 })
        await next({x: 0, width: size, height: 621})
    },
    leave: {x: 100, y: 600, opacity: 0 },
    reverse: isVisible,
    delay: 200,
    // config: config.molasses,
      onRest: () => setIsVisible(isVisible),
    // 621
    })
  return transition(
    (styles, item) => item &&
      <animated.div className='md:h-[621px] max-w-screen md:max-w-screen max-h-[50vh] md:max-h-screen head_bg' style={styles}>
        <article className='flex flex-col items-center justify-center w-full h-full text-white text-center'>
          <p className='md:min-w-[658px] text-[20px] md:text-[40px] font-[600] leading-20 md:leading-10'>{title}</p>
          {content &&
              <p className='md:w-[545px] text-[16px] md:text-[24px] font-[400] leading-20 md:leading-10 mt-[18px]'>{content}</p>
          }
          <Link to={`/${link}`}>
        <button className="bg-primary_blue-100 md:w-[200px] md:h-[56px] hover:bg-primary_blue-200 text-white duration-500 px-[16px] py-[12px]  rounded text-[20px] md:text-[24px] font-[600] mt-[40px]"
            >{btn_txt}</button>
            </Link>
      </article>
    </animated.div>
  )
}

export default Header