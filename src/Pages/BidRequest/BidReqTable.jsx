import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BidReqTable = ({ requestedBid }) => {
    const { title, deadline, email, bidAmount, _id } = requestedBid
    const [status, setStatus] = useState('Pending');
    const [showAcceptButton, setShowAcceptButton] = useState(true);
    const [showRejectButton, setShowRejectButton] = useState(true);

    const handleReject = (_id) => {
        axios.put(`http://localhost:5000/myBids/reject/${_id}`)
            .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount == 0) {
                    setStatus("Rejected");
                    setShowRejectButton(false);
                    setShowAcceptButton(false);
                    alert("The bid has been rejected.");
                } else {
                    alert("The bid has already been rejected.");
                }
            });
    };

    useEffect(() => {
        // Check the status from the server initially
        axios.get(`http://localhost:5000/myBids/reject/${_id}`)
            .then((res) => {
                if (res.data.status === 'Rejected') {
                    setStatus("Rejected");
                    setShowRejectButton(false);
                    setShowAcceptButton(false);
                }
            });
    }, [_id])
    




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
        <th>

        {showAcceptButton && (
                <button className="btn btn-success btn-xs">
                    Accept
                </button>
            )}

        </th>
        <th>
            {showRejectButton && (
                <button className="btn btn-error btn-xs" onClick={() => handleReject(_id)}>
                    Reject
                </button>
            )}
        </th>

    </tr>
);
};

export default BidReqTable;