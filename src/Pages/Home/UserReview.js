import React, { useEffect, useState } from 'react';


const UserReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://dry-headland-80440.herokuapp.com/ratings')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='bg-slate-100 p-10'>
            <div className='pt-10 mb-5'>
                <h1 className="text-4xl text-center font-bold text-primary ">User Reviews:{reviews?.length}</h1>
                <div className='border w-56 h-1 mx-auto mt-4 bg-amber-700'></div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-9 '>
                {
                    reviews.map(review => <div key={review._id} className="card w-80 lg:w-96 bg-base-100 shadow-xl">

                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Users Name: {review.name}</h2>
                            <h3 className="font-bold">Given ratings: {review.ratings}</h3>
                            <p><span className='font-bold'>Comments: </span>{review.description}</p>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UserReview;