import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const BidReqTable = ({ requestedBid }) => {
    const { title, deadline, email, bidAmount, _id } = requestedBid
    const [status, setStatus] = useState('Pending');
    const [showAcceptButton, setShowAcceptButton] = useState(true);
    const [showRejectButton, setShowRejectButton] = useState(true);


    // reject functionality
    const handleReject = (_id) => {
        axios.put(`https://career-canvas-server-ten.vercel.app/myBids/reject/${_id}`)
            .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount === 0 || res.data.matchedCount === 1 || res.data.modifiedCount === 1) {
                    setStatus("Rejected");
                    setShowRejectButton(false);
                    setShowAcceptButton(false);
                    Swal.fire(
                        'Sorry!',
                        'Job rejected ',
                        'error'
                    )
                } else {
                    alert("The bid has already been rejected.");
                }
            });
    };

    useEffect(() => {
        axios.get(`https://career-canvas-server-ten.vercel.app/myBids/reject/${_id}`)
            .then((res) => {
                if (res.data.status === 'Rejected') {
                    setStatus("Rejected");
                    setShowRejectButton(false);
                    setShowAcceptButton(false);
                }
            });
    }, [_id])


    // accept functionality

    const handleAccept = (_id) => {
        axios.put(`https://career-canvas-server-ten.vercel.app/myBids/accept/${_id}`)
            .then((res) => {
                if (res.data.success || res.data.modifiedCount === 0 || res.data.matchedCount === 1 || res.data.modifiedCount === 1) {
                    setStatus("In progress");
                    setShowRejectButton(false);
                    setShowAcceptButton(false);
                    Swal.fire(
                        'Good job!',
                        'Job accepted by employer successfully',
                        'success'
                    )
                } else {
                    alert("The bid has already is now in progress.");
                }
            })

    };



    useEffect(() => {
        axios.get(`https://career-canvas-server-ten.vercel.app/myBids/reject/${_id}`)
            .then((res) => {
                if (res.data.status === 'Rejected') {
                    setStatus("Rejected");
                    setShowRejectButton(false);
                    setShowAcceptButton(false);
                }
                else if (res.data.status === 'In progress') {
                    setStatus("In progress");
                    setShowRejectButton(false);
                    setShowAcceptButton(false);
                }
                else if (res.data.status === 'completed') {
                    setStatus("completed");
                    setShowRejectButton(false);
                    setShowAcceptButton(false);
                }
            });
    }, [_id]);






    return (
        <tr>


            <td>
                {title}

            </td>
            <td>{email}</td>
            <th>
                <button className="btn btn-ghost btn-xs">{deadline}</button>
            </th>
            <td>{bidAmount}</td>
            <th>
                
                <button className="btn btn-ghost btn-xs">{status}</button>
            </th>
            <th className=' flex gap-4'>
                {
                    status === 'In progress' ? 
                    <progress className="progress w-24 ms-7 mt-2"></progress>:
                    <>
                    {showAcceptButton && (
                    <button className="btn btn-success btn-xs" onClick={() => handleAccept(_id)}>
                        Accept
                    </button>
                )}
                {showRejectButton && (
                    <button className="btn btn-error btn-xs" onClick={() => handleReject(_id)}>
                        Reject
                    </button>
                )}</>
                }

                

            </th>



        </tr>
    );
};

export default BidReqTable;