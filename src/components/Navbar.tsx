"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/Healing_touch_Logo.png'
import Navbar_data from '@/json/Navbar_data';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);   // This is the state of the navbar menu (open or closed)
    const [activeLink, setActiveLink] = useState<string>('/'); // This is the active link that is clicked on the navbar menu


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (href: string) => {
        setActiveLink(href);
    };

    return (
        <div className='flex flex-row w-full h-[90px] p-[20px_25px] gap-[70px] items-center justify-start flex-shrink-0 bg-secondary_white text-sm rounded-b-lg'>
            <Image src={logo} alt='' className='w-[164.842px] h-[58px]'></Image>
            <div className='flex flex-row items-center justify-around gap-[100px]'>
            {Navbar_data.map((link, index) => (
                    <Link 
                        key={index} 
                        href={link.href} 
                        onClick={() => handleLinkClick(link.href)}
                        className={activeLink === link.href ? 'font-semibold' : ''}>
                            {link.text}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;