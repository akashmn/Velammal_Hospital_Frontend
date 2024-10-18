import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import header_data from '@/json/Header_data';

const Header: React.FC = () => {
    return (
        <div className="max-sm:hidden h-[25.7px] w-full bg-accent_blue flex flex-row items-center justify-between px-10 text-white">
            <div className='flex flex-row items-center gap-10'>
                <div className='flex flex-row gap-5 items-center'>
                {header_data.map((link, index) => (
                        <Link key={index} href={link.href}>
                            <Image src={link.src} alt={link.alt} height={link.height} width={link.width} />
                        </Link>
                    ))}
                </div>
                <div className='flex flex-row gap-8 items-center'>
                    <p className='text-xs'>Book your Appointment</p>
                    <p className='text-xs'>0452 711 33 33</p>
                </div>
            </div>
            <div className="flex flex-row gap-10 text-xs">
                <Link href="/">Privacy Policy</Link>
                <Link href="/">Disclaimer</Link>
                <Link href="/">Contact</Link>
            </div>
        </div>
    );
};

export default Header;