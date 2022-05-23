import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tools = ({ tool }) => {
    const { _id, name, image, description, price, minOrder, availableQuantity } = tool;
    const navigate = useNavigate();
    return (
        <div class="card w-80 lg:w-96 bg-base-100 shadow-xl hover:-translate-y-6 ease-in-out duration-300 mt-10">
            <figure class="px-10 py-10 bg-slate-400">
                <img src={image} alt={name} class="rounded-xl" />
            </figure>
            <div class="card-body items-start">
                <h2 class="card-title">{name}</h2>
                <div>
                    <p>Description:{description}</p>
                    <p>Minimum order:{minOrder}</p>
                    <p>Available Quantity:{availableQuantity}</p>
                    <p>Price: <span className='text-3xl text-success font-bold'>{price}</span></p>
                </div>
                <div class="card-actions mt-3 mx-auto">
                    <button onClick={() => navigate(`/purchase/${_id}`)} class="btn btn-outline btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tools;