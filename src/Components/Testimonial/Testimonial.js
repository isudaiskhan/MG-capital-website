import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
    const sliderRef = useRef();

    const clientNames = ["Sarah Mitchell", "Sarah Mitchell",];
    const professions = ["Operations Manager, Sterling Real Estate", "Operations Manager, Sterling Real Estate",];
    const description = ["As a long-term client of MG Capital, I have been thoroughly impressed with their exceptional service and attention to detail. The team is responsive, professional, and always goes the extra mile.", "Working with MG Capital has been a game-changer for our investment strategy. Their dedication and expertise have significantly contributed to our success."]
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };


    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <>
            <div className='bg-[#CCEADA] mt-16'>
                <div className="container mx-auto py-16 overflow-hidden">
                    <div className="flex flex-wrap px-2">
                        <div className="w-full px-2 lg:mt-0 mt-4 relative">
                            <Slider ref={sliderRef} {...settings}>
                                {clientNames.map((client, index) => (
                                    <div key={index} className="lg:px-10">
                                        <div className="p-4">
                                            <div>
                                                <FaQuoteLeft className="text-[#009444] text-4xl sm:text-5xl" />
                                                <p className="text-[#222222] text-center mt-7 font-semibold sm:font-bold font-family text-xl sm:text-2xl">
                                                    {description[index]}
                                                </p>
                                                <h2 className="text-xl font-semibold text-center font-family text-[#222222] mt-7">{clientNames[index]}</h2>
                                                <p className="text-[#222222] text-center mt-1">{professions[index]}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <div className='mt-4'>
                                <button className="absolute lg:right-[70px] right-6 p-2 group rounded-lg shadow-md bg-[#009444] transition" onClick={goToPrev}>
                                    <FiChevronLeft className="text-white text-3xl" />
                                </button>
                                <button className="absolute lg:right-[135px] right-20 p-2 group rounded-lg shadow-md bg-[#009444] transition" onClick={goToNext}>
                                    <FiChevronRight className="text-white text-3xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
