
"use client"

import React, { useState } from 'react';
import logo from "../../../public/GyanarthiLogo.png";
import Image from 'next/image';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-white border-gray-200 ">
            <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={logo} className="logo" alt="Flowbite Logo" />
                </a>


            </div>

        </nav>
    );
};

export default Header;
