import React from 'react';
import business from '../../images/business.png'
import { CogIcon, FlagIcon, UserGroupIcon } from '@heroicons/react/solid'
const BusinessSummary = () => {
    return (
        <div className='bg-slate-100'>
            <div className='pt-10'>
                <h1 className="text-4xl text-center font-bold text-primary ">Millons Business Trust Us</h1>
                <div className='border w-60 h-1 mx-auto mt-4 bg-amber-700'></div>
            </div>
            <div style={{ backgroundImage: `url(${business})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='px-10 py-10 grid grid-cols-1 lg:grid-cols-3'>
                <div className='text-center'>
                    <FlagIcon className="h-32 w-32 text-blue-500 mx-auto" />
                    <h1 className="text-6xl">72+</h1>
                    <p className='text-2xl'>Countries</p>
                </div>
                <div className='text-center'>
                    <UserGroupIcon className="h-32 w-32 text-blue-500 mx-auto" />
                    <h1 className="text-6xl">100+</h1>
                    <p className='text-2xl'>Customers</p>
                </div>
                <div className='text-center'>
                    <CogIcon className="h-32 w-32 text-blue-500 mx-auto" />
                    <h1 className="text-6xl">60+</h1>
                    <p className='text-2xl'>Tools</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;