import HeroText from './HeroText';
import OrbitingIcons from './OrbitingIcons';

export default function LandingV2() {
    return (
        <section className="flex flex-col lg:flex-row justify-center items-center h-screen p-8 bg-white">
            <div className="w-full lg:w-1/2 flex items-center justify-center h-full">
                <HeroText />
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center h-full">
                <OrbitingIcons />
            </div>
        </section>

    );
}
