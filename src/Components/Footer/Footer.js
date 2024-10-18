import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import footerlogo from '../Assets/footer-logo.png';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <>
            <div className='container mx-auto px-6'>
                <footer className="bg-white text-white py-16">
                    <div className="flex flex-col md:flex-row justify-between lg:items-center mb-4">
                        <div className="flex flex-col lg:flex-row justify-between lg:items-center w-full mb-4 md:mb-0">
                            <div className='mb-8'>
                                <img src={footerlogo} alt="Logo" className="mr-2" />
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="text-lg text-black">Effortless Property Care, Tailored for You.</p>
                                <button className="bg-[#009444] font-family text-white mt-5 lg:ml-auto py-3 px-3 rounded">
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-4 mt-8 border-b-[1px] border-b-black py-7">
                        <div className="flex flex-col sm:flex-row sm:space-x-10 mb-4 lg:mb-0 text-black">
                            <div className="flex space-x-10 mb-4 sm:mb-0">
                                <a href="/" className="hover:underline">Home</a>
                                <a href="/about" className="hover:underline">About us</a>
                                <a href="/services" className="hover:underline">Services</a>
                            </div>
                            <div className="flex space-x-10">
                                <a href="/details" className="hover:underline">Industries</a>
                                <a href="/details" className="hover:underline">People</a>
                                <a href="/details" className="hover:underline">Careers</a>
                            </div>
                        </div>

                        <div className="flex space-x-8">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="h-6 w-6 text-black hover:text-[#009444] duration-300" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="h-6 w-6 text-black hover:text-[#009444] duration-300" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="h-6 w-6 text-black hover:text-[#009444] duration-300" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter className="h-6 w-6 text-black hover:text-[#009444] duration-300" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between lg:items-center w-full py-3">
                        <div className='text-black mb-4'>
                            <a href="/terms" className="hover:underline">Terms of Service</a>
                            <a href="/privacy" className="ml-8 hover:underline">Privacy Policy</a>
                        </div>
                        <div>
                            <p className="text-sm text-black">Copyright © 2024 MG Capital Maintenance</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;
