import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1lxQLTc38bFnonmsCIV7DHvBv2IikwBjZ8kzRxqt4VX6gLFUAftzZcs4Twa8if4VoQtEaTrnTMfis2zhMir93900E3CB0mXk');

const Payment = () => {
    const { id } = useParams();
    const { data: order, isLoading } = useQuery(['orders', id], () => fetch(`http://localhost:5000/orders/${id}`, {
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

            <div className="hero min-h-max mt-28 bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center">
                        <h1 className='text-2xl'>Payment for {order.toolsName}</h1>
                        <p>Ordered quantity:{order.quantity}</p>
                        <p>Price:{order.price}</p>
                    </div>
                    <div className="card flex w-full lg:w-96  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm  order={order} />
                            </Elements>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;