
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
        <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={logo} className="logo" alt="Flowbite Logo" />
                </a>
                <button onClick={toggleDropdown} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-expanded={isDropdownOpen ? "true" : "false"}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div id="mega-menu-full" className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">About Us</a>
                        </li>
                        <li>
                            <button onClick={toggleDropdown} className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Academics <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg></button>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Admissions</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Placement</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Campus Life</a>
                        </li>                    </ul>
                </div>
            </div>
            <div id="mega-menu-full-dropdown" className={`absolute w-full bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
                    <ul aria-labelledby="mega-menu-full-dropdown-button">
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                <div className="font-semibold">Online Stores</div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                <div className="font-semibold">Segmentation</div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                <div className="font-semibold">Marketing CRM</div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="hidden md:block">
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                <div className="font-semibold">Audience Management</div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                <div className="font-semibold">Creative Tools</div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                <div className="font-semibold">Marketing Automation</div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                    </ul>                </div>
            </div>
        </nav>
    );
};

export default Header;