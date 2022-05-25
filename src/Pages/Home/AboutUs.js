import { CashIcon, GiftIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className='pt-7'>
                <h1 className="text-4xl text-center font-bold text-primary ">About Us</h1>
                <div className='border w-56 h-1 mx-auto mt-4 bg-amber-700'></div>
            </div>
            <div className='bg-cyan-300 rounded-lg m-20 p-10 text-justify'>
                <div>
                    <div className='mb-5'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-9'>

                            <div className='text-center lg:text-left lg:flex lg:items-center'>
                                <CashIcon className="h-20 w-20 text-green-800 mx-auto" />
                                <div className='text-gray-800'>
                                    <p className='text-2xl'>Cash on Delivery</p>
                                    <p>100% money back guarantee</p>
                                </div>
                            </div>
                            <div className='text-center lg:text-left lg:flex lg:items-center'>
                                <GiftIcon className="h-20 w-20 text-green-800 mx-auto" />
                                <div className='text-gray-800'>
                                    <p className='text-2xl'>SPECIAL GIFT CARD</p>
                                    <p>Offer special bonuses with gift</p>
                                </div>
                            </div>
                            <div className='text-center lg:text-left lg:flex lg:items-center'>
                                <PhoneIcon className="h-20 w-20 text-green-800 mx-auto" />
                                <div className='text-gray-800'>
                                    <p className='text-2xl'>CUSTOMER SERVICE</p>
                                    <p>Call us 24/7</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;