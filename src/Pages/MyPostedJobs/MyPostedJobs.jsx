import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import JobSingleCard from "./JobSingleCard";

const MyPostedJobs = () => {
    const {user} = useContext(AuthContext)
    const [myPostedJobs, setMyPostedJobs] = useState([])

    const url = `http://localhost:5000/jobs?email=${user?.email}`
    useEffect(() => {

        axios.get(url)
        .then((res) => {
            console.log('Jobs', res.data);
            setMyPostedJobs(res.data)
        })


        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setBookings(data)
        //     })
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div>
                {
                    myPostedJobs.map(myPostedJob => <JobSingleCard 
                        key={myPostedJob._id}
                        singleJob={myPostedJob}
                        ></JobSingleCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyPostedJobs;