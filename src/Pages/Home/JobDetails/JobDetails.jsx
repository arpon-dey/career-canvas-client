import {
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react";
import { useContext } from "react";
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from "../../../Providers/AuthProviders";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const JobDetails = () => {
    const JobDetails = useLoaderData()
    const {user} = useContext(AuthContext)
    console.log(JobDetails);
    const { _id, jobCategory, jobTitle, description, date, minPrice, maxPrice, email } = JobDetails

    const handleBidRequest = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)

        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const photoInput = e.target.querySelector('input[type="file"]');
        const photoFile = photoInput.files[0];
        console.log({ name, email, photoFile, password })

    }
    return (
        <div>
            <Navbar></Navbar>
            <Card className="w-full max-w-[56rem] mx-auto flex-row my-8">

                <CardBody>
                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                        {jobCategory}
                    </Typography>
                    <Typography variant="h3" color="blue-gray" className="mb-2">
                        {jobTitle}
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                        {description}
                    </Typography>
                    <div className=" flex justify-start gap-10">
                        <Typography variant="h5" color="gray" className="mb-2 font-semibold bg-blue-gray-100 p-3 glass rounded-xl">
                            Deadline: {date}
                        </Typography>
                        <Typography variant="h5" color="gray" className="mb-2 font-semibold bg-blue-gray-100 p-3 glass rounded-xl">
                            Salary range: $ {maxPrice}-{minPrice}
                        </Typography>
                    </div>
                </CardBody>
            </Card>

            <div className="w-full max-w-[56rem] mx-auto flex-row my-8">
                <div className="card  w-full  shadow-2xl ">
                    <form className="card-body" onSubmit={handleBidRequest}>
                        <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-4">
                            
                            <input type="number" placeholder="Salary(Bidding amount)" className="input input-bordered" required />
                            <input type="date" placeholder="deadline" defaultValue={date} className="input input-bordered" required />
                        </div>
                        <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-4">
                            
                            <input type="email" placeholder="email" value={user.email}  className="input input-bordered" required readOnly />
                            <input type="email" placeholder="Buyer email" value={email} className="input input-bordered" required readOnly />
                            
                        </div>
                        <div className="form-control mt-6">
                            {/* <button className="btn btn-primary">Bid on the project</button> */}
                            {/* <button className={
                                user.email==email? 'btn btn-disabled' : 'btn btn-primary'}>Bid on the project</button> */}
                                <input type="submit" className={
                                user.email==email? 'btn btn-disabled' : 'btn btn-primary'} value='Bid on the project'/>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default JobDetails;