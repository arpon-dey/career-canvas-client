import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import MyBidsTable from './MyBidsTable';

const MyBids = () => {
    const {user} = useContext(AuthContext)
    const [bidData, setBidData] = useState([])
    const url = `http://localhost:5000/myBids?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const updatedBidData = data.map((bid) => {
                    if (bid.status === "Rejected") {
                        
                        return { ...bid, status: "Rejected" };
                    }
                    
                    return bid;
                });
    
                setBidData(updatedBidData);
            });
    }, []);
    
    return (
        <div>
            <Navbar></Navbar>

            <div className="overflow-x-auto md:h-96">
                <table className="table w-9/12 mx-auto border-2 border-orange-500">
                    {/* head */}
                    <thead>
                        <tr className='text-xl border-b-deep-orange-700 border-b-2 text-center'>
                            <th >Title</th>
                            <th>Deadline</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Complete</th>
                        </tr>
                    </thead>
                    <tbody className='text-center font-semibold text-base'>
                            {
                                bidData.map(singleBidData => <MyBidsTable
                                key={singleBidData._id}
                                singleBidData={singleBidData}
                                ></MyBidsTable>)
                            }

                    </tbody>


                </table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyBids;