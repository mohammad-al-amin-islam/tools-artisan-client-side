import React from 'react';
import NotFoundImg from '../../images/404-page-error.png'

const NotFound = () => {
    return (
        <div className='flex justify-center items-center'>
            <figure class="px-10 pt-10 mb-5">
                <img src={NotFoundImg} alt="Shoes" class="not found" />
            </figure>
        </div>
    );
};

export default NotFound;