import Link from 'next/link';

const Card = ({ title, description, link, onClick }) => {
    return (
        <div className=" rounded-lg shadow-md p-6 max-w-sm hover:shadow-lg transition duration-200">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            {
                onClick ? (
                    <div onClick={onClick} className="text-blue-500 cursor-pointer">
                        Learn More
                    </div>
                ) : (
                    <Link href={link} onClick={onClick} className="text-blue-500 hover:underline">
                        Learn More
                    </Link>
                )
            }

        </div>
    );
};

export default Card;