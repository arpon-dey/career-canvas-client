import { Button, Card, CardBody, CardFooter, Typography } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';


const GraphicD = ({GraphicD}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
                GraphicD.map(job =><div key={job._id}>
                    <Card className="mt-6 w-80 h-96" >
                    <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {job.jobTitle}
                        </Typography>
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            Deadline: {job.date}
                        </Typography>
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            Range: {job.minPrice}-{job.maxPrice}
                        </Typography>
                        
                        <Typography>
                            {job.description.slice(0, 90)}
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                    <Link to={`/jobs/${job._id}`}><Button>Bid now</Button></Link>
                    </CardFooter>
                </Card>
                </div>)
            }
        </div>
    );
};

export default GraphicD;