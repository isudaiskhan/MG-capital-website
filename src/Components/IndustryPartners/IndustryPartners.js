import React, { useState } from 'react';
import { motion } from 'framer-motion';
import image1 from '../Assets/image-1.png';
import image2 from '../Assets/image-2.png';
import image3 from '../Assets/image-3.png';
import image4 from '../Assets/image-4.png';
import image5 from '../Assets/image-5.png';
import image6 from '../Assets/image-6.png';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const IndustryPartners = () => {
    const [categoryIndex, setCategoryIndex] = useState(0);

    const categories = [
        'Commercial Office Buildings',
        'Educational Institutions',
        'Life Sciences',
        'Manufacturing',
        'Industrial Sites',
        'Government Facilities'
    ]

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
    ];

    const handleCategoryClick = (index) => {
        setCategoryIndex(index);
    };

    const handleNextCategory = () => {
        setCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
    };

    const handlePreviousCategory = () => {
        setCategoryIndex((prevIndex) => (prevIndex === 0 ? categories.length - 1 : prevIndex - 1));
    };

    return (
        <div id='industries' className='py-10 px-4 container mx-auto overflow-hidden'>

            <div className="mb-10">
                <h1 className="sm:text-4xl text-3xl font-family mt-14 font-bold mb-4">A Trusted Partner Across Every Industry</h1>
                <p className="text-xl font-family text-[#404040] max-w-5xl">
                    At MG Capital, we are dedicated to delivering solutions that demonstrate our commitment to health, safety, equity, and performance across a wide range of facilities.
                </p>
            </div>
            {/* Mobile view: buttons */}
            <div className="flex justify-center mb-4 sm:flex md:hidden">
                <motion.button
                    onClick={handlePreviousCategory}
                    className="bg-[#009444] text-white px-3 rounded-full mr-4"
                >
                    <FaArrowLeftLong className='text-2xl' />
                </motion.button>

                <motion.button
                    key={categoryIndex}
                    className="bg-[#009444] text-white min-w-60 rounded-lg"
                >
                    {categories[categoryIndex]}
                </motion.button>

                <motion.button
                    onClick={handleNextCategory}
                    className="bg-[#009444] text-white p-3 rounded-full ml-4"
                >
                    <FaArrowRightLong className='text-2xl' />
                </motion.button>
            </div>

            {/* Mobile view: image and text */}
            <motion.div
                key={categoryIndex}
                className="md:hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col">
                    <div className="relative">
                        <img src={images[categoryIndex]} alt={categories[categoryIndex]} className="w-full h-full object-cover" />
                    </div>

                    {/* Text below image */}
                    <div className="flex flex-col justify-center mt-4">
                        <h1 className="text-2xl font-family font-bold mb-4">{categories[categoryIndex]}</h1>
                        <p className="text-lg text-[#404040]">
                            {categoryIndex === 0 && 'Providing tailored services for commercial office buildings, accommodating diverse tenant needs and security requirements, while ensuring clean, well-maintained workspaces.'}
                            {categoryIndex === 1 && 'MG Capital provides tailored services for educational institutions, focusing on creating conducive learning environments.'}
                            {categoryIndex === 2 && 'MG Capital supports life sciences facilities, ensuring compliance with the highest standards in laboratory settings.'}
                            {categoryIndex === 3 && 'MG Capital specializes in providing solutions for manufacturing facilities, enhancing productivity and efficiency.'}
                            {categoryIndex === 4 && 'MG Capital provides expert services for industrial sites, ensuring operational excellence and compliance.'}
                            {categoryIndex === 5 && 'MG Capital offers tailored services for government facilities, prioritizing security and compliance.'}
                        </p>
                    </div>
                </div>
            </motion.div>

            <div className="hidden md:grid grid-cols-1 md:grid-cols-4 lg:gap-16 gap-4 h-full">
                <div className="col-span-1 h-full flex">
                    <div className="flex flex-col gap-y-4 w-full justify-between">
                        {categories.map((cat, index) => (
                            <motion.button
                                key={cat}
                                onClick={() => handleCategoryClick(index)}
                                className={`lg:px-6 lg:py-2 md:px-4 md:py-1.5 px-6 py-2 lg:text-base md:text-sm rounded ${categoryIndex === index ? 'bg-[#009444] text-white' : 'bg-[#F5F5F5] text-black'}`}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Right-side content (image and text) */}
                <motion.div
                    key={categoryIndex}
                    className="col-span-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col">
                        {/* Image */}
                        <div className="relative">
                            <img src={images[categoryIndex]} alt={categories[categoryIndex]} />
                        </div>

                        {/* Text below image */}
                        <div className="flex flex-col justify-center mt-4">
                            <h1 className="text-2xl font-family font-bold mb-1">{categories[categoryIndex]}</h1>
                            <p className="text-lg text-[#404040]">
                                {categoryIndex === 0 && 'Providing tailored services for commercial office buildings, accommodating diverse tenant needs and security requirements, while ensuring clean, well-maintained workspaces.'}
                                {categoryIndex === 1 && 'MG Capital provides tailored services for educational institutions, focusing on creating conducive learning environments.'}
                                {categoryIndex === 2 && 'MG Capital supports life sciences facilities, ensuring compliance with the highest standards in laboratory settings.'}
                                {categoryIndex === 3 && 'MG Capital specializes in providing solutions for manufacturing facilities, enhancing productivity and efficiency.'}
                                {categoryIndex === 4 && 'MG Capital provides expert services for industrial sites, ensuring operational excellence and compliance.'}
                                {categoryIndex === 5 && 'MG Capital offers tailored services for government facilities, prioritizing security and compliance.'}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default IndustryPartners;
