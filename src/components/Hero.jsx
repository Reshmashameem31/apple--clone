import React from 'react';

const Hero = () => {
  return (
    <>
      {/* AirPods Section */}
      <section className="relative  w-full bg-[#f5f5f7] overflow-hidden">
        <img
          src="https://www.apple.com/v/home/cf/images/heroes/bts-2025/hero_bts_2025__kjxalx8t7ia2_small.jpg"
         alt="airpods image"
          className="  h-[60vh]  md:h-[90vh] w-full  object-cover opacity-90"
        />

        <div className=" text-center ">
        
          <h1 className=" text-2xl left-20 top-10 w-40 absolute md:left-1/2 md:top-5  bg-blue-500 md:w-40 h-50 rounded-lg p-2 text-white md:text-4xl font-bold">Buy ipod or mac for college</h1>
        <img src="https://www.apple.com/v/home/cf/images/heroes/bts-2025/hero_sticker_mba__b0ht7774wpaq_small.png" className=' w-10 md:w-28 absolute top-5 md: right-1/3 rotate-6'/>
        <img src="https://www.apple.com/v/home/cf/images/heroes/bts-2025/hero_sticker_ipadair__bk6ffplndvte_small.png" className=' w-10 top-10 md:w-20 absolute md:top-20 right-1/3 -rotate-6' />
          <h1 className= 'bg-blue-500  top-40 absolute  left-20 md:left-1/2 md:top-1/3 rounded-lg p-1 w-50 font-bold text-white'>with education savings</h1>
          <img src="https://www.apple.com/v/home/cf/images/heroes/bts-2025/hero_sticker_genmoji__dixanrcsc2gm_large.png" className=' absolute top-1/2 md:top-80 right-20 md:left-1/3 ml-40'/>
          <h1 className="text-lg absolute left-20 top-1/2 md:top-80 md:left-1/2 p-2 bg-blue-500 w-40 h-50 rounded-lg text-white md:text-2xl font-bold ">Choose airpods or an eligible Accessories.</h1>
           <button className= "text-blue-600 absolute bottom-10 left-14 md:left-1/2 ml-10 md:bottom-20 bg-white w-20 h-10 rounded-lg text-lg border border-blue-600 font-medium">
              Shop
            </button>
          
        </div>
      </section>

      {/* iPhone Section */}
      <section className="max-h-[500px] bg-gray-100 text-center py-12 mt-4">
        <h1 className="  text-3xl md:text-5xl font-semibold text-black">iPhone</h1>
        <p className="text-lg md:text-2xl mt-1 text-black">Meet the iPhone 16 family.</p>

        <div className="flex justify-center gap-4 mt-0">
          <button className= " px-2 py-1 md:py-2 md:px-5 bg-blue-600 text-white   rounded-full text-base font-medium">
            Learn more
          </button>
          <button className=" px-2 py-1 md:px-5 md:py-2 border border-blue-600 text-blue-600 rounded-full text-base font-medium">
            Shop iPhone
          </button>
        </div>

        <p className="mt-0 text-sm md:text-lg font-medium">
          <span className="text-blue-600">Built for </span>
          <span className="text-pink-500">Apple </span>
          <span className="text-orange-600">Intelligence.</span>
        </p>

        <img
          src="https://www.apple.com/v/home/cf/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_large.jpg"
          alt="iPhone"
          className="  max-w-[300px] md:w-full md:min-w-[800px] mx-auto mt-2"
        />
      </section>
      <section className="bg-blue-50 py-10 mt-2">
  <h1 className="text-2xl font-bold md:text-5xl md:font-semibold text-center">MacBook Air</h1>
  <p className="text-m fomt-semibold md:text-2xl text-center mt-2">Sky blue colour.</p>
  <p className="text-m font-semibold md:text-2xl text-center mt-1">Sky high performance with M4.</p>

  <div className="flex justify-center gap-4 mt-4">
    <button className=" px-2 md:px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition">
      Learn More
    </button>
    <button className="px-5  md:px-6 py-2 rounded-full text-blue-500 border border-blue-500 bg-white hover:bg-blue-500 hover:text-white transition">
      Buy
    </button>

  </div>
 
  <img
    src="./mac.jpeg"
    alt="MacBook Air"
    className=" w-full max-w-[200px] h-auto mx-auto mt-5"
  />
   <div className='flex justify-center gap-2'>
  <p className='text-m md:text-xl text-blue-500'>Built</p>
  <p className='text-m md:text-xl text-purple-500'>for </p>
  <p className='text-m md:text-xl text-pink-500'>Apple </p>
  <p className='text-m md:text-xl text-orange-500'>Intelligence</p>
</div>
</section>
    </>
  );
};

export default Hero;