import {
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react";
import axios from "axios";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProviders";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const JobDetails = () => {
    const {user} = useContext(AuthContext)
    const JobDetails = useLoaderData()
    console.log(JobDetails);
    const navigate = useNavigate()
    const { _id, jobCategory, jobTitle, description, date, minPrice, maxPrice, email } = JobDetails

    const handleBidRequest = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        
        const title = jobTitle
        const email = form.get('email')
        const deadline = form.get('date')
        const bidAmount = form.get('bidAmount')
        const job_id = _id
        const employerEmail = form.get('buyerEmail')
        
        const myBid = { title, email, deadline, bidAmount, job_id, employerEmail}
        console.log(myBid)



        axios.post('http://localhost:5000/myBids', myBid)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Bid added successfully',
                        'success'
                    )
                }
                navigate('/myBids')

            })


      

    }
    const generateTitle = () => {
        switch (location.pathname) {
            case '/addJob':
                return 'Digitalenet| Job details';
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
                            
                            <input type="number" name="bidAmount" placeholder="Salary(Bidding amount)" className="input input-bordered" required />
                            <input type="date" name="date" placeholder="deadline" defaultValue={date} className="input input-bordered" required />
                        </div>
                        <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-4">
                            
                            <input type="email" placeholder="email" value={user.email}  name="email" className="input input-bordered" required readOnly />
                            <input type="email" placeholder="Buyer email" value={email} name="buyerEmail"   className="input input-bordered" required readOnly />
                            
                        </div>
                        <div className="form-control mt-6">
                           
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