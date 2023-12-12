import React from 'react';
import { useLoaderData } from 'react-router-dom';
import man from '../../assets/img/man.png';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const CourseDetails = () => {
    const courseData = useLoaderData()
    console.log(courseData);
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex '>
                <div className='w-6/12'>
                    <img src={courseData.image} alt="" />
                </div>
                <div className='w-6/12 mt-12 '>
                    <h1 className='text-4xl font-semibold mb-4' >{courseData.title}</h1>
                    <p className='text-lg'>{courseData.description}</p>
                    
                    <div className='flex gap-8 my-4 '>
                        <button className='btn btn-sm btn-info text-white'>
                            Duration: {courseData.duration}
                        </button>
                        <button className='btn btn-sm bg-blue-gray-600 text-white'>
                            Price: {courseData.price}
                        </button>
                        <button className='btn btn-sm bg-teal-800 text-white'>
                            Enroll: {courseData.enrollmentDeadline}
                        </button>
                    </div>
                    <div>
                        <h1 className='btn btn-sm bg-blue-gray-900 text-white '>Requirements: </h1>
                        <p>{courseData.requirements}</p>
                    </div>
                    <div className='flex gap-8 items-center border-2 p-2 border-gray-700 rounded-xl mt-4'>
                        <div>
                            <img src={man} className='w-18' alt="" />
                        </div>
                        <div>
                            <h1 className='text-lg font-semibold'>Instructor: {courseData.instructorName}</h1>
                            <p>{courseData.instructorBio}</p>
                        </div>
                    </div>
                    <div>
                        <button className='btn bg-orange-500  mt-4 text-white'> Start Learning...</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CourseDetails;