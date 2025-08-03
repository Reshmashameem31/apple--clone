import React from 'react'
import { FaApple } from "react-icons/fa"

const Section = () => {
  return (
    <section className="px-0 bg-white py-2 md:px-4 ">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-2">

        {/* Image 1 */}
        <div className="relative ">
          <img src="./ipad.jpeg" alt="MacBook Air" className="w-full h-[500px] " />
          <div className="absolute text-center top-20 left-4 md:left-40  text-white">
            <h2 className="text-3xl   md:text-4xl font-bold mt-2 ">iPad Pro</h2>
            <p className="text-xl md:text-xl font-normal mt-2 ">Unbelievably thin. Incredibly powerful</p>
            <div className='flex text-white  gap-1 mt-2'>
              <button className='w-auto bg-blue-600  ml-10 rounded-full p-2  hover:bg-blue-700'>Learn more</button>
              <button className='w-20 h-10 rounded-full bg-white ml-2 text-blue-500 border border-blue-600  p-2 hover:bg-blue-600 hover:text-white transition'>Buy</button>
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative">
          <img src="https://www.apple.com/v/home/cf/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail__b9etp10v9tn6_large.jpg" alt="Mac Studio" className=" w-full h-[500px]" />
          <div className="absolute top-20 left-4 md:left-60 text-black text-center">
            <h2 className="text-3xl  md:text-4xl font-bold ml-20 mt-4 md:ml-10 flex"><FaApple />Watch</h2>
            <p className="text-xl md:text-xl mt-2 ">Series 10</p>
            <p className='text-xl md:text-xl mt-2'>Thinstan Classic</p>
            <div className='flex text-white gap-1 mt-2'>
              <button className='w-auto bg-blue-600 ml-10 rounded-full p-2 hover:bg-blue-700'>Learn more</button>
              <button className='w-20 h-10 bg-white ml-5 text-blue-500 border border-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white transition'>Buy</button>
            </div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative">
          <img src="./students.jpeg" alt="iPad Pro" className="w-full h-[500px]" />
          <div className="absolute left-40 top-80 text-center  md:left-80">
            <button className='w-auto rounded-full bg-white p-1 text-black'>Learn more</button>
          </div>
        </div> 

        {/* Image 4 */}
        <div className="relative">
          <img src="./airpods.jpeg" alt="iMac" className="w-full h-[500px]" />
          <div className="absolute top-60 text-center left-4 md:left-40 text-white">
            <h2 className="text-3xl ml-5 md:text-4xl font-bold md:ml-20">Airpods4</h2>
            <p className="text-xl ml-5 md:text-xl md:ml-20 mt-2">Iconic. Newsupersonic.</p>
            <p className='text-xl ml-5 md:text-xl md:ml-20 mt-2'>Available with new active cancellation.</p>
            <div className='flex text-white  gap-0 '>
              <button className='w-auto bg-blue-600 ml-20 rounded-full md:ml-40 p-2 hover:bg-blue-700 mt-2'>Learn more</button>
              <button className='w-20 h-10 bg-white text-blue-500 border md: ml-5 border-blue-600 mt-2 rounded-full p-2 hover:bg-blue-600 hover:text-white transition'>Buy</button>
            </div>
          </div>
        </div>

        {/* Image 5 */}
        <div className="relative">
          <img src="./macbook.jpeg" alt="MacBook Pro" className="w-full h-[500px]" />
          <div className="absolute top-20  left-20 md:left-40 text-white">
            <h2 className="text-3xl md:text-4xl font-bold ml-5 md:ml-20 mt-2">MacBook Pro</h2>
            <p className="text-xl md:text-xl ml-10 md:ml-20 mt-2">A work of smart.</p>
            <div className='flex text-white gap-2 ml-5 md:ml-20'>
              <button className='w-auto bg-blue-600 rounded-full p-2 hover:bg-blue-700 mt-2'>Learn more</button>
              <button className='w-20 h-10 bg-white text-blue-500 mt-2 border border-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white transition'>Buy</button>
            </div>
          </div>
          <p className="absolute top-80 left-20 md:left-60 text-sm font-medium">
            <span className="text-blue-600">Built for </span>
            <span className="text-pink-500">Apple </span>
            <span className="text-orange-600">Intelligence.</span>
          </p>
        </div>

        {/* Image 6 */}
        <div className="relative">
          <img src="https://www.apple.com/v/home/cf/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_small.jpg" alt="Mac Mini" className="w-full h-[500px]" />
          <div className="absolute top-20 left-20 md:left-40 text-black">
            <h2 className="text-3xl md:text-4xl font-bold flex mt-2 md:ml-20"><FaApple />Trade in</h2>
            <p className="text-xl md:text-xl mt-2 text-gray-700 md:ml-10">Upgrade and save. It's that easy</p>
            <button className='w-auto md:ml-20 bg-blue-600 rounded-full p-2 mt-2 text-white hover:bg-blue-700'>Get your estimate</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Section