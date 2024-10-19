import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { motion } from 'framer-motion';
import logo from '../Assets/header-logo.png'

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState('HOME');
    const [openSubmenu, setOpenSubmenu] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setHasScrolled(scrollPosition > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { id: 'about', label: 'About us', },
        { id: 'services', label: 'Services', },
        { id: 'sustainibility', label: 'Sustainibility', },
        { id: 'industries', label: 'Industries', },
        { id: 'peoples', label: 'Peoples', }
    ];

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const closeMobileMenu = () => {
        setMobileMenu(false);
    };

    const toggleSubmenu = (id) => {
        setOpenSubmenu(openSubmenu === id ? null : id);
    };

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition  duration-300 ${hasScrolled ? 'top-0 shadow-xl bg-white' : 'bg-[#0000000A]'}`}>
                <div className="relative max-w-[1240px] mx-auto sm:ps-9 sm:pe-9 ps-5 pe-5 xl:ps-0 xl:pe-0">
                    <div className="lg:py-4 py-6 mx-auto flex items-center justify-between lg:justify-start">
                        <div>
                            <img src={logo} />
                        </div>
                        <div className="hidden lg:flex items-center lg:space-x-3 xl:space-x-10 ml-auto">
                            <ul className="flex items-center">
                                {navItems.map((item) => (
                                    <li key={item.id} className="relative xl:px-8 px-5 group cursor-pointer">
                                        <button
                                            onClick={() => {
                                                setActiveMenuItem(item.label);
                                                const section = document.getElementById(item.id);
                                                if (section) {
                                                    section.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }}
                                            className={`text-[#222222] font-family duration-300 group font-semibold group-hover:text-[#009444] ${activeMenuItem === item.label ? 'text-[#009444]' : ''}`}
                                        >
                                            {item.label}
                                        </button>

                                    </li>
                                ))}
                            </ul>
                            <button className="flex items-center hover:bg-[#009445cb] font-family font-semibold bg-[#009444] text-white px-4 py-2 sm:px-6 sm:py-3 rounded text-sm sm:text-base duration-300">
                                <span className="font-semibold">Get in touch</span>
                            </button>
                        </div>
                        <div className="block lg:hidden">
                            <button onClick={toggleMobileMenu}>
                                <IoMdMenu className="text-4xl text-[#009444]" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {mobileMenu && (
                <div className="fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70">
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 60, duration: 1 }}
                        className="absolute right-0 min-h-screen w-full sm:w-3/5 py-4 px-8 shadow md:w-1/3 bg-white z-50"
                    >
                        <button className="absolute top-0 right-0 mt-4 mr-4" onClick={closeMobileMenu}>
                            <AiOutlineClose className="text-4xl text-black" />
                        </button>
                        <ul className="mt-8 flex flex-col space-y-4">
                            <div onClick={closeMobileMenu}>
                                {navItems.map((item) => (
                                    <li key={item.id} className="relative p-5 group cursor-pointer">
                                        <button
                                            onClick={() => {
                                                setActiveMenuItem(item.label);
                                                const section = document.getElementById(item.id);
                                                if (section) {
                                                    section.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }}
                                            className={`text-[#222222] duration-300 font-semibold hover:text-[#009444] ${activeMenuItem === item.label ? 'text-[#009445cb]' : ''}`}
                                        >
                                            {item.label}
                                        </button>

                                    </li>
                                ))}
                            </div>
                        </ul>

                        <button className="flex items-center hover:bg-[#009445cb] mt-5 ms-2 font-family font-semibold bg-[#009444] text-white px-4 py-2 sm:px-6 sm:py-3 rounded text-sm sm:text-base duration-300">
                            <span className="font-semibold">Get in touch</span>
                        </button>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default Navbar;
