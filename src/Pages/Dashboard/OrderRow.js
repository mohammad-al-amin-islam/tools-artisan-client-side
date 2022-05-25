import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ index, order, setDeleteItem }) => {
    const { customerName, toolsName } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{customerName}</td>
            <td>{toolsName}</td>
            <td>
                {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs'>Pay</button></Link>}
                {(order.price && order.paid) && <div>
                    <span>Paid</span>
                    <p>TransactionId:{order.transactionId}</p>
                </div>}
            </td>
            <td>{!order.paid ? <label onClick={() => setDeleteItem(order)} for="my-modal" class="btn btn-xs modal-button">Cancel</label> : <span>Can't Cancel after payment</span>}</td>
        </tr >
    );
};

export default OrderRow;