"use client"
import Head from 'next/head';
import PortfolioShowcase from './portfolio';
import { useEffect, useRef, useState } from 'react';
import OptionCards from './optionsCards';
import HeadersRow from './headers';
import Jumbotron from './jumbotron';
import AboutMeSection from './aboutme';



export default function Home() {
    const [innerHeight, setInnerHeight] = useState('100vh')
    useEffect(() => {
        if (window) {
            setInnerHeight(window.innerHeight)
        }
    }, [])
    const targetDivRef = useRef(null);
    const handleScrollToDiv = () => {
        if (targetDivRef.current) {
            targetDivRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <Head>
                <title>Sagar Sengupta Personal Website</title>
                <meta name="description" content="Your website description here" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeadersRow />
            <main style={{ height: innerHeight }} className="min-h-100 flex flex-col items-center text-gray-800 relative">
                <Jumbotron />
                <OptionCards scrollToPortfolio={handleScrollToDiv} />
            </main>

            {/* About me section will come here */}

            <AboutMeSection targetRef={targetDivRef} innerHeight={innerHeight} />

            <PortfolioShowcase />
        </>
    );
}
