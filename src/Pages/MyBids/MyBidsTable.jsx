import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyBidsTable = ({ singleBidData }) => {
    const { email, deadline, title, bidAmount, status, _id } = singleBidData
    const [showCompleteButton, setShowCompleteButton] = useState(false);
    // const [status, setStatus] = useState(status)
    
    const handleComplete = () => {
        // Update the status to "Completed" on the frontend
        const updatedStatus = 'Completed';

        // Send a PUT request to update the status on the server
        axios

            .put(`http://localhost:5000/myBids/complete/${_id}`, { status: updatedStatus })
            .then((res) => {
                if (res.data.success) {
                    // Update the local state to 'Completed'
                    setShowCompleteButton(false);
                    console.log('Status updated to Completed');
                } else {
                    console.error('Failed to update status on the server');
                }
            })
            .catch((error) => {
                console.error('Error updating status', error);
            });
    };

    useEffect(() => {
        if (status === 'In progress') {
            setShowCompleteButton(true);
        }
    }, [status]);
    return (
        <tr>


            <td>
                {title}

            </td>
            <td>{deadline}</td>
            <th>
                <button className="btn btn-ghost btn-xs">{email}</button>
            </th>
            {/* <th>
                {status === 'In progress' ? (
                    <span className="text-green-500 font-semibold">In progress</span>
                ) : (
                    <button className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
                )}
            </th> */}
            <th>
            <button className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
            
            <th>
                {showCompleteButton &&  (
                    <button className="btn btn-primary btn-xs" onClick={handleComplete}>
                       completed
                    </button>
                )}
            </th>
        </tr >
    );
};

export default MyBidsTable;