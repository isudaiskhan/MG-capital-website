import React from 'react'
import image1 from '../Assets/client1.png'
import image2 from '../Assets/client2.png'
import image3 from '../Assets/client3.png'
import image4 from '../Assets/client4.png'
import image5 from '../Assets/client5.png'
import image6 from '../Assets/client6.png'

const Clients = () => {
    return (
        <>
            <div className='bg-[#CCEADA] mt-20'>
                <div className='container mx-auto'>
                    <div className="flex flex-col items-center justify-between p-14">
                        <p className="text-2xl font-family font-semibold text-center mb-8">We believe it’s a privilege to serve our clients. We work hard to earn their trust every day by elevating both their spaces and the well-being of those who use them.</p>

                        {/* Row of 6 images */}
                        <div className="sm:flex flex-col sm:flex-row sm:justify-between sm:space-x-16 flex-wrap space-y-10 items-center mb-8">
                            <img src={image1} alt="Image 1" />
                            <img src={image2} alt="Image 2" />
                            <img src={image3} alt="Image 3" />
                            <img src={image4} alt="Image 4" />
                            <img src={image5} alt="Image 5" />
                            <img src={image6} alt="Image 6" />
                        </div>

                        {/* Centered button */}
                        <button className="bg-[#009444] font-family text-white mt-10 py-3 px-3 rounded">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Clients
