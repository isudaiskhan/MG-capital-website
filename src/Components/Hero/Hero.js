import React, { useState, useEffect } from 'react';
import heroimage from '../Assets/hero.png';
import image1 from '../Assets/hero-bottom.png';

const Hero = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div
                className="relative bg-cover bg-center py-28"
                style={{ backgroundImage: `url(${heroimage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#00000000] to-[#FFFFFFB2]"></div>

                <div className="relative w-full overflow-hidden">
                    <div className='flex flex-col items-center justify-end overflow-hidden'>
                        <div className='relative w-full py-16 px-4'>
                            <div className='container px-4 mx-auto flex flex-col lg:flex-row'>
                                <div className='lg:w-1/2 w-full md:mt-8'>
                                    <h1 className='text-[#222222] sm:text-4xl text-3xl font-family font-bold tracking-wide py-2'>Cleaner Spaces,</h1>
                                    <span className='text-[#222222] font-family text-3xl sm:text-4xl lg:text-start md:text-center font-bold tracking-wide py-2'>Healthier Communities</span>
                                    <p className='text-lg text-[#222222] lg:pe-5 mt-5 font-family'>We treat our employees like family, and they treat your space as if it’s their own, ensuring a healthier and more welcoming environment for everyone.</p>

                                    <button className="bg-[#009444] font-family shadow-2xl shadow-[#009444] hover:shadow-none text-lg text-white mt-10 py-3 px-3 rounded">
                                        Explore Our Services
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Images Row */}
                        <div className="flex justify-end mb-4 px-10 w-full">
                            <img src={image1} alt="Image 1" className="" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
