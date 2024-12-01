import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';


const  CustomerTest = () => {
  return (
    <div className='w-[1350px] h-[830.89px] bg-[#F7F7F7] overflow-x-hidden'>
      <h1 className='font-roboto font-bold text-[48px] ml-10 '>Customer testimonials</h1>
      <p className='font-roboto text-[18px] ml-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className='w-[1152px] h-[417.89px] gap-12 flex ml-9 mt-14'>
        <div className='w-[362.67px] border border-[#000000] h-[321.89px]'>
            <div className='ml-6 mt-6'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
            </div>
            <p className='ml-6 mt-6 text-[18px] font-roboto '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
       <Image src="/Images/member3.png" alt='1' width={56} height={56} className='rounded-full mt-6 ml-6'/>
       <h1 className='font-roboto font-semibold text-[16px] ml-[102px] -mt-12'>James Nduku</h1>
       <p className='font-roboto text-[16px] ml-[100px]'>Software Developer</p>
        </div>
        <div className='w-[362.67px] border border-[#000000] h-[321.89px]'>
               <div className='ml-6 mt-6'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                </div>
                <p className='ml-6 mt-6 text-[18px] font-roboto'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
        <Image src="/Images/member1.png" alt='2' width={56} height={56} className='rounded-full mt-6 ml-6'/>
        <h1 className='font-roboto font-semibold text-[16px] ml-[102px] -mt-12'>Erick Kipkemboi</h1>
        <p className='font-roboto text-[16px] ml-[100px]'>Scrum Master</p>
        </div>
        <div className='w-[362.67px] border border-[#000000] h-[321.89px]'>
            <div className='ml-6 mt-6'>
        <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                </div>
                <p className='ml-6 mt-6 text-[18px] font-roboto'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <br />Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
    <Image src="/Images/member6.png" alt='3' width={56} height={56} className='rounded-full mt-6 ml-6'/>
    <h1 className='font-roboto font-semibold text-[16px] ml-[102px] -mt-12'>Stephen Kerubo</h1>
    <p className='font-roboto text-[16px] ml-[102px]'>UI/UX Designer</p>
        </div>
      </div>
      <div className="flex space-x-2 ml-9 -mt-5">
      <div className="w-3 h-3 bg-black rounded-full"></div>
      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
      <div className='flex gap-[15px] -mt-5'>
    <Image src="/Images/arrow1.png" alt='arrrow1' width={48} height={48}  className='ml-[1010px]'/>
    <Image src="/Images/arrow1.png" alt='arrrow1' width={48} height={48} />
    </div>
    </div>
    </div>
  )
}

export default CustomerTest
