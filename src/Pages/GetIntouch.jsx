import React from 'react'
import Intouch from '../Components/Intouch'
import Nav from '../Components/Nav'

const GetIntouch = () => {
  return (
    <div className='overflow-x-hidden'>
      <Nav />
          <Intouch title='GET IN TOUCH' text='Promoting sustainable human capital development in Africa through technology
' btn_txt='Get Involved' full form_title='CONTACT US' form_text='Have any inquiries and want to reach out to us? Fill out the form below and drop us a message.' link='get-involved' />
    </div>
  )
}

export default GetIntouch