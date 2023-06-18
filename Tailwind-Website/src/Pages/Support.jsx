import React from 'react'
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'
import support from '../Images/support.jpg'  

export default function Support() {
  return (
    <div className='w-full h-screen mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute '>
        <img className='w-full h-full object-cover mix-blend-overlay ' src={support} alt="" />
      </div>

      <div className='max-w-[1240px] mx-auto text-white relative'>

        <div className='px-4 py-12'>
            <h2 className='pt-8 text-slate-300 uppercase text-center' >Support</h2>
            <p className='text-5xl font-bold'>Our dedicated support team is here to provide timely assistance, troubleshoot issues, and ensure your satisfaction with our services.</p>
        </div>

        <div>
            <div>
                {/* Sales section  */}
                <div>
                    <PhoneIcon />
                    <h3>Sales</h3>
                    <p>Unlock your business potential with our tailored solutions. Our sales team is ready to help you explore opportunities and achieve your goals.</p>
                </div>

                {/* Contact Us  */}
                <div>
                    <p>Contact Us <ArrowSmRightIcon /></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
