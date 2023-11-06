import React from 'react';

const MyBidsTable = ({singleBidData}) => {
    const { email, deadline,title, bidAmount} = singleBidData
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
                <button className="btn btn-ghost btn-xs">Pending</button>
            </th>
        </tr>
    );
};

export default MyBidsTable;