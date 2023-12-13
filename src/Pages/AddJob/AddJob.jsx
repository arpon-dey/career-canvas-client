import { Option, Select } from "@material-tailwind/react";
import axios from "axios";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const AddJob = () => {
    const { user } = useContext(AuthContext)
    const [category, setCategory] = useState("")
    const location = useLocation()
    console.log(location);

    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const jobTitle = form.title.value;
        const date = form.date.value;
        const maxPrice = form.maxPrice.value;
        const minPrice = form.minPrice.value;
        const description = form.description.value;
        const jobCategory = category
        const email = form.employerEmail.value
        const job = {
            jobTitle,
            date,
            jobCategory,
            maxPrice,
            minPrice,
            description,
            email
        };

        console.log(job);
        axios.post('https://career-canvas-server-ten.vercel.app/jobs', job)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Job added successfully',
                        'success'
                    )
                }
            })


        
    }
    const generateTitle = () => {
        switch (location.pathname) {
            case '/addJob':
                return 'Digitalenet| Add job';
            default:
                return 'Digitalenet';
        }
    };
    return (
        <div className="">
            <Navbar></Navbar>
            <Helmet>
                <title>{generateTitle()}</title>
            </Helmet>
            <div className="md:w-10/12 mx-auto my-8">

                <form onSubmit={handleAddJob}>


                    <div className="card  w-full  shadow-2xl bg-gradient-to-br from-teal-500 to-gray-100   ">
                        <div className="card-body">

                            <p className="btn btn-neutral w-1/2 mx-auto hover:text-white text-black text-2xl font-bold glass mb-4">
                                Add a Job
                            </p>
                            <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-2">
                                <input
                                    type="text"
                                    placeholder="Job Title"
                                    name="title"
                                    className="input input-bordered bg-white text-black"
                                />
                                <input
                                    type="date"
                                    placeholder="Deadline"
                                    name="date"
                                    className="input input-bordered bg-white text-black"
                                />
                            </div>

                            <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-2">
                                <input
                                    type="email"
                                    placeholder="Employer email"
                                    value={user?.email}
                                    readOnly
                                    name="employerEmail"
                                    className="input input-bordered bg-white text-black"
                                />
                                <Select
                                    label="All categories"
                                    onChange={(value => setCategory(value))}
                                    className="bg-white p-5 py-6 -my-1 "
                                >
                                    <Option value="Web development">Web development</Option>
                                    <Option value="Digital marketing">Digital marketing</Option>
                                    <Option value="Graphics Design">Graphics Design</Option>
                                </Select>
                            </div>

                            <div className="form-control  gap-2">
                                <input
                                    type="text"
                                    placeholder="Short description"
                                    name="description"
                                    className="input input-bordered bg-white text-black"
                                />
                            </div>
                            <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-2">
                                <input
                                    type="number"
                                    placeholder="Minimum price"
                                    name="minPrice"
                                    className="input input-bordered bg-white text-black"
                                />
                                <input
                                    type="number"
                                    placeholder="Maximum price"
                                    name="maxPrice"
                                    className="input input-bordered bg-white text-black"
                                />
                            </div>

                            <div className="form-control mt-6">
s                                <input type="submit" className="btn btn-block bg-gradient-to-t from-teal-700 to-teal-400     border-0 hover:bg-blue-gray-300 text-white" value="Add job" />
                            </div>
                        </div>
                    </div>

                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddJob;