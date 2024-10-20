import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import line from '@/public/footer_link_line.svg'

const Footer = () => {
  return (
    <div className='md:h-[54px] h-[30px] w-full bg-white text-black flex flex-row items-center md:justify-between justify-center px-[28px]'>
        <p className='md:text-[15px] text-[10px] w-[455px] items-center justify-center h-[24px]'>Copyright 2024. velammal Hospitals Group. All Rights Reserved.</p>
        <div className='flex flex-row items-center justify-center text-[12px] font-bold gap-[19px] max-sm:hidden'>
            <div className='flex flex-row gap-[13px]'>
                <Link href="/">Privacy policy</Link>
                <Image src={line} alt='line'></Image>
            </div>
            <div className='flex flex-row gap-[13px]'>
                <Link href="/">Disclaimer</Link>
                <Image src={line} alt='line'></Image>
            </div>
            <div className='flex flex-row gap-[13px]'>
                <Link href="/">Contact</Link>
                <Image src={line} alt='line'></Image>
            </div>
        </div>
    </div>
  )
}

export default Footer