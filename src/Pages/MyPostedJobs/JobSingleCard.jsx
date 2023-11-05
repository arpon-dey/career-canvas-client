import React from 'react';

const JobSingleCard = ({singleJob}) => {
    const {jobTitle,date, jobCategory }= singleJob
    return (
        <div>
            <h1>{jobTitle}</h1>
        </div>
    );
};

export default JobSingleCard;