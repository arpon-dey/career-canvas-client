import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const MyBids = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-xl'>
                            <th >Title</th>
                            <th>Deadline</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr>
                            
                            
                            <td>
                                Zemlak, Daniel and Leannon
                                
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-xs">Pending</button>
                            </th>
                        </tr> 
                    </tbody>
                    

                </table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyBids;