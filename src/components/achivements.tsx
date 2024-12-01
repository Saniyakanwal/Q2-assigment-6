import React from 'react'

const Achivements = () => {
  return (
    <div className='w-[1350px]  h-[488px] top-[2272px] left-[100px] pt-[112px] pr-16 pb-[112px] pl-16  gap-20  bg-[#FFFFFF]'>
      <div className='w-[1160px] h-[264px] z-10 gap-6'>
        <div className='w-[1152px] h-[136px] gap-4'>
            <h1 className='w-[500px] h-[58px] font-roboto font-bold text-5xl -mt-36 ml-[450px]'>Our Achivements</h1>
            <p className='w-[1095px] h-[54px] font-roboto text-[18px]  ml-14 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra <span className='ml-[278px]'> ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. </span></p>
        </div>
        <div className='w-[1256px] h-24 gap-6'>
          <div className='w-[616px] h-24 pt-2 pb-2 gap-6'>
            <div className='w-[296px] h-20 gap-2'>
              <h1 className='w-[91px] h-12 font-roboto font-bold text-[40px] ml-[80px] mt-3'>+200</h1>
              <p className='w-[59px] h-6 font-roboto text-[16px] ml-24 mt-3'>Courses</p>
            </div>
            <div className='w-[296px] h-20 gap-2'>
              <h1 className='w-[72px] h-12 font-roboto font-bold text-[40px] ml-[430px] -mt-[78px]'>50K</h1>
              <p className='w-[60px] h-6 font-roboto text-[16px] ml-[430px] mt-3'>Mentors</p>
            </div>
          </div>
          <div className='w-[616px] h-24 pt-2 pb-2 gap-6'>
          <div className='w-[296px] h-20 gap-2'>
            <h1 className=' font-roboto font-bold text-[40px] ml-[700px] -mt-[78px]'>370k</h1>
            <p className='w-16 h-6 font-roboto text-[16px] ml-[710px] mt-3'>Students</p>
          </div>
          <div className=' gap-2 z-10'>
            <h1 className=' font-roboto font-bold text-[40px] ml-[1000px] -mt-[78px]'>100+</h1>
            <p className='font-roboto text-[16px] ml-[1010px] mt-3'>Recognition</p>
             </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Achivements
