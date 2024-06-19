'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import constants from '../common/constants/primaryUserProfileData';

const iconsMap = {
    email: <FaEnvelope />,
    phone: <FaPhone />,
    linkedin: <FaLinkedin />,
    github: <FaGithub />,
    twitter: <FaTwitter />,
    youtube: <FaYoutube />
};

const HeroText = ({ setActiveSection }) => {
    const { greeting, description, rotatingTexts, buttons, contactIcons } = constants.heroText;
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % rotatingTexts.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [rotatingTexts.length]);

    return (
        <div className="font-sans text-center lg:text-left p-4 lg:p-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                {greeting}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-4">
                {description}
            </p>
            <div className="relative h-8 mb-8">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={rotatingTexts[index]}
                        initial={{ opacity: 0, rotateX: 90 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        exit={{ opacity: 0, rotateX: -90 }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-full text-lg sm:text-xl lg:text-2xl font-bold"
                    >
                        {rotatingTexts[index]}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 mb-8">
                {buttons.map(button => (
                    <button
                        onClick={() => setActiveSection(button.action)}
                        key={button.text} className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 text-center">
                        {button.text}
                    </button>
                ))}
            </div>
            <div className="flex space-x-4 justify-center lg:justify-start">
                {contactIcons.map(icon => (
                    <a key={icon.type} href={icon.href} className="text-2xl">
                        {iconsMap[icon.type]}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default HeroText;
