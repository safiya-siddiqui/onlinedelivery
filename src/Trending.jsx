import React from 'react'
import { BsPhoneVibrateFill } from "react-icons/bs";
import { BsSendFill } from "react-icons/bs";
import { BsFillRocketTakeoffFill} from "react-icons/bs";
import { BsEnvelopeFill} from "react-icons/bs"

import { BsHandThumbsUpFill} from "react-icons/bs"

import { BsTabletFill} from "react-icons/bs"
const Trending = () => {
  return (
    <div className='w-full py-[6rem] px-4 bg-black text-white cursor-pointer'>

    <div className='text-white  md:text-4xl text-4xl font-bold py-2  mt-0  flex justify-center mb-32 px-22 cursor-pointer'>
        <p>Delivery Express</p>
    </div>
     <div className='max-w-[1000px] mx-auto grid grid-cols-2 gap-8  md:grid-cols-3'>
        <div className='w-[200px]  h-[280px]  mx-4  mb-4 px-2 shadow-2xl  bg-[#00df98] flex flex-col rounded-lg hover:scale-105 duration-300 flex-wrap cursor-pointer '>
            <p className='mt-3 flex flex-col items-center justify-center'><BsPhoneVibrateFill size={60}/>
</p>
<p className='mt-8'>We calculate the delivery charge immediately after you fill in our online form. You no longer need to call and ask for quotes.
</p>
        </div>


        <div className='w-[200px]  h-[280px]  mx-4  mb-4 px-8 shadow-2xl  bg-[#00df98] flex flex-col rounded-lg hover:scale-105 duration-300 cursor-pointer'>
            <p className='mt-3 flex flex-col items-center justify-center'><BsSendFill size={60}/>

</p>
<p className='mt-8'>We send courier’s phone number to the contact person via SMS at each delivery point.
</p>
        </div>


        <div className='w-[200px]  h-[280px]  mx-4  mb-4 px-5 shadow-2xl  bg-[#00df98] flex flex-col rounded-lg hover:scale-105 duration-300'>
            <p className='mt-3 flex flex-col items-center justify-center'><BsHandThumbsUpFill size={60}/>
</p>
<p className='mt-4'>Walking couriers and drivers are always available. We assign the nearest courier with the highest rating within 7 minutes.
</p>
        </div>




        <div className='w-[200px]  h-[280px] shadow-2xl mx-4 mb-4 px-4  bg-[#00df98] flex flex-col rounded-lg hover:scale-105 duration-300'>
            <p  className='mt-3 flex flex-col items-center justify-center'><BsTabletFill size={60}/>
</p>
<p className='mt-4'>You can book a courier delivery without creating accounts or signing contracts. The phone number for the sender and receiver is more than enough!</p>
        </div>



        <div className='w-[200px]  h-[280px] shadow-2xl mx-4 mb-4 px-6  bg-[#00df98] flex flex-col rounded-lg hover:scale-105 duration-300'>
            <p className='flex flex-col justify-center items-center mt-3'><BsFillRocketTakeoffFill size={60}/>
</p>
<p className='mt-4'>The system assigns high-scored and closest courier. Probably we provide you with fastest delivery service ever.
</p>
        </div>


        <div className='w-[200px]  h-[280px] shadow-2xl mx-4 mb-4 px-4  bg-[#00df98] flex flex-col rounded-lg hover:scale-105 duration-300'>
            <p  className='mt-3 flex flex-col items-center justify-center'><BsEnvelopeFill size={60}/>
</p>
<p className='mt-4'>If you own a business you can opt for COD with us. Its cheap and effective. No reason to wait weeks for getting your revenue back.
</p>
        </div>

       

     </div>
    </div>
  )
}

export default Trending
