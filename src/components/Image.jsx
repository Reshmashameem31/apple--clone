import React from 'react'
import {
  FaApple,Facarousel
}from "react-icons/fa"
const Image = () => {
  return (
    <div className='relative ' >
        <img className="w-full h-[600px] md:h-[500px] mx-0  " src="./film.jpg"/>
        <div className='absolute bottom-4 left-10 flex gap-4 items-center'>
        <button className='w-50  bg-white p-1 rounded-full border border-black'>Stream Now</button>
         <p className='text-white text-5xl flex'><FaApple/>tv+</p></div>
      

    </div>
    
  )
}

export default Image