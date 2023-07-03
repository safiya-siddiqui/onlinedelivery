import React from 'react'

const Analytics = () => {
  return (
    <div className='text-black bg-slate-50 w-full  py-8 px-4 flex flex-col justify-center items-center'>
     
     <div className='max-w-[1000px] max-auto  mx-32 grid md:grid-cols-2 '>
      <img className='w-[900px] mx-auto my-6 '  src="./img4.jpg" alt="" />
      <div className='my-28 '>
        <p className='text-[#00df98] font-bold md:text-4xl text-2xl mx-auto  '>Parcel pick and Drop service in Small Town</p>

        <p className='md:my-8  w-[400px] mt-6 '>Having a package that you need to send out but not having the means to send it out is a pretty common problem. One of the ways that you can solve this problem is with using Pick and drop services in Town. Pick and drop services in India can pick up your parcel and deliver it to be shipped out while staying in your budget. The prices will not go up when you need your parcel picked-up and delivered for you.</p>
       <h1 className='font-bold md:text-2xl text-xl my-3 mt-7'>Download the app from Playstore</h1>
       <p>We will send you a link via SMS. To download the app, simply open it.</p>
       <form action="">
        <input  className='h-12 w-auto bg-[#cfcbcb] rounded-md py-5 px-8 md:my-7  mt-7 mx-22' type="phone" placeholder='Enter Mobile Number' />

        <button className='bg-[black] text-[#00df98] mt-6 font-bold mx-6 w-[160px] rounded-md py-3'>Get App</button>
       </form>
       


      </div>
      </div>



     
    

    
      

     
    
    </div>
  )
}

export default Analytics
