import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center mt-25 pt-8 border-t border-gray-300'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.logo} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>aisjdaksd iasudasodioad oawi oqwijdoqwd oqwid  ioqwoed iwief iiwes iw ooqwed  ioiwed fiowoinfdj wojdd  iiwied iei dodiwii aisjdaksd iasudasodioad oawi oqwijdoqwd oqwid  ioqwoed iwief iiwes iw ooqwed  ioiwed fiowoinfdj wojdd  iiwied iei dodiwii  </p>
          <p>aisjdaksd iasudasodioad oawi oqwijdoqwd oqwid  ioqwoed iwief iiwes iw ooqwed  ioiwed fiowoinfdj wojdd  iiwied iei dodiwii aisjdaksd iasudasodioad oawi oqwijdoqwd oqwid  ioqwoed iwief iiwes iw ooqwed  ioiwed fiowoinfdj wojdd  iiwied iei dodiwii </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>aisjdaksd iasudasodioad oawi oqwijdoqwd oqwid  ioqwoed iwief iiwes iw ooqwed  ioiwed fiowoinfdj wojdd  iiwied iei dodiwii </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>aisjdaksd iasudasodioad oawi oqwijdoqwd oqwid  ioqwoed iwief iiwes iw ooqwed  ioiwed fiowoinfdj wojdd  iiwied iei dodiwii </p>
        </div>


        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>aisjdaksd iasudasodioad oawi oqwijdoqwd oqwid  ioqwoed iwief iiwes iw ooqwed  ioiwed fiowoinfdj wojdd  iiwied iei dodiwii </p>
        </div>


        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>aisjdaksd iasudasodioad oawi oqwijdoqwd oqwid  ioqwoed iwief iiwes iw ooqwed  ioiwed fiowoinfdj wojdd  iiwied iei dodiwii </p>
        </div>
      </div>

      <NewsLetterBox/>
    </div>
  )
}

export default About
