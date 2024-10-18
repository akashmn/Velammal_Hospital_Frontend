import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import line from '@/public/footer_link_line.svg'

const Footer = () => {
  return (
    <div className='h-[54px] w-full bg-white text-black flex flex-row items-center justify-between px-[28px]'>
        <p className='text-[15px] w-[455px] h-[24px]'>Copyright 2024. velammal Hospitals Group. All Rights Reserved.</p>
        <div className='flex flex-row items-center justify-center text-[12px] gap-[19px]'>
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