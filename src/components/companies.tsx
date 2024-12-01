import Image from 'next/image'
import React from 'react'

const Companies = () => {
  return (
    <div className='w-full sm:w-[1350px] h-auto sm:h-[220px] -mt-[123px] sm:left-[100px] pt-20 pr-16 pb-20 pl-16 gap-16 bg-[#F7F7F7] overflow-hidden'>
      <h1 className='w-full sm:w-[320px] h-auto sm:h-[68px] font-roboto font-bold text-2xl sm:-ml-12'>Trusted by 2000+ companies worldwide.</h1>
      <div className='flex flex-wrap justify-center sm:justify-between items-center gap-4' >
        <Image src="/Images/logo1.png" alt='logo 1' width={123.8} height={38.52}/>
        <Image src="/Images/logo2.png" alt='logo 2' width={123.8} height={38.52}/>
        <Image src="/Images/logo3.png" alt='logo 3' width={123.8} height={38.52}/>
        <Image src="/Images/logo4.png" alt='logo 4' width={123.8} height={38.52}/>
        <Image src="/Images/logo5.png" alt='logo 5' width={123.8} height={38.52}/>
        <Image src="/Images/logo6.png" alt='logo 6' width={123.8} height={38.52}/>
      </div>
    </div>
  )
}

export default Companies
