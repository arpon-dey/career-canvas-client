import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import CourseCard from './CourseCard';

const Courses = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [course, setCourse] = useState([])
    useEffect(() => {
        setIsLoading(true);
        axios.get('/courses.json')
            .then((res) => {
                console.log('courses', res.data);
                setCourse(res.data);
                setIsLoading(false)
            })
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            {
                isLoading ? (<span className="loading loading-bars loading-lg ms-96 mt-56"></span>) :
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-24">
                        {course.length > 0 ? (
                            course.map(course => <CourseCard
                                key={course._id}
                                singleCourse={course}

                                ></CourseCard>)
                        ) : (<h2 className="text-center font-semibold text-2xl">No course available for you.</h2>)}
                    </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default Courses;