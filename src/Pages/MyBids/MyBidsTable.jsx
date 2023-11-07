import React, { useState } from 'react';

const MyBidsTable = ({singleBidData}) => {
    const { email, deadline,title, bidAmount, status} = singleBidData
    // const [status, setStatus] = useState('Pending');
    const [showCompleteButton, setShowCompleteButton] = useState(true);


    const handleComplete = () => {
        setStatus('Complete');
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
                <button className="btn btn-ghost btn-xs">{status? status : 'pending'}</button>
            </th>
            <th>
                {showCompleteButton && (
                    <button className="btn btn-primary btn-xs" onClick={handleComplete}>
                        Complete
                    </button>
                )}
            </th>
        </tr>
    );
};

export default MyBidsTable;