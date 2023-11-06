import {
    Button,
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react";
import React from 'react';

const JobSingleCard = ({ singleJob }) => {
    const { jobTitle, date, jobCategory, description } = singleJob
    return (
        <div>



            <Card className="w-full max-w-[48rem] flex-row">

                <CardBody>
                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    {jobCategory}
                    </Typography>
                    <Typography variant="h3" color="blue-gray" className="mb-2">
                    {jobTitle}
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                        {description.slice(0, 180)}... <span className="text-orange-800 font-semibold">read more</span>
                    </Typography>
                    <div className="flex justify-between">
                        <div>
                        <a href="#" className="inline-block">
                        <Button variant="text" className="flex items-center gap-2">
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Button>
                    </a>
                        </div>
                        <div className="flex gap-4">
                            <button className="btn btn-warning text-white font-semibold">Update</button>
                            <button className="btn btn-error text-white font-semibold">Delete</button>
                        </div>
                    </div>
                </CardBody>
            </Card>
            

        </div>
    );
};

export default JobSingleCard;