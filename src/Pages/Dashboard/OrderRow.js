import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ index, order }) => {
    const { customerName, toolsName } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{customerName}</td>
            <td>{toolsName}</td>
            <td>
                {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs'>Pay</button></Link>}
                {(order.price && order.paid) && <span>pay</span>}
            </td>
            <td>{!order.paid ? <button className='btn btn-xs'>Cancel</button> : <span>can't Cancel after payment</span>}</td>
        </tr >
    );
};

export default OrderRow;