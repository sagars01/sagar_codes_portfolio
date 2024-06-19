"use client"
import { useState } from 'react';
import HeroText from './HeroText';
import InformationPanel from './InformationPanel';


export default function LandingPageMain() {
    const [activeSection, setActiveSection] = useState('Work');

    return (
        <section className="flex flex-col lg:flex-row justify-center items-center h-screen p-8 bg-white">
            <div className="w-full lg:w-1/2 flex items-center justify-center h-1/2 lg:h-full">
                <HeroText setActiveSection={setActiveSection} />
            </div>
            <div className="w-full lg:w-1/2 flex items-center overflow-x-scroll
            justify-center h-1/2 lg:h-full">
                <InformationPanel section={activeSection} />
            </div>
        </section>
    );
}
