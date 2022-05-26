import React from 'react';
import { toast } from 'react-toastify';

const AllOrderRow = ({ order, index, refetch }) => {
    const { customerName, toolsName, paid } = order;

    const handlePending = id => {
        fetch(`http://localhost:5000/orders/shipped/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('You can not shipped order');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully Shipped the order')
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{customerName}</td>
            <td>{toolsName}</td>
            <td>{paid !== true ? <p>Unpaid</p> : <p>Paid</p>}</td>
            <td>{(paid === true && order?.status !== true) && <button onClick={() => handlePending(order._id)} className='btn btn-xs'>Pending</button>}</td>
            <td>{paid !== true ? <p>Unpaid</p> : <p>Paid</p>}</td>
        </tr>
    );
};

export default AllOrderRow;