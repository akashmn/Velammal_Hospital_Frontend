"use client"

import { FaCaretDown } from "react-icons/fa";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/Healing_touch_Logo.png'
import Navbar_data from '@/json/Navbar_data';

const Navbar: React.FC = () => {
    // const [isOpen, setIsOpen] = useState(false);   // This is the state of the navbar menu (open or closed)
    const [activeLink, setActiveLink] = useState<string>('/'); // This is the active link that is clicked on the navbar menu

    const handleLinkClick = (href: string) => {
        setActiveLink(href);
    };

    return (
        <div className='z-10 top-0 sticky drop-shadow-2xl flex flex-row w-full h-[90px] p-[20px_25px] gap-[70px] items-center lg:justify-start justify-between flex-shrink-0 bg-secondary_white text-sm rounded-b-lg'>
            <Image src={logo} alt='velammel_logo' className='w-[164.842px] h-[58px] shrink-0'></Image>
            <button>
                <FaCaretDown className='lg:hidden h-[30px] w-[70px]'></FaCaretDown>
            </button>
            <div className='lg:flex lg:flex-row lg:items-center lg:justify-around lg:gap-[100px] hidden'>
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