import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook  } from "react-icons/bs";
import { BsWhatsapp  } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className='max-w-[1000px] mx-auto py-16 px-6 grid lg:grid-cols-3 gap-8 text-gray-300'>
    
      <div>
      <h1 className='w-full text-3xl font-bold text-[#00df98] m-5 ml-2'>Pick and Drop</h1>
      <p className='mr-[80px] w-[400px] ml-2 '>They are able to not only be the cheapest way to send out your parcel for you but they are also the fastest way to get the job done. All you have to do is have the parcel ready for pick-up and then they do all of the rest of the work. </p>

      <div className='flex sm:w-[95%] justify-between my-8 '>
        <BsInstagram  className='md:mx-2 ml-2 ' size={20}/>
        <BsFacebook className='md:mx-2 ' size={20}/>
        <BsWhatsapp  className='md:mx-2 ' size={20}/>
        <BsLinkedin   className='md:mx-2 ' size={20}/>
        <BsYoutube className='md:mx-2 ' size={20}/>
        <BsTwitter className='md:mx-2 ' size={20}/>
     </div>
      </div>
     <div className='lg:col-span-2  flex justify-between mt-10  md:ml-48  mr-[100px]'>
        <div>
        <h6 className='text-xl text-sm-2xl text-[#00df98] '>RProducts</h6>
            <ul>
                <li className='py-6 '>Groceries</li>
                <li className='py-6 '>Shoes</li>
               
                
            </ul>
        </div>




        <div>
        <h6  className='text-xl text-sm-2xl text-[#00df98]  mx-12 '>RCompany</h6>
            <ul>
                <li className='py-6  mx-12'>Home</li>
                <li className='py-6  mx-12'>About Us</li>
               
              
            </ul>
        </div>


        <div>
        <h6  className='text-xl text-sm-2xl text-[#00df98] mx-2 mt-1 '>Services</h6>
            <ul>
                <li className='py-6 mx-2 '>Auto rikshaw</li>
                
              
            </ul>
        </div>

       
     </div>

     
    </div>
  )
}

export default Footer
