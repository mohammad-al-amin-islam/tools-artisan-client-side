import React from 'react';
import Countdown from 'react-countdown';

const DealsOfDay = () => {
    return (
        <div className='bg-slate-100 pb-10'>
            <div className='pt-10'>
                <h1 className="text-4xl text-center font-bold text-primary uppercase ">Deal of the day</h1>
                <div className='border w-56 h-1 mx-auto mt-4 bg-amber-700'></div>
            </div>
            <div class="hero min-h-screen ">
                <div class="hero-content grid grid-cols-1 lg:grid-cols-2">
                    <div className='mx-auto'>
                        <img src="https://www.rflrmil.com/images/15648979841.jpg" class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='text-center lg:text-left p-5'>
                        <h1 class="text-3xl font-bold">UNIVERSAL WRENCH 9/32MM</h1>
                        <p class="py-6 text-2xl">Price : $550</p>
                        <p class="py-6 text-2xl uppercase">Deal Ends In: <Countdown className='text-3xl' date={Date.now() + 10000000} /></p>
                        <br />

                        <button class="btn btn-primary mt-5">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealsOfDay;