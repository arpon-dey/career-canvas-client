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
                <button className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
            {/* <th>
                {status=== 'in progress' ? 
                    <button className="btn btn-primary btn-xs" >
                        Complete
                    </button>
                        {/* onClick={()=>handleComplete(_id)} */}
            {/* :<></>
                }
        </th> * /} */}
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