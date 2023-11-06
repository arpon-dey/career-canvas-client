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

        
        if (user && user.email) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setBidData(data);
                });
        } else {
            setBidData([]); // Set an empty array if the user is not available
        }
    }, [user]);
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