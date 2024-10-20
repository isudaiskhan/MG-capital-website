import React from 'react';
import image1 from '../Assets/service1.png';
import image2 from '../Assets/service2.png';
import image3 from '../Assets/service3.png';
import image4 from '../Assets/service4.png';
import image5 from '../Assets/service5.png';

const Services = () => {
    const services = [
        {
            title: 'General Services',
            description: 'Comprehensive maintenance to keep your space clean and well-maintained.',
            details: [
                'Janitorial',
                'Floor and Carpet Maintenance',
                'Office Supply Replenishment',
                'Regular Inspections & Cleaning Reports',
                'Conference Room Set-Up',
                'Special Event Support'
            ],
            image: image1,
        },
        {
            title: 'Specialized Environments',
            description: 'Precise services designed for regulated and high-stakes settings.',
            details: [
                'FDA and Third-Party Regulatory Compliance',
                'Supply Management (garments, PPE, and equipment)',
                'Lab Services (including inspections, handling, and disposal)',
                'Electrostatic Disinfection & ATP Testing'
            ],
            image: image2,
        },
        {
            title: 'Restoration & Exterior Services',
            description: 'Specialized care for restoring and preserving the appearance of your property.',
            details: [
                'Stone Restoration & Maintenance (marble, granite, etc.)',
                'Power Washing',
                'Vandalism and Graffiti Cleaning',
                'Parking Deck Cleaning'
            ],
            image: image3,
        },
        {
            title: 'Sustainable Care',
            description: 'Eco-friendly solutions for a cleaner, greener tomorrow.',
            details: [
                'Waste Management',
                'Reuse, Recycle, and Compost Programs',
                'Eco-Friendly Cleaning Solutions',
                'Zero-Waste Initiatives'
            ],
            image: image4,
        },
        {
            title: 'Emergency Services',
            description: 'Immediate, reliable restoration solutions to swiftly recover your property after unexpected damage.',
            details: [
                'Water Damage Restoration and Clean Up',
                'Fire Damage Restoration and Clean Up',
                'Mold Removal and Remediation',
                'Storm Damage and Repair Restoration'
            ],
            image: image5,
        },
    ];

    return (
        <section id="services" className="py-5 px-4">
            <div className="container mx-auto p-2">
                <h2 className="sm:text-4xl text-3xl font-family mt-16 font-bold mb-4">Services for Every Need</h2>
                <p className="text-xl font-family mb-8 lg:max-w-3xl">
                    No matter the task, our refined systems, proven processes, and advanced tools ensure facilities are cleaner, better, and safer.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-4 mt-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative group bg-white shadow-lg hover:shadow-[#009444] rounded-lg overflow-hidden"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full object-cover rounded-t-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-[75%] px-4 sm:px-3 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col items-start justify-center">
                                <h3 className="text-xl font-semibold mb-2 text-start text-[#404040]">
                                    {service.title}
                                </h3>
                                <ul className="text-[#404040] px-4 font-family">
                                    {service.details.map((detail, idx) => (
                                        <li key={idx} className="list-disc list-outside">
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-3 flex flex-col h-full">
                                <h3 className="text-xl font-semibold mb-3 font-family">{service.title}</h3>
                                <p className="text-[#404040] group-hover:hidden">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
