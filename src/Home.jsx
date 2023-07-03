import React from 'react'
import Typed from 'react-typed';
const Home = () => {
  return (
    <div className='text-white'>
   <div className='mx-w-[1000px]  w-full h-screen mx-auto text-center flex flex-col justify-center items-center mt-9'>
    <p className=' text-[#00df98] font-bold py-10 px-10  mt-8 text-2xl md:text-2xl   first-letter:text-4xl  '> Home — Courier service in Town
</p>
    <h1 className='md:text-4xl sm:text-2xl text-2xl font-bold md:py-4 px-8'>Parcel Pickup and Drop Service in small Town</h1>
    <div>
    <p className='md:text-3xl sm:text-4xl text-xl font-bold py-3 mt-3  mx-6 px-12'>Getting parcel very quick without any  <Typed  className='text-gray-400' strings={['Difficulty' ,'Problem' ]}
                    typeSpeed={100} backSpeed={140} loop/></p>
    
   </div>
   <p className=' font-bold py-2 text-gray-400 px-14'> Book without registering, urgent delivery at no extra cost
We are on Whatsapp: 7666 017 660
Fastest courier service in Town  </p>
   <button className='bg-[#00df98] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
   </div>
   
    </div>
  )
}

export default Home
