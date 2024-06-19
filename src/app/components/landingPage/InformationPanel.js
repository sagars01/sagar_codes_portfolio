"use client"
import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../common/contactForm/contactForm';
import WorkSection from './Work';

const panelVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
};

const InformationPanel = ({ section }) => {
    return (
        <div id='informationPanel' >
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={panelVariants}
                transition={{ duration: 0.5 }}
            >
                {section === 'Work' && <WorkSection />}
                <div style={{ width: "100%", height: "auto" }}>
                    {section === 'Contact' && <ContactForm />}
                </div>
            </motion.div>
        </div>
    );
};

export default InformationPanel;
