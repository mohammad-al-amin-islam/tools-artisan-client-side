import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const [tool, setTool] = useState('');
    const [error, setError] = useState("");
    const [ordered, setOrdered] = useState('')
    const [active, setActive] = useState(null);
    const { id } = useParams();
    const { _id, name, image, description, price, minOrder, availableQuantity } = tool;

    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/tool/${id}`)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [id]);



    const inputQuantity = event => {
        const orderQuantity = event.target.value;
        const minimum = parseInt(minOrder);
        const available = parseInt(availableQuantity);
        console.log(orderQuantity);
        if (orderQuantity < minimum) {
            setError(<p>You have to order more.</p>);
            setActive(true);
            setOrdered(orderQuantity);
        }
        else if (orderQuantity > available) {
            setError(<p>You have to order less. </p>);
            setActive(true);
        }
        else {
            setError(" ");
            setActive(!active);
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        const givenOrder = ordered;
        console.log(givenOrder);

    }
    if (loading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <div className='pt-10'>
                <h1 className="text-4xl text-center font-bold text-primary ">Purchase Here</h1>
                <div className='border w-56 h-1 mx-auto mt-4 bg-amber-700'></div>
            </div>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="text-center">
                        <h1 class="text-2xl font-bold mr-10">{name}</h1>
                        <figure class="pl-12 pr-5 pt-10">
                            <img src={image} alt="" class="rounded-xl" />
                        </figure>
                        <div className='text-left'>
                            <p>Description: {description}</p>
                            <p>Prices: {price}</p>
                            <p>Minimum Order: {minOrder}</p>
                            <p>Available Quantity: {availableQuantity}</p>
                        </div>
                    </div>
                    <div class="card flex w-full lg:w-1/2  shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form onSubmit={handleSubmit}>
                                <h1 className="text-2xl mb-5 text-center">Purchase Form</h1>
                                <input disabled value={user.displayName} type="text" class="input input-bordered w-full mb-5" />
                                <input disabled value={user.email} type="text" placeholder="Type here" class="input input-bordered w-full mb-5" />
                                <input name='number' type="text" placeholder="Your Number" class="input input-bordered w-full mb-5" required />

                                <input onChange={inputQuantity} name='order' type="text" placeholder="Order quantity" class="input input-bordered w-full mb-5" required />
                                {error}
                                <input disabled={active} className='btn btn-primary w-full' type="submit" value='Purchase' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;