import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className=' w-full sm:w-[1350px]  h-auto sm:h-[800px] px-4 bg-[#FFFFFF]  sm:px-6 lg:px-14 pb-24 overflow-x-hidden '>
        <div className='w-full sm:w-[1100px] pr-4 sm:pr-[40px] lg:pr-[60px] pl-4 sm:pl-[20px] lg:pl-[80px] gap-6 lg'>
            <div className='w-full lg:w-[500px]  lg:items-start h-[212px] gap-6'>
                <h1 className='w-full sm:w-[500px] h-auto sm:h-[134px]  font-roboto  pt-20 text-[#000000] font-bold text-[24px] sm:text-[40px] md:text-[40px] lg:text-[56px]'>Learn new skills online with ease</h1>
                <p className='w-full sm:w-[500px] h-auto sm:h-[54px] font-roboto text-[16px] sm:text-[18px] pt-4 sm:pt-28 text-[#000000]'>
                    Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                </p>
            </div>
            <div className='flex flex-wrap w-full sm:w-[358px] h-auto sm:h-[64px] pt-4 gap-4'>
                <button className='w-full sm:w-[178px] h-12 rounded-[5px] border-[1px] pt-3 pr-6 pb-3 pl-6 gap-2 text-sm bg-[#000000] text-[#FFFFFF] mt-4 sm:mt-16 lg:mt-28'>
                    Start learning now
                </button>
                <button className='w-full sm:w-[164px] h-12 rounded-[5px] border-[1px] pt-3 pr-6 pb-3 pl-6 gap-2 text-sm border-[#000000]  mt-4 md:mt-16 lg:mt-28'>
                    Explore Courses
                </button>           
            </div>
            <div className='relative w-full'>
                <Image
                    src="/Images/Image.png" 
                    alt='hero-img'
                    width={540} 
                    height={900}
                    className='ml-0  sm:ml-[200px] lg:ml-[730px] -mt-[150px] sm:-mt-[150px] lg:-mt-[276px] z-10'
                />
            </div>
        </div>
    </div>
  )
}

export default Hero
