"use client"
import Head from 'next/head';
import PortfolioShowcase from './portfolio';
import { useRef, useState } from 'react';
import OptionCards from './optionsCards';
import HeadersRow from './headers';
import Jumbotron from './jumbotron';



export default function Home() {
    const portfolioRef = useRef(null);
    const scrollToPortfolio = () => {
        setTimeout(() => {
            if (portfolioRef.current) {
                portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500); // Adjust the delay (in milliseconds) as needed
    };

    return (
        <>
            <Head>
                <title>Sagar Sengupta Personal Website</title>
                <meta name="description" content="Your website description here" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeadersRow />
            <main className=" min-h-100 flex flex-col items-center justify-center text-gray-800 relative mb-10">


                <Jumbotron />

                <OptionCards scrollToPortfolio={scrollToPortfolio} />


                {/* <PortfolioShowcase ref={portfolioRef} /> */}


            </main>
        </>
    );
}
