import {
    Button,
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react";
import React from 'react';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const JobSingleCard = ({ singleJob, onDelete }) => {
    const { _id,jobTitle, date, jobCategory, description } = singleJob


    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    onDelete(_id);
                }
            })
    }
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
                            <Link to={`/jobs/update/${_id}`}><button className="btn btn-error text-white font-semibold">Update</button></Link>
                            <button  onClick={() => handleDelete(_id)} className="btn btn-warning text-white font-semibold">Delete</button>
                        </div>
                    </div>
                </CardBody>
            </Card>
            

        </div>
    );
};

export default JobSingleCard;