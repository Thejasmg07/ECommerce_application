import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler=(event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p>Lorem ipsum is dummy text displayed here for reference only.</p>
        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border-none pl-3'>
            <input className='w-full border border-gray-400 h-8 rounded-[2px] sm:flex-1 outline-0.1 p-1' type='email' placeholder='Enter your email' required/>
            <button onSubmit={onSubmitHandler} className='bg-black text-white text-xs px-10 py-2 rounded-[2px] ['>SUBSCRIBE</button>
        </form>

    </div>
  )
}

export default NewsLetterBox
