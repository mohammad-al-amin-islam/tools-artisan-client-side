import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllOrderRow from './AllOrderRow';

const ManageAllOrders = () => {
    const { data: orders, isLoading,refetch } = useQuery('orders', () => fetch('http://localhost:5000/allorders', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-2xl'>Manage all order here:{orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer Name</th>
                            <th>Bought Product</th>
                            <th>Payment Status</th>
                            <th>Status</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <AllOrderRow
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                            ></AllOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;