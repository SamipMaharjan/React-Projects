import React from 'react'

export default function About() {
  return (
    <div className='w-full my-32 '>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
            <h2 className='text-5xl font-bold '>Trusted by developers all around the world</h2>

            <p className='text-3xl py-6 text-gray-500'>Cloud Management: Simplify and optimize your cloud infrastructure with our comprehensive solutions. From deployment to monitoring and cost optimization, we ensure seamless operations for your business in the cloud.</p>
        </div>

        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'> 
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='font-bold text-6xl text-indigo-600 '>100%</p>
                <p className='text-gray-400 mt-2'>Completion</p>
            </div>

            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='font-bold text-6xl text-indigo-600 '>24/7</p>
                <p className='text-gray-400 mt-2'>Delivery</p>
            </div>

            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='font-bold text-6xl text-indigo-600 '>100K</p>
                <p className='text-gray-400 mt-2'>Transactions</p>
            </div>
        </div>
      </div>
    </div>
  )
}
