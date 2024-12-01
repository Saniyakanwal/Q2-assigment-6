import Image from 'next/image'
import React from 'react'

const CoursesCategory = () => {
  return (
    <div className='w-full pt-[112px] py-[80px] px-[64px] bg-[#FFFFFF] overflow-x-hidden'>
      <div className='w-full px-4 md:px-8 lg:px-16 py-12  flex flex-col items-center justify-center '>
       <h1 className=' max-w-[320px] sm:max-w-[768px] mx-auto text-center   font-roboto font-bold sm:text-4xl md:text-3xl text-2xl text-[#000000] '>Explore Courses By Category</h1>
       <p className='max-w-[320px] sm:max-w-[768px] mt-4 font-roboto text-center text-base lg:text-[18px] break-words '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
      </div>
      <div className='w-[900px] h-[636px]  md:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#FFFFFF]'>
        {/* course1 */}
        <div className='w-[1150px] h-[132px] gap-6 flex  -ml-6'>
            <div className='w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7]'>
                <Image src="/Images/Frame 292.png" alt='frame 1'
                width={100} height={100}
                className='rounded-[5px] gap-[10px] '/>
                <div className='w-[246.67px] h-[57px] gap-6'>
                    <h1 className='w-[246.67px] h-[30px] font-roboto font-semibold text-[20px] ml-32 -mt-20'>Design & Development</h1>
                  <p className='w-[246.67px] h-[27px] font-roboto text-[18px] ml-32'>50+ Courses Available</p>
                </div>
            </div>
            {/* course2 */}
            <div className='w-[410.67px] h-132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7]'>
                    <Image src="/Images/frame2.png" alt='frame2'
                    width={100} height={100}
                    className='rounded-[5px] gap-[10px]'/>
                    <div className='w-[246.67px] h-[57px] gap-6'>
                        <h1 className='w-[246.67px] h-[30px] font-roboto font-semibold text-[20px] ml-32 -mt-20'>Marketing</h1>
                        <p className='w-[246.67px] h-[27px] font-roboto text-[18px] ml-32'>50+ Courses Available</p>
                    </div>
                </div>
                {/* course3 */}
                <div className='w-[410.67px] h-132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7]'>
                <Image src="/Images/frame3.png" alt='frame3'
                    width={100} height={100}
                    className='rounded-[5px] gap-[10px]'/>
                    <div className='w-[246.67px] h-[57px] gap-6'>
                        <h1 className='w-[246.67px] h-[30px] font-roboto font-semibold text-[20px] ml-32 -mt-20'>Development</h1>
                        <p className='w-[246.67px] h-[27px] font-roboto text-[18px] ml-32'>50+ Courses Available</p>
                    </div>
                </div>
        </div>
        <div className='w-[1150px] h-[132px] gap-6 flex  -ml-6 mt-12'>
            {/* course4 */}
        <div className='w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7]'>
                <Image src="/Images/frame4.png" alt='frame 4'
                width={100} height={100}
                className='rounded-[5px] gap-[10px] '/>
                <div className='w-[246.67px] h-[57px] gap-6'>
                    <h1 className='w-[246.67px] h-[30px] font-roboto font-semibold text-[20px] ml-32 -mt-20'>Communication</h1>
                  <p className='w-[246.67px] h-[27px] font-roboto text-[18px] ml-32'>50+ Courses Available</p>
                </div>
            </div>
            {/* course5 */}
            <div className='w-[410.67px] h-132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7]'>
                    <Image src="/Images/frame5.png" alt='frame 5'
                    width={100} height={100}
                    className='rounded-[5px] gap-[10px]'/>
                    <div className='w-[246.67px] h-[57px] gap-6'>
                        <h1 className='w-[246.67px] h-[30px] font-roboto font-semibold text-[20px] ml-32 -mt-20'>Digital Marketing</h1>
                        <p className='w-[246.67px] h-[27px] font-roboto text-[18px] ml-32'>50+ Courses Available</p>
                    </div>
                </div>
                {/* course6 */}
                <div className='w-[410.67px] h-132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7]'>
                <Image src="/Images/frame6.png" alt='frame 6'
                    width={100} height={100}
                    className='rounded-[5px] gap-[10px]'/>
                    <div className='w-[246.67px] h-[57px] gap-6'>
                        <h1 className='w-[246.67px] h-[30px] font-roboto font-semibold text-[20px] ml-32 -mt-20'>Self Development</h1>
                        <p className='w-[246.67px] h-[27px] font-roboto text-[18px] ml-32'>50+ Courses Available</p>
                    </div>
                </div>
        </div>
        <div className='w-[1150px] h-[132px] gap-6 flex  -ml-6 mt-12'>
            {/* course7 */}
        <div className='w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7]'>
                <Image src="/Images/frame7.png" alt='frame 7'
                width={100} height={100}
                className='rounded-[5px] gap-[10px] '/>
                <div className='w-[246.67px] h-[57px] gap-6'>
                    <h1 className='w-[246.67px] h-[30px] font-roboto font-semibold text-[20px] ml-32 -mt-20'>Business</h1>
                  <p className='w-[246.67px] h-[27px] font-roboto text-[18px] ml-32'>50+ Courses Available</p>
                </div>
            </div>
            {/* course8 */}
            <div className='w-[410.67px] h-132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7]'>
                    <Image src="/Images/frame8.png" alt='frame8'
                    width={100} height={100}
                    className='rounded-[5px] gap-[10px]'/>
                    <div className='w-[246.67px] h-[57px] gap-6'>
                        <h1 className='w-[246.67px] h-[30px] font-roboto font-semibold text-[20px] ml-32 -mt-20'>Finance</h1>
                        <p className='w-[246.67px] h-[27px] font-roboto text-[18px] ml-32'>50+ Courses Available</p>
                    </div>
                </div>
                {/* course9 */}
                <div className='w-[410.67px] h-132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7]'>
                <Image src="/Images/frame9.png" alt='frame9'
                    width={100} height={100}
                    className='rounded-[5px] gap-[10px]'/>
                    <div className='w-[246.67px] h-[57px] gap-6'>
                        <h1 className='w-[246.67px] h-[30px] font-roboto font-semibold text-[20px] ml-32 -mt-20'>Consulting</h1>
                        <p className='w-[246.67px] h-[27px] font-roboto text-[18px] ml-32'>50+ Courses Available</p>
                    </div>
                </div>
        </div>
        <div className='w-[155px] h-12 rounded-[5px]  border-[1px] pt-3  pr-6 pb-3 pl-6 gap-2 border-[#000000] ml-[550px] mt-16'>
        <button className='w-[120px] h-6 font-roboto text-[16px] text-[#000000] -ml-2'> View All Courses</button>
        </div>
      </div>
    </div>
  )
}

export default CoursesCategory
