'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaGolang } from "react-icons/fa6";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";


const OrbitingIcons = () => {
    const icons = [
        { id: 1, icon: <FaGolang size={24} />, duration: 10 },
        { id: 2, icon: <FaNodeJs size={24} />, duration: 12 },
        { id: 3, icon: <FaReact size={24} />, duration: 14 },
        { id: 4, icon: <BiLogoPostgresql size={24} />, duration: 16 },
        { id: 5, icon: <BiLogoMongodb size={36} />, duration: 18 }
    ];

    return (
        <div className="relative w-96 h-96 flex items-center justify-center">
            {/* Central point */}
            {/* <div className="absolute w-2 h-2 bg-black rounded-full"></div> */}

            {/* Concentric Circles */}
            <div className="absolute w-full h-full border border-dotted border-gray-400 rounded-full"></div>
            <div className="absolute w-[calc(100%-5rem)] h-[calc(100%-5rem)] border border-dotted border-gray-400 rounded-full"></div>
            <div className="absolute w-[calc(100%-10rem)] h-[calc(100%-10rem)] border border-dotted border-gray-400 rounded-full"></div>
            <div className="absolute w-[calc(100%-15rem)] h-[calc(100%-15rem)] border border-dotted border-gray-400 rounded-full"></div>
            <div className="absolute w-[calc(100%-20rem)] h-[calc(100%-20rem)] border border-dotted border-gray-400 rounded-full"></div>

            {icons.map((icon, index) => {
                const orbitRadius = 40 + index * 40; // Adjust radius as needed

                return (
                    <motion.div
                        key={icon.id}
                        className="absolute"
                        style={{
                            width: `${orbitRadius * 2}px`,
                            height: `${orbitRadius * 2}px`,
                            left: `calc(50% - ${orbitRadius}px)`,
                            top: `calc(50% - ${orbitRadius + 1}px)`,
                            transformOrigin: `${orbitRadius}px ${orbitRadius}px`,
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: icon.duration, repeat: Infinity, ease: 'linear' }}
                    >
                        <motion.div
                            className="absolute flex items-center justify-center"
                            style={{
                                width: '2rem',
                                height: '2rem',
                                left: '50%',
                                top: '0',
                                transform: 'translateX(-50%) rotate(0deg)',
                            }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: icon.duration, repeat: Infinity, ease: 'linear' }}
                        >

                            {icon.icon}


                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default OrbitingIcons;
