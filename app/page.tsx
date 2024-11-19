import React from 'react'
import Hero from '@/utils/user/Hero'
import Chatbot from '@/utils/user/Chatbot'
const page = () => {
  return (
    <div>
      <Hero/>
      <div className='absolute bottom-0 right-0 '>
        <Chatbot/>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </div>
    </div>
  )
}

export default page
