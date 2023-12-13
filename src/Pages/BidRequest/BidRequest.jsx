import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Providers/AuthProviders';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import BidReqTable from './BidReqTable';

const BidRequest = () => {
    const [bidReq, setBidReq] = useState([])
    const {user} = useContext(AuthContext)
    useEffect(()=>{
        fetch('https://career-canvas-server-ten.vercel.app/myBids')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBidReq(data)
        })
    },[])
    const generateTitle = () => {
        switch (location.pathname) {
            case '/addJob':
                return 'Digitalenet| Bid request';
            default:
                return 'Digitalenet';
        }
    };
    const filteredBidReq = bidReq.filter(requestedBid => requestedBid.employerEmail === user?.email);
    return (
        <div>
            <Helmet>
                <title>{generateTitle()}</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="overflow-x-auto ">
                <table className="table w-9/12 mx-auto border-2 border-orange-500">
                    {/* head */}
                    <thead>
                        <tr className='text-xl border-b-deep-orange-700 border-b-2 text-center'>
                            <th >Job Title</th>
                            <th>Email(Who bid)</th>
                            <th>Deadline</th>
                            <th>Price</th>
                            <th>status</th>
                            <th>accept/reject</th>
                           

                        </tr>
                    </thead>
                    <tbody className='text-center font-semibold text-base'>
                            {
                                filteredBidReq.map(requestedBid => <BidReqTable
                                key={requestedBid._id}
                                requestedBid={requestedBid}
                                ></BidReqTable>)
                            }

                    </tbody>


                </table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BidRequest;