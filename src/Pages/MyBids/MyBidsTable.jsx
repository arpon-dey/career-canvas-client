import React, { useState } from 'react';

const MyBidsTable = ({ singleBidData }) => {
    const { email, deadline, title, bidAmount, status, _id } = singleBidData
    const [showCompleteButton, setShowCompleteButton] = useState(true);
    // const [bidStatus, setBidStatus] = useState(status);

    // const handleComplete = (_id)=>{
    //     axios.put(`http://localhost:5000/myBids/complete/${_id}`)
    //     .then((res) => {
    //         console.log(res.data);
    //         if (res.data.modifiedCount > 0) {
    //             setBidStatus('Completed');
    //         }
    //     });
    // }

    const handleComplete = () => {
        setShowCompleteButton(false);
    };
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
                {status === 'In progress' ? (
                    <span className="text-green-500 font-semibold">In progress</span>
                ) : (
                    <button className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
                )}
            </th>
            
            <th>
                {showCompleteButton && (
                    <button className="btn btn-primary btn-xs" onClick={handleComplete}>
                        Complete
                    </button>
                )}
            </th>
        </tr >
    );
};

export default MyBidsTable;