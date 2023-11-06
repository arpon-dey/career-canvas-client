import React from 'react';

const BidReqTable = ({requestedBid}) => {
    const {title, deadline, email, bidAmount} = requestedBid
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
                <button className="btn btn-ghost btn-xs">pending...</button>
            </th>
            <td className=' flex gap-4'>
                <button className='btn btn-sm btn-success'>Accept</button>
                <button className='btn btn-sm btn-error'>Reject</button>
            </td>
           
        </tr>
    );
};

export default BidReqTable;