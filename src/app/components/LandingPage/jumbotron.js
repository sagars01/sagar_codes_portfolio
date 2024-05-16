import Image from 'next/image';

const Jumbotron = () => {
    return (
        <>
            <div className="mt-8 w-40 h-40 overflow-hidden rounded-md shadow-md mb-4">
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

        </>

    )
}

export default Jumbotron