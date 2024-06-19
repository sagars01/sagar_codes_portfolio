"use client"
import { useState } from 'react';
import HeroText from './HeroText';
import InformationPanel from './InformationPanel';


export default function LandingPageMain() {
    const [activeSection, setActiveSection] = useState('Work');

    return (
        <section className="flex flex-col lg:flex-row items-center h-screen p-8 bg-white">
            <div className="w-full lg:w-1/2">
                <HeroText setActiveSection={setActiveSection} />
            </div>
            <div className="w-full lg:w-1/2">
                <InformationPanel section={activeSection} />
            </div>
        </section>
    );
}
