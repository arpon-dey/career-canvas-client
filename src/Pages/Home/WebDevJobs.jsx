import { Button, Card, CardBody, CardFooter, Typography } from '@material-tailwind/react';
import React from 'react';


const WebDevJobs = ({webDevJobs }) => {
    console.log(webDevJobs);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
                webDevJobs.map(job =><div key={job._id}>
                    <Card className="mt-6 w-80 h-96" >
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {job.jobTitle}
                        </Typography>
                        <Typography>
                            {job.description}
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Read More</Button>
                    </CardFooter>
                </Card>
                </div>)
            }
        </div>
    );
};

export default WebDevJobs;