"use client";

import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/Healing_touch_Logo.png";
import Navbar_data from "@/json/Navbar_data";

const Navbar: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>("/"); // Track the active link
    const [isOpen, setIsOpen] = useState<boolean>(false); // State to track dropdown visibility

    const handleLinkClick = (href: string) => {
        setActiveLink(href);
        setIsOpen(false); // Close dropdown after link is clicked
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen); // Toggle dropdown state
    };

    return (
        <div className='z-10 top-0 sticky drop-shadow-2xl rounded-b-xl flex flex-row w-full h-[90px] p-[20px_25px] gap-[70px] items-center lg:justify-start justify-between flex-shrink-0 bg-secondary_white text-sm'>
            {/* Logo */}
            <Image
                src={logo}
                alt='velammel_logo'
                className='w-[164.842px] h-[58px] shrink-0'
            />

            {/* Dropdown Button for Mobile */}
            <button className='lg:hidden' onClick={toggleDropdown}>
                {isOpen ? (
                    <FaCaretUp className='h-[30px] w-[30px]' /> 
                ) : (
                    <FaCaretDown className='h-[30px] w-[30px]' /> 
                )}
            </button>

            {/* Navbar Links for Desktop */}
            <div className='lg:flex lg:flex-row lg:items-center lg:justify-around lg:gap-[100px] hidden'>
                {Navbar_data.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        onClick={() => handleLinkClick(link.href)}
                        className={activeLink === link.href ? "font-semibold" : ""}
                    >
                        {link.text}
                    </Link>
                ))}
            </div>

            {/* Navbar Links for Mobile (shown on dropdown click) */}
            <div className={`lg:hidden absolute top-[90px] left-0 w-full bg-secondary_white shadow-lg flex flex-col items-center pb-3 transition-all duration-500 ease-in-out ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                {Navbar_data.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        onClick={() => handleLinkClick(link.href)}
                        className={`py-2 text-base w-full text-center ${activeLink === link.href ? "font-semibold" : ""}`}
                    >
                        {link.text}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
