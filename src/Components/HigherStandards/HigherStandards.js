import React from 'react'
import image from '../Assets/higherstandards.png'
import image1 from '../Assets/high-standard-logo1.png'
import image2 from '../Assets/high-standards-logo2.png'
import image3 from '../Assets/high-standards-logo3.png'
import image4 from '../Assets/high-standards-logo4.png'


const HigherStandards = () => {
    return (
        <>



            <div className="container mx-auto sm:px-5 px-3 py-20 mt-8 overflow-hidden">
                <div className="flex flex-wrap -mx-6">



                    <div className="w-full lg:w-1/2 px-4 mt-3 mb-8 md:mb-0">
                        <div className="p-4 h-full">
                            <div className="h-full">
                                <img src={image} alt="Image 4" className="h-full w-full rounded-md object-cover" />
                            </div>
                        </div>
                    </div>



                    <div className="w-full lg:w-1/2 lg:px-4 px-5 ">
                        <div className="mb-8 px-3">
                            <h1 className="text-black flex mt-5 flex-wrap font-family text-3xl sm:text-4xl font-bold">
                                We Adhere to Higher Standards
                            </h1>

                            <p className="text-gray-600 font-family text-lg mt-4">
                                We prioritize healthier communities through our certified sustainable practices, backed by our dedication to education and training. With adherence to <b>Occupational Safety and Health Administration (OSHA), ISSA's Cleaning Management Institute (CMI), Environmental Protection Agency (EPA),</b> and <b>Green Seal Standards,</b> we ensure our team is equipped to implement state-of-the-art cleaning and disinfection methods, creating better buildings and environments that help people thrive.
                            </p>

                        </div>


                        <div className="flex px-4 mt-8 justify-between flex-wrap items-center mb-8">
                            <img src={image1} alt="Image 1" />
                            <img src={image2} alt="Image 2" />
                            <img src={image3} alt="Image 3" />
                            <img src={image4} alt="Image 4" />


                        </div>
                    </div>



                </div>
            </div >

        </>
    )
}

export default HigherStandards
