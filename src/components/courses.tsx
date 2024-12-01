import Image from 'next/image'
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';


function Courses() {
  return (
    <div className='w-full max-w-[1350px] mx-auto h-[1742px] top-[3326px] left-[100px] pt-[112px] pr-16 pb-[112px] pl-16  gap-[60px] overflow-x-hidden'>
      <div className='w-[768px] h-[118px] gap-6 text-center mb-12 '>
        <h1 className='w-[610px] h-[67px]  font-roboto font-bold text-[56px] -mt-[300px] ml-[550px]'>Courses</h1>
        <p className='w-[668px] h-[27px] font-roboto text-[18px] ml-[530px] mt-7'>Your Ultimate Guide to learning</p>
      </div>
      <div className='h-[1340px] gap-16'>
        <div className='w-[336px] h-10'>
          <div className='w-[87px] h-10 border-b pt-2 pr-4 pb-2 pl-4 gap-2 border-[#676767] ml-[485px] mt-14'>
            <h3 className='w-[55px] h-6 font-roboto text-[16px] text-[#000000]'>Popular</h3>
          </div>
          <div className='w-[140px] h-10 pt-2  pr-4 pb-2 pl-4 gap-2'>
            <h3 className='w-[108px] h-6 font-roboto text-[16px] text-[#000000] ml-[568px] -mt-[41px] '>Recommended</h3>
          </div>
          <div className='w-[109px] h-10 pt-2 pr-4 pb-2 pl-4 gap-2'>
            <h3 className=' w-[77px] h-6 font-roboto text-[16px] text-[#000000] ml-[710px] -mt-[82px]'>Best  Price</h3>
          </div>
        </div>
      </div>
       <div className='w-[1140px]  h-[1132px] gap-16 -mt-[1220px]'>
         <div className='w-[1050px]  h-[534px] gap-12 flex '>
          {/* course1 */}
           <div className='w-[416px] h-[520px] rounded-[5px] gap-6 bg-[#F7F7F7]'>
            <Image src="/Images/course1.png" alt='course 1' height={300} width={416}/>
            <div className='w-[316px] h-[210px] pr-4 pb-6 pl-4 gap-6'>
              <div className='w-[300px] h-[122px] gap-2'>
                <p className='font-roboto font-semibold text-[14px]  mt-3'>Design</p>
                <span className='font-roboto font-semibold text-[14px] ml-[260px] '> <i className='fas fa-star text-yellow-500'></i> 5.0</span>
                <h1 className='font-roboto font-bold text-2xl'>UX/UI Design 201</h1>
                <p className='font-roboto text-[13px] mt-2 font-medium '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              <div className='w-[300px] h-10 gap-4 flex'>
              <button className='font-roboto text-[16px] h-10 rounded-[5px] border mt-7 border-[#000000] w-[117px]'>Enroll Now</button>
              <p className='font-roboto font-medium text-[16px] mt-9 ml-3'>$400</p>
              </div>
            </div>
           </div>
           {/* course2 */}
           <div className='w-[416px] h-[520px] rounded-[5px] gap-6 bg-[#F7F7F7]'>
            <Image src="/Images/course2.png" alt='course2' height={300} width={416}/>
            <div className='w-[316px] h-[210px] pr-4 pb-6 pl-4 gap-6'>
            <div className='w-[300px] h-[122px] gap-2'>
            <p className='font-roboto font-semibold text-[14px]  mt-3'>Programmimg</p>
                <span className='font-roboto font-semibold text-[14px] ml-[260px] '> <i className='fas fa-star text-yellow-500'></i> 5.0</span>
                <h1 className='font-roboto font-bold text-2xl'>Introduction to Python</h1>
                <p className='font-roboto text-[13px] mt-2 font-medium '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
            <div className='w-[300px] h-10 gap-4 flex'>
            <button className='font-roboto text-[16px] h-10 rounded-[5px] border mt-7 border-[#000000] w-[117px]'>Enroll Now</button>
              <p className='font-roboto font-medium text-[16px] mt-9 ml-3'>$400</p>
            </div>
            </div>
           </div>
           {/* course3 */}
           <div className='w-[416px] h-[520px] rounded-[5px] gap-6 bg-[#F7F7F7] -mr-20'>
            <Image src="/Images/course3.png" alt='course3' height={300} width={416}/>
            <div className='w-[316px] h-[210px] pr-4 pb-6 pl-4 gap-6'>
            <div className='w-[300px] h-[122px] gap-2'>
               <p className='font-roboto font-semibold text-[14px]  mt-3'>Business</p>
                <span className='font-roboto font-semibold text-[14px] ml-[260px] '> <i className='fas fa-star text-yellow-500'></i> 5.0</span>
                <h1 className='font-roboto font-bold text-2xl'>Data Analysis for Beginners</h1>
                <p className='font-roboto text-[13px] mt-2 font-medium '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
            <div className='w-[300px] h-10 gap-4 flex'>
            <button className='font-roboto text-[16px] h-10 rounded-[5px] border mt-7 border-[#000000] w-[117px]'>Enroll Now</button>
              <p className='font-roboto font-medium text-[16px] mt-9 ml-3'>$400</p>
            </div>
            </div>
           </div>
        </div>
        <div className='w-[1050px] h-[534px] gap-12 flex mt-14'>
          {/* course4 */}
        <div className='w-[416px] h-[520px] rounded-[5px] gap-6 bg-[#F7F7F7] '>
            <Image src="/Images/course4.png" alt='course4' height={300} width={416}/>
            <div className='w-[316px] h-[210px] pr-4 pb-6 pl-4 gap-6'>
            <div className='w-[300px] h-[122px] gap-2'>
               <p className='font-roboto font-semibold text-[14px]  mt-3'>Art</p>
                <span className='font-roboto font-semibold text-[14px] ml-[260px] '> <i className='fas fa-star text-yellow-500'></i> 5.0</span>
                <h1 className='font-roboto font-bold text-2xl'>Art Specialization</h1>
                <p className='font-roboto text-[13px] mt-2 font-medium '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
            <div className='w-[300px] h-10 gap-4 flex'>
            <button className='font-roboto text-[16px] h-10 rounded-[5px] border mt-7 border-[#000000] w-[117px]'>Enroll Now</button>
              <p className='font-roboto font-medium text-[16px] mt-9 ml-3'>$400</p>
            </div>
            </div>
           </div>
           {/* course5 */}
           <div className='w-[416px] h-[520px] rounded-[5px] gap-6 bg-[#F7F7F7]'>
            <Image src="/Images/course5.png" alt='course5' height={300} width={416}/>
            <div className='w-[316px] h-[210px] pr-4 pb-6 pl-4 gap-6'>
            <div className='w-[300px] h-[122px] gap-2'>
               <p className='font-roboto font-semibold text-[14px]  mt-3'>Law</p>
                <span className='font-roboto font-semibold text-[14px] ml-[260px] '> <i className='fas fa-star text-yellow-500'></i> 5.0</span>
                <h1 className='font-roboto font-bold text-2xl'>Rule of Law</h1>
                <p className='font-roboto text-[13px] mt-2 font-medium '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
            <div className='w-[300px] h-10 gap-4 flex'>
            <button className='font-roboto text-[16px] h-10 rounded-[5px] border mt-7 border-[#000000] w-[117px]'>Enroll Now</button>
              <p className='font-roboto font-medium text-[16px] mt-9 ml-3'>$400</p>
            </div>
            </div>
           </div>
           {/* course6 */}
           <div className='w-[416px] h-[520px] rounded-[5px] gap-6 bg-[#F7F7F7] -mr-20'>
            <Image src="/Images/course6.png" alt='course6' height={300} width={416}/>
            <div className='w-[316px] h-[210px] pr-4 pb-6 pl-4 gap-6'>
            <div className='w-[300px] h-[122px] gap-2'>
                <p className='font-roboto font-semibold text-[14px]  mt-3'>Tech</p>
                <span className='font-roboto font-semibold text-[14px] ml-[260px] '> <i className='fas fa-star text-yellow-500'></i> 5.0</span>
                <h1 className='font-roboto font-bold text-2xl'>Introduction to webflow</h1>
                <p className='font-roboto text-[13px] mt-2 font-medium '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
            <div className='w-[300px] h-10 gap-4 flex'>
            <button className='font-roboto text-[16px] h-10 rounded-[5px] border mt-7 border-[#000000] w-[117px]'>Enroll Now</button>
              <p className='font-roboto font-medium text-[16px] mt-9 ml-3'>$400</p>
            </div>
            </div>
           </div>
          </div> 
      </div> 
      <div className='w-[155px] h-12 rounded-[5px]  border-[1px] pt-3  pr-6 pb-3 pl-6 gap-2 border-[#000000] ml-[550px] mt-16'>
        <button className='w-[120px] h-6 font-roboto text-[16px] text-[#000000] -ml-2'> View All Courses</button>
        </div>
    </div>
  )
}

export default Courses
