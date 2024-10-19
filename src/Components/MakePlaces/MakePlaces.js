import React, { useState, useEffect } from 'react'
import image from '../Assets/make-places.png'

const MakePlaces = () => {


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
                    [property]: Math.min(prevExperience[property] + 1, property === 'years' ? 6.7 : property === 'clients' ? 600 : 93),
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



            <div id='peoples' className="container mx-auto px-4 py-8 overflow-hidden">
                <div className="flex flex-wrap -mx-6">


                    <div className="w-full lg:w-[55%] lg:px-4 px-5 ">
                        <div className="mb-8 px-3">
                            <h1 className="text-black flex mt-14 flex-wrap font-family text-3xl sm:text-4xl font-bold">
                                People Make Places
                            </h1>

                            <p className="text-gray-600 font-family text-lg mt-4">
                                At MG Capital, we are built by the community, for the community. We believe in putting employees first, knowing that taking care of our people is the key to delivering exceptional service to our customers.
                            </p>


                            <div className="w-full justify-between sm:flex mt-8">
                                <div>
                                    <div>
                                        <h2 className="font-family text-lg font-semibold">Employee Retention</h2>

                                        <h2 className="text-4xl font-family font-bold text-[#009444] mb-2 mr-2">{experience.years}%</h2>

                                    </div>
                                    <p>Better Than Industry Average</p>
                                </div>


                                <div className="sm:mt-0 mt-5">
                                    <div>
                                        <h2 className="font-family text-lg font-semibold">Our Team</h2>

                                        <h2 className="text-4xl font-family font-bold text-[#009444] mb-2 mr-2">{experience.clients}%</h2>

                                    </div>
                                    <p>Employees Strong</p>

                                </div>

                            </div>

                            <p className="text-gray-600 font-family text-lg mt-4">
                                As a certified minority-owned business and a member of the NMSDC, MG Capital is committed to fostering diversity and inclusion. Our leadership reflects this commitment, with a high percentage of minorities in executive roles. We prioritize internal career advancement, providing opportunities for all employees to thrive in a supportive and environmentally responsible workplace.
                            </p>

                        </div>

                        <div className='px-4 mt-6'>

                            <p className='font-family font-semibold text-lg'>We're always looking for exceptional people to grow with us.</p>

                            <button className="bg-[#009444] font-family text-white mt-7 py-3 px-8 rounded">
                                Join Us
                            </button>

                        </div>


                    </div>


                    <div className="w-full lg:w-[45%] px-4 mt-3 mb-8 md:mb-0">
                        <div className="p-4 h-full">
                            <div className="h-full">
                                <img src={image} alt="Image 4" className="h-full w-full rounded-md object-cover" />
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}

export default MakePlaces