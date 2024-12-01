import Image from 'next/image'
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Team = () => {
  return (
    <div className='w-[1350px] h-[895px] bg-[#F7F7F7] -mt-32 overflow-x-hidden'>
      <h1 className='text-5xl font-roboto font-bold pl-[550px] pt-[100px]'>Our team</h1>
      <p className='font-roboto text-[18px] pl-[430px] pt-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <div className='h-[482px] gap-24'>
        <div className='w-[209px] gap-12 flex mt-12'>
          {/* member 1 */}
          <div className='w-[394.67px]'>
            <Image src="/Images/member1.png" alt='member1' width={80} height={80} className='ml-28'/>
            <h1 className=' w-[394.67px] font-roboto font-semibold text-[20px] ml-20 mt-3'>James Nduku</h1>
            <p className='font-roboto text-[18px] ml-14 mt-1 '>Marketing Coordinator</p>
            <div className='flex mt-6 gap-6 ml-[88px]'>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-dribbble'></i>
            </div>
          </div>
          {/* member-2 */}
          <div className='w-[394.67px]'>
          <Image src="/Images/member2.png" alt='member2' width={80} height={80} className='ml-24 '/>
          <h1 className='w-[394.67px] font-roboto font-semibold text-[20px] ml-12 mt-3'>Joseph Munyambu</h1>
          <p className='font-roboto text-[18px] ml-14 mt-1'>Nursing Assistant</p>
          <div className='flex mt-6 gap-6 ml-20'>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-dribbble'></i>
            </div>
          </div>
          {/* member 3 */}
          <div className='w-[394.67px]'>
          <Image src="/Images/member3.png" alt='member3' width={80} height={80} className='ml-20'/>
          <h1 className='w-[394.67px] font-roboto font-semibold text-[20px] ml-9 mt-3'>Joseph Ngumbau</h1>
          <p className='font-roboto text-[18px] ml-11 mt-1'>Medical Assistant</p>
          <div className='flex mt-6 gap-6 ml-14'>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-dribbble'></i>
            </div>
          </div>
        </div>
        <div className='w-[209px] gap-12 flex mt-4'>
          {/* member 4 */}
          <div className='w-[394.67px]'>
          <Image src="/Images/member4.png" alt='member4' width={80} height={80} className='ml-[105px] mt-14'/>
          <h1 className='w-[394.67px] font-roboto font-semibold text-[20px] ml-[72px] mt-4'>Erick Kipkemboi</h1>
          <p className='font-roboto text-[18px] ml-[84px] mt-1'>Web Designer</p>
          <div className='flex gap-6 ml-[88px] mt-6 '>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-dribbble'></i>
            </div>
          </div>
          {/* member 5 */}
          <div className='w-[394.67px]'>
          <Image src="/Images/member5.png" alt='member5' width={80} height={80} className='ml-[90px] mt-14'/>
          <h1 className='w-[394.67px] font-roboto font-semibold text-[20px] ml-14 mt-4'>Stephen Kerubo</h1>
          <p className='font-roboto text-[18px] ml-14 mt-1'>President of Sales</p>
          <div className='flex mt-6 gap-6 ml-[85px]'>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-dribbble'></i>
            </div>
          </div>
          {/* member 6 */}
          <div className='w-[394.67px]'>
          <Image src="/Images/member6.png" alt='member6' width={80} height={80} className='ml-[72px] mt-14'/>
          <h1 className='w-[394.67px] font-roboto font-semibold text-[20px] ml-16 mt-4'>John Leboo</h1>
          <p className='font-roboto text-[18px] ml-[72px] mt-1'>Dog Trainer</p>
          <div  className='flex mt-6 gap-6 ml-[75px]'>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-dribbble'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
