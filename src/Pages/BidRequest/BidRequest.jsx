import { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const BidRequest = () => {
    const [bidReq, setBidReq] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/myBids')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBidReq(data)
        })
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <div className='h-96'>
                {
                    bidReq.map(bid=><p key={bid._id}> {bid.employerEmail} </p>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BidRequest;