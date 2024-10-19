import React, { useState, useEffect } from 'react'
import image1 from '../Assets/about.png'
import image2 from '../Assets/about1.png'
import image3 from '../Assets/about2.png'
import image4 from '../Assets/about3.png'



const About = () => {


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

    const initialXRight = windowSize.width >= 640 ? 200 : 100;


    const initialRight = {
        x: initialXRight,
        opacity: 0
    };


    const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia("(min-width: 640px)").matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 640px)");

        const handleScreenChange = () => {
            setIsLargeScreen(mediaQuery.matches);
        };

        // Initial check
        handleScreenChange();

        // Listen for changes
        mediaQuery.addListener(handleScreenChange);

        // Clean up
        return () => {
            mediaQuery.removeListener(handleScreenChange);
        };
    }, []);



    const [experience, setExperience] = useState({
        years: 0,
        clients: 0,
        projects: 0,
    });

    useEffect(() => {
        const durations = {
            years: 150, // 1 second
            clients: 50, // 2 seconds
            projects: 70, // 3 seconds
        };

        const resetExperience = () => {
            setExperience({
                years: 0,
                clients: 0,
                projects: 0,
            });
        };

        const intervals = Object.keys(experience).map(property => {
            return setInterval(() => {
                setExperience(prevExperience => ({
                    ...prevExperience,
                    [property]: Math.min(prevExperience[property] + 1, property === 'years' ? 20 : property === 'clients' ? 25 : 93),
                }));
            }, durations[property]);
        });

        document.addEventListener('visibilitychange', resetExperience);

        return () => {
            document.removeEventListener('visibilitychange', resetExperience);
            intervals.forEach(interval => clearInterval(interval));
        };
    }, []);


    return (
        <>


            <div id="about" className="container mx-auto px-4 py-10 overflow-hidden">
                <div className="flex flex-wrap -mx-6">

                    <div className="w-full lg:w-[55%] lg:px-4 px-5 ">
                        <div className="mb-8 px-3">
                            <h1 className="text-black flex mt-14 flex-wrap font-family text-3xl sm:text-4xl font-bold" style={{ lineHeight: isLargeScreen ? '3rem' : '2.5rem' }}>
                                MG Captial is committed to people-first places
                            </h1>

                            <p className="text-gray-600 font-family text-lg mt-4">
                                At MG Capital, we believe that when we invest in our people and support their growth, they take pride in their work. This approach allows us to make a meaningful impact on our clients' spaces. By putting people first, we ensure that every space is maintained with expert attention and a standard of excellence.
                            </p>

                        </div>


                        <div className="flex flex-col justify-around items-start px-3 gap-8">
                            <div className="flex items-start space-x-4">
                                <img src={image2} />
                                <div>
                                    <h3 className="text-xl font-family mb-1 font-semibold">Higher employee satisfaction</h3>
                                    <p className="text-[#404040]">resulting in exceptional quality care</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <img src={image3} />
                                <div>
                                    <h3 className="text-xl font-family mb-1 font-semibold">A workplace culture</h3>
                                    <p className="text-[#404040]">built on sustainability and care, fostering long-term employee loyalty and superior service</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <img src={image4} />
                                <div>
                                    <h3 className="text-xl font-family mb-1 font-semibold">Trusted by leading businesses</h3>
                                    <p className="text-[#404040]">thanks to our focus on reliable service through expert care by trained professionals</p>
                                </div>
                            </div>
                        </div>


                        <div className="w-full justify-between sm:flex px-4 mt-8">
                            <div className="xl:p-2 lg:p-1 sm:p-2 border-s-2 border-s-[#009444]">
                                {/* Box 1 - Year in Business */}
                                <div className="flex items-center ml-5">
                                    <h2 className="xl:text-4xl lg:text-3xl sm:text-4xl text-3xl font-family font-bold text-[#009444] mb-2 mr-2">{experience.years}+</h2>

                                </div>
                                <h2 className="font-family xl:text-lg lg:text-base text-lg font-semibold ml-5">Year in Business</h2>
                            </div>


                            <div className="xl:p-2 lg:p-1 sm:p-2 sm:mt-0 mt-5 border-s-2 border-s-[#009444]">
                                {/* Box 2 - Sq. ft Serviced */}
                                <div className="flex items-center ml-5">
                                    <h2 className="xl:text-4xl lg:text-3xl sm:text-4xl text-3xl font-family font-bold text-[#009444] mb-2 mr-2">{experience.clients} Mn+</h2>

                                </div>
                                <h2 className="font-family xl:text-lg lg:text-base text-lg font-semibold ml-5">Sq. ft Serviced</h2>

                            </div>


                            <div className="xl:p-2 lg:p-1 sm:p-2 sm:mt-0 mt-5 border-s-2 border-s-[#009444]">
                                {/* Box 3 - Customer Retention */}
                                <div className="flex items-center ml-5">
                                    <h2 className="xl:text-4xl lg:text-3xl sm:text-4xl text-3xl font-family font-bold text-[#009444] mb-2 mr-2">{experience.projects}%</h2>

                                </div>
                                <h2 className="font-family xl:text-lg lg:text-base text-lg font-semibold ml-5">Customer Retention</h2>

                            </div>

                        </div>

                    </div>


                    <div className="w-full lg:w-[45%] px-4 mb-8 md:mb-0">
                        <div className="p-4 mt-3 h-full">
                            <div className="h-full">
                                <img src={image1} alt="Image 4" className="h-full rounded-md w-full object-cover" />
                            </div>
                        </div>
                    </div>


                </div>
            </div >

        </>
    )
}

export default About