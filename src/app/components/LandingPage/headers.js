import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const HeadersRow = () => {
    return (
        <div className="flex w-full justify-end items-end space-x-4 p-4">
            <a href="https://www.linkedin.com/in/sagars01" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition duration-200">
                <FaLinkedin className="inline-block align-top" size={24} />
            </a>
            <a href="https://twitter.com/sagar_codes" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition duration-200">
                <FaTwitter className="inline-block align-top" size={24} />
            </a>
            <a href="https://github.com/sagars01" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition duration-200">
                <FaGithub className="inline-block align-top" size={24} />
            </a>
        </div>
    )
}

export default HeadersRow;
