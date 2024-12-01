import Image from 'next/image'
import React from 'react'


export default function Header() {
  return (
    <div className=' bg-[#FFFFFF]'>
    <header className='  w-[1350px] mx-auto bg-[#f7f7f7] h-auto px-6 py-4 hidden sm:block'>
    <div className=' w-[1100px] h-[54px] gap-4 pt-4'>
      <div className='flex justify-between items-center flex-wrap'>
    <p className='h-[21px] font-roboto text-[14px] '>Phone Number: 956 742 455 678 
      <span className=' border border-[#676767] w-[30px] mx-2'>
      </span>
      Email:info@ddsgnr.com
      </p>
      </div>
    </div>
    <div className='w-[736px] h-[24px] gap-4'>
      <div className='flex ml-[1100px] -mt-9  w-[132px] h-6 gap-3'>
        <Image src="/Images/Facebook.png" 
        alt='facebook'
        width={24}
        height={24}
        />
        <Image src="/Images/Instagram.png"
        alt='instagram'
        width={24}
        height={24}/>
        <Image 
        src="/Images/Twitter.png"
        alt='twitter'
        width={24}
        height={24}/>
        <Image
        src="/Images/Linkedin.png"
        alt='linkedin'
        width={24}
        height={24}/>
      </div>
    </div>
    </header>
    <hr  className='border-[#000000] '/>
    </div>
  )
}
