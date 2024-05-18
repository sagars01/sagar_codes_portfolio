// use client
"use client";

import { AboutMeData } from '../Utils/Constants/aboutMe.constant';

const AboutMeSection = ({ innerHeight, targetRef }) => {
    let { experience, header: {
        title, subtitle
    } } = AboutMeData
    return (
        <section ref={targetRef} className="mt-4 w-full px-8 flex-col flex">
            <div className="text-center mb-16">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-2">
                    {title}
                </h1>
                <h2 className="text-lg md:text-2xl font-medium text-gray-600">
                    {subtitle}
                </h2>
            </div>

            <ul className="relative border-l-2 border-gray-300">
                {experience.map((item, index) => (
                    <li key={index} className="timeline-item mb-8 pl-4 flex">
                        <div className="items-center mb-4 w-60">
                            <img src={item.imageUrl} alt={item.title} className="timeline-image w-20 h-20 rounded-full object-cover mr-4" />
                            <div>
                                <p className="timeline-date text-gray-500 mb-2">{item.timeline}</p>
                                <h3 className="timeline-title text-lg font-semibold">{item.title}</h3>
                            </div>
                        </div>
                        <div className="detail-item w-full ml-24"> {/* Indent details content */}
                            <h2 className="detail-title text-xl font-bold mb-2">{item.content.header}</h2>
                            <p className="detail-description" dangerouslySetInnerHTML={{ __html: item.content.body }}></p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default AboutMeSection;
