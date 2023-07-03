import React, { useState } from 'react'
import { FiAlignJustify ,FiX } from "react-icons/fi";
const Nav = () => {
  const[nav ,setNav]=useState(false)
  const handleNav =()=>{
    setNav(!nav)
  }

  
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white cursor-pointer'>
    <h1 className='w-full text-3xl font-bold text-[#3ae9b1] mt-2'>PICK&Drop🚲</h1>
    <ul className='hidden md:flex'>
      <li className='p-5 m-6 font-bold text-[rgb(0,223,152)] text-2xl'>Home</li>
      <li className='p-5 m-6  font-bold text-[#00df98]  text-2xl'> Courier</li>
      <li className='p-5 m-6  font-bold text-[#00df98]  text-2xl'>Contact</li>
      <li className='p-5 m-6  font-bold text-[#00df98]  text-2xl'>Order</li>

      <li className='p-5 m-6 font-bold text-[#00df98]  text-2xl'>Login</li>

      <button className='bg-[#22e3a3] w-[150px] rounded-md  my-9 mx-8 py-2 text-black'>Download app</button>

    </ul>
    <div onClick={handleNav} className=' md:hidden z-10'>
      {!nav ? <FiAlignJustify/>:<FiX/>}
    </div>
    
    
      <ul className={!nav?'hidden ': 'absolute left-0 top-0 w-full h-screen  bg-black  flex flex-col justify-center items-center  cursor-pointer '}>
      <li className='p-5 font-bold text-[rgb(0,223,152)] text-2xl  flex flex-col justify-center items-center'>Home</li>
      <li className='p-5 font-bold text-[#00df98] text-2xl flex flex-col justify-center items-center '>Courier</li>
      <li className='p-5  font-bold text-[#00df98] text-2xl  flex flex-col justify-center items-center'>Contact</li>
      <li className='p-5 font-bold text-[#00df98] text-2xl flex flex-col justify-center items-center'>Order</li>
     
      <li className='p-5 font-bold text-[#00df98] text-2xl flex flex-col justify-center items-center'>Login</li>
     
      <button className='bg-[#22e3a3] w-[150px] rounded-md font-medium my-6 mx-2   py-3 text-black'>Download app</button>
      </ul>
     
   
    </div>
  )
}

export default Nav
