import 'react-tabs/style/react-tabs.css';

import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import DigitalMkt from './DigitalMkt';
import GraphicD from './GraphicD';
import './JobTabs.css';
import WebDevJobs from './WebDevJobs';
const JobTabs = () => {
    const [allJobs, setAllJobs] = useState([])
    const [uniqueCategories, setUniqueCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Digital marketing');
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                console.log("Data", data)
                setAllJobs(data)
                const categories = Array.from(
                    new Set(data.map((job) => job.jobCategory))
                );
                setUniqueCategories(categories);
                setIsLoading(false);
            })



    }, [])
    const filteredJobs = selectedCategory
        ? allJobs.filter((job) => job.jobCategory === selectedCategory)
        : [];




    return (
        <div className="w-9/12 mx-auto my-16">
            <div className='flex justify-center items-center my-6'>
            <button className='btn w-72 bg-blue-gray-200 glass font-bold text-xl'>Available jobs</button>
            </div>
            {isLoading ? (<span className="loading loading-bars loading-lg ms-96 mt-56"></span>
            ) : (
                <Tabs>
                    <TabList className="centered-tabs">
                        {uniqueCategories.map((category) => (
                            <Tab
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </Tab>
                        ))}
                    </TabList>

                    <div>
                        {uniqueCategories.map((category) => (
                            <TabPanel key={category}>
                                {selectedCategory === category && (
                                    category === 'Digital marketing' ? (
                                        <DigitalMkt digitalMkt={filteredJobs}></DigitalMkt>
                                    ) : category === 'Web development' ? (
                                        <WebDevJobs webDevJobs={filteredJobs}></WebDevJobs>
                                    ) : category === 'Graphics Design' ? (
                                        <GraphicD GraphicD={filteredJobs}></GraphicD>
                                    ) : <></>
                                )}
                            </TabPanel>
                        ))}
                    </div>
                </Tabs>
            )}
        </div>
    );
};

export default JobTabs;