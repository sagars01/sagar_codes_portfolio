import Head from 'next/head';
import Card from './components/Card';
import Image from 'next/image';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';


export default function Home() {
    return (
        <main className=" min-h-screen flex flex-col items-center justify-center text-gray-800 relative">
            <Head>
                <title>Sagar Sengupta Personal Website</title>
                <meta name="description" content="Your website description here" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="absolute top-4 right-4 flex space-x-4">
                <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition duration-200">
                    <FaLinkedin size={24} />
                </a>
                <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition duration-200">
                    <FaTwitter size={24} />
                </a>
            </div>

            <div className="relative w-40 h-40 overflow-hidden rounded-md shadow-md mb-4">
                <Image
                    src="/imgs/dp.jpg"
                    alt="Your Image Description"
                    width={160}
                    height={160}
                    className="object-cover"
                />
            </div>

            <div className="text-center md:text-center mb-4">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-2">Sagar Sengupta</h1>
                <h2 className="text-lg md:text-2xl font-medium text-gray-600">The calmest person in tech</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card
                    title="About Me"
                    description="Learn about my background, experience, and interests."
                    link="/about"
                />
                <Card
                    title="My Projects"
                    description="Explore a collection of my personal and professional projects."
                    link="/projects"
                />
                <Card
                    title="Contact Me"
                    description="Get in touch with me for collaborations, questions, or just to say hello."
                    link="/contact"
                />
            </div>
        </main>
    );
}
