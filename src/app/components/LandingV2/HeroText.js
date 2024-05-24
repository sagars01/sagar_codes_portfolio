// components/HeroText.js
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import constants from '../../../constants/LandingV2.json';

const iconsMap = {
    email: <FaEnvelope />,
    phone: <FaPhone />,
    linkedin: <FaLinkedin />,
    github: <FaGithub />,
    twitter: <FaTwitter />,
    youtube: <FaYoutube />
};

const HeroText = () => {
    const { greeting, description, rotatingTexts, buttons, contactIcons } = constants.heroText;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % rotatingTexts.length);
        }, 5000); // Change text every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="font-sans">
            <h1 className="text-5xl font-bold mb-4">
                {greeting}
            </h1>
            <p className="text-xl mb-4">
                {description}
            </p>
            <div className="relative h-12"> {/* Fixed height to match the text height */}
                <AnimatePresence>
                    <motion.div
                        key={rotatingTexts[index]}
                        initial={{ opacity: 0, rotateX: 90 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        exit={{ opacity: 0, rotateX: -90 }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-full text-2xl font-bold"
                    >
                        {rotatingTexts[index]}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="flex space-x-4 mb-8">
                {buttons.map(button => (
                    <a key={button.text} href={button.href} className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                        {button.text}
                    </a>
                ))}
            </div>
            <div className="flex space-x-4">
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
