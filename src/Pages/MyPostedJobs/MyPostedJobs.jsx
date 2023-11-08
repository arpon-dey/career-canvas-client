import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import JobSingleCard from "./JobSingleCard";

const MyPostedJobs = () => {
    const { user } = useContext(AuthContext)
    const [myPostedJobs, setMyPostedJobs] = useState([])
    const [jobItems, setJobItems] = useState(myPostedJobs)
    const [isLoading, setIsLoading] = useState(true)

    const url = `https://career-canvas-server-ten.vercel.app/jobs?email=${user?.email}`
    useEffect(() => {
        setIsLoading(true);
        axios.get(url)
            .then((res) => {
                console.log('Jobs', res.data);
                setMyPostedJobs(res.data);
                const userJobItems = res.data.filter((item) => item.email === user?.email);
                setJobItems(userJobItems);
                setIsLoading(false)
            })
    }, [])


    const handleDeleteJob = _id => {
        console.log(_id);

        fetch(`https://career-canvas-server-ten.vercel.app/jobs/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your job has been deleted.',
                        'success'
                    );
                    setJobItems((prevItems) =>
                        prevItems.filter((item) => item._id !== _id)
                    );
                }
            })
    }
    const generateTitle = () => {
        switch (location.pathname) {
            case '/addJob':
                return 'Digitalenet| My posted Jobs';
            default:
                return 'Digitalenet';
        }
    };


    return (
        <div>
            <Helmet>
                <title>{generateTitle()}</title>
            </Helmet>
            <Navbar></Navbar>
            {
                isLoading ? (<span className="loading loading-bars loading-lg ms-96 mt-56"></span>) :
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-24">
                        {jobItems.length > 0 ? (
                            jobItems.map(myPostedJob => <JobSingleCard
                                key={myPostedJob._id}
                                singleJob={myPostedJob}
                                onDelete={handleDeleteJob}
                            ></JobSingleCard>)
                        ) : (<h2 className="text-center font-semibold text-2xl">Your cart is empty</h2>)}
                    </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default MyPostedJobs;