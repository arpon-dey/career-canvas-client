import { Option, Select } from '@material-tailwind/react';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProviders';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const UpdateJob = () => {
    const {user } = useContext(AuthContext)
    const [category, setCategory] = useState("")
    const olderJob = useLoaderData()
    console.log(olderJob);
    const { _id,jobTitle, date, jobCategory, description,minPrice,maxPrice } = olderJob

    const handleUpdateJob = e =>{
        e.preventDefault();
        const form = e.target;
        const jobTitle = form.title.value;
        const date = form.date.value;
        const maxPrice = form.maxPrice.value;
        const minPrice = form.minPrice.value;
        const description = form.description.value;
        const jobCategory = category
        const email = form.employerEmail.value
        const updatedJob = {
            jobTitle,
            date,
            jobCategory,
            maxPrice,
            minPrice,
            description,
            email
        };
        console.log(updatedJob);

        axios.put(`http://localhost:5000/jobs/update/${_id}`, updatedJob)
        .then(res => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                Swal.fire(
                    'Good job!',
                    'Job updated successfully',
                    'success'
                )
            }
        })
        
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="md:w-10/12 mx-auto my-8">

                <form onSubmit={handleUpdateJob}>


                    <div className="card  w-full  shadow-2xl bg-gradient-to-br from-teal-500 to-gray-100   ">
                        <div className="card-body">

                            <p className="btn btn-neutral w-1/2 mx-auto hover:text-white text-black text-2xl font-bold glass mb-4">
                                Update a Job
                            </p>
                            <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-2">
                                <input
                                    type="text"
                                    placeholder="Job Title"
                                    name="title"
                                    defaultValue={jobTitle}
                                    className="input input-bordered bg-white text-black"
                                />
                                <input
                                    type="date"
                                    placeholder="Deadline"
                                    name="date"
                                    defaultValue={date}
                                    className="input input-bordered bg-white text-black"
                                />
                            </div>

                            <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-2">
                                <input
                                    type="email"
                                    placeholder="Employer email"
                                    value={user.email}
                                    readOnly
                                    name="employerEmail"
                                    className="input input-bordered bg-white text-black"
                                />
                                <Select
                                    label="All categories"
                                    onChange={(value => setCategory(value))}
                                    defaultValue={jobCategory}
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
                                    defaultValue={description}
                                    className="input input-bordered bg-white text-black"
                                />
                            </div>
                            <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-2">
                                <input
                                    type="number"
                                    placeholder="Minimum price"
                                    name="minPrice"
                                    defaultValue={minPrice}
                                    className="input input-bordered bg-white text-black"
                                />
                                <input
                                    type="number"
                                    placeholder="Maximum price"
                                    name="maxPrice"
                                    defaultValue={maxPrice}
                                    className="input input-bordered bg-white text-black"
                                />
                            </div>

                            <div className="form-control mt-6">
                                {/* <button className="btn btn-block">Login</button> */}
                                <input type="submit" className="btn btn-block bg-gradient-to-t from-teal-700 to-teal-400     border-0 hover:bg-blue-gray-300 text-white" value="Update product" />
                            </div>
                        </div>
                    </div>

                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateJob;