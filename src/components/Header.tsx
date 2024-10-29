import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import header_data from '@/json/Header_data';
import line from '@/public/navbar_line.svg';

const Header: React.FC = () => {
    return (
        <div className="max-sm:hidden h-[34px] w-full bg-accent_blue flex flex-row items-center justify-between px-10 text-white">
            <div className='flex flex-row items-center gap-10'>
                <div className='flex flex-row gap-5 items-center justify-center'>
                    {header_data.map((link, index) => (
                        <Link key={index} href={link.href}>
                            <Image src={link.src} alt={link.alt} height={link.height} width={link.width} />
                        </Link>
                    ))}
                </div>
                <div className='flex flex-row gap-8 items-center'>
                    <p className='text-[13px] font-normal leading-[12px] tracking-[0.4px] text-white'>Book your Appointment</p>
                    <p className='text-[16px] font-normal tracking-[0.64px] text-[#F7F9FE]"'>0452 711 33 33</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 text-[12px] font-normal leading-[12px] tracking-[0.4px] font-figtree text-white">
                <Link href="/">Privacy Policy</Link>
                <Image src={line} alt=''></Image>
                <Link href="/">Disclaimer</Link>
                <Image src={line} alt=''></Image>
                <Link href="/">Contact</Link>
            </div>
        </div>
    );
};

export default Header;