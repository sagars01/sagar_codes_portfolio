import Link from 'next/link';

const Card = ({ title, description, link }) => {
    return (
        <div className=" rounded-lg shadow-md p-6 max-w-sm hover:shadow-lg transition duration-200">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <Link href={link} className="text-blue-500 hover:underline">
                Learn More
            </Link>
        </div>
    );
};

export default Card;