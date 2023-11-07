import { Button, Card, CardBody, CardFooter, Typography } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';


const WebDevJobs = ({webDevJobs }) => {
    console.log(webDevJobs);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
                webDevJobs.map(job =><div key={job._id}>
                     <motion.div
                            className="container"
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            
                        >
                    <Card className="mt-6 w-80 h-96  hover:bg-gray-200" >
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
                </motion.div>
                </div>)
            }
        </div>
    );
};

export default WebDevJobs;