import React, { useEffect, useState } from 'react';
import axios from 'axios';
import constants from '../common/constants/landingPage.constants';

const WorkSection = () => {
    const [ogData, setOgData] = useState({});

    const { projects } = constants.work
    useEffect(() => {
        const fetchOgData = async (url) => {
            try {
                const response = await axios.post('/api/fetch-og', { url });
                setOgData(prevState => ({ ...prevState, [url]: response.data }));
            } catch (error) {
                console.error('Failed to fetch OG data', error);
            }
        };
        projects.forEach(project => {
            fetchOgData(project.url);
        });
    }, [projects]);

    return (
        <div className="container py-8">
            <h2 className="text-2xl font-bold mb-6">My Work</h2>
            <div className="flex space-x-5">
                {projects.map((project) => (
                    <div key={project.id} className="flex-none border border-gray-300 rounded-lg p-4 w-80">
                        {ogData[project.url] && (
                            <img src={ogData[project.url].ogImage} alt={project.name} className="w-full rounded-lg mb-4" />
                        )}
                        <a href={project.url} target='_blank'>
                            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                            <p className="text-gray-700 mb-2">{project.highlightText}</p>
                            {ogData[project.url] && (
                                <p className="text-gray-600">{ogData[project.url].ogDescription}</p>
                            )}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkSection;
