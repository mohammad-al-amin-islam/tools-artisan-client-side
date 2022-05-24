import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ index, order }) => {
    const { customerName, toolsName } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{customerName}</td>
            <td>{toolsName}</td>
            <td><Link to='/'>pay</Link></td>
            <td><button className='btn btn-xs'>Cancel</button></td>
        </tr>
    );
};

export default OrderRow;