import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyBidsTable = ({ singleBidData }) => {
    const { email, deadline, title, bidAmount, status, _id } = singleBidData
    const [showCompleteButton, setShowCompleteButton] = useState(false);
    const [localStatus, setLocalStatus] = useState(status);
    
    const handleComplete = () => {
        const updatedStatus = 'Completed';

        axios

            .put(`https://career-canvas-server-ten.vercel.app/myBids/complete/${_id}`, { status: updatedStatus })
            .then((res) => {
                if (res.data.success) {
                    setLocalStatus(updatedStatus);
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
           
            <th>
            <button className="btn btn-ghost btn-xs">{localStatus ? localStatus : 'pending'}</button>
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