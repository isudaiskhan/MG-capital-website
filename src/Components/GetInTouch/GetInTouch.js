import React from 'react'
import image from '../Assets/map.png'
import image2 from '../Assets/getintouch.png'

const GetInTouch = () => {
    return (
        <>
            <div className="relative w-full">
                <img
                    src={image2}
                    alt="workers"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col lg:flex-row border-b-2">


                {/* Left Form */}
                <div className="w-full lg:w-1/2 p-10 bg-white">
                    <h2 className="sm:text-2xl text-xl font-family font-semibold mb-4">Have a question or need assistance?</h2>
                    <p className="text-[#404040] mb-6">
                        Fill out the form with the service you need and the facilities involved, and we'll connect you with our team.
                    </p>


                    <form className='mt-5'>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b border-[#7C7C7C] appearance-none  dark:focus:border-[#009444] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="name" className="peer-focus:font-medium absolute text-sm text-[#[#404040]]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-[#009444] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b border-[#7C7C7C] appearance-none  dark:focus:border-[#009444] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="email" className="peer-focus:font-medium absolute text-sm text-[#[#404040]]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-[#009444] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="number" name="number" id="number" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b border-[#7C7C7C] appearance-none  dark:focus:border-[#009444] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="number" className="peer-focus:font-medium absolute text-sm text-[#[#404040]]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-[#009444] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                            </div>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="company_name" id="company_name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b border-[#7C7C7C] appearance-none  dark:focus:border-[#009444] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="company_name" className="peer-focus:font-medium absolute text-sm text-[#[#404040]]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-[#009444] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="repeat_password" id="message" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b border-[#7C7C7C] appearance-none  dark:focus:border-[#009444] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="message" className="peer-focus:font-medium absolute text-sm text-[#[#404040]]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-[#009444] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-5 py-2 bg-[#009444] text-white rounded hover:bg-[#009445e8]"
                        >
                            Submit
                        </button>
                    </form>

                </div>

                {/* Right Contact Information */}
                <div className="w-full lg:w-1/2 p-8 bg-[#CCEADA]">
                    <h3 className="text-xl font-family font-semibold mb-4">Other Ways to Reach Us</h3>
                    <div className="space-y-4">
                        <div className='border-b py-3 border-b-[#949494]'>
                            <p className="text-[#404040] mb-1 font-family font-semibold">Email</p>
                            <p className="text-[#[#404040]] font-family border-b">info@mgcapitalmain.com</p>
                        </div>
                        <div className='border-b py-3 border-b-[#949494]'>

                            <p className="text-[#404040] mb-1 font-family font-semibold">Phone</p>
                            <p className="text-[#[#404040]] font-family border-b">+1 (919) 461-8573</p>
                        </div>
                        <div>
                            <p className="text-[#404040] mb-1 font-family font-semibold">Headquarter</p>
                            <p className="text-[#[#404040]] font-family">
                                110 Pheasant Wood Ct, Morrisville, NC 27560 United States
                            </p>
                        </div>
                        <div>
                            <img
                                src={image}
                                alt="map"
                                className="w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default GetInTouch