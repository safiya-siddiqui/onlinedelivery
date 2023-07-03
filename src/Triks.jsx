import React from 'react'
import { BsRocketTakeoffFill } from "react-icons/bs";
import { BsBicycle } from "react-icons/bs";
import { BsFillHandbagFill } from "react-icons/bs";
const Triks = () => {
  return (
    <div className='w-full py-[3rem] px-2 bg-white text-black cursor-pointer'>

    <div className='text-white  md:text-4xl text-3xl font-bold py-2  mx-auto  flex justify-center mb-32 px-24'>
        <p className='text-black px-3 font-bold '>Delivery Express</p>
    </div>
     <div className='max-w-[1000px] mx-auto grid md:grid-cols-3 gap-6 px-8  '>
        <div className='w-[200px] shadow-2xl py-7 px-16 mx-28  bg-[#00df98] flex flex-col rounded-lg hover:scale-105 duration-300'>
        <p><BsRocketTakeoffFill size={60}/></p>
            <p>
           Cheap Delivery
</p>
 </div>


        <div className='w-[200px] shadow-2xl py-7 px-16 mx-28  bg-[#00df98] flex flex-col rounded-lg  hover:scale-105 duration-300'>
        <p><BsFillHandbagFill size={60}/></p>
            <p>Match special requirements
</p>

        </div>


        <div className='w-[200px] shadow-2xl py-8 px-16 mx-28 bg-[#00df98] flex flex-col rounded-lg hover:scale-105 duration-300'>
        <p><BsBicycle size={60}/></p>
            <p>Bike delivery
</p>

        </div>




       


      


        

       

     </div>
    </div>
  )
}

export default Triks
