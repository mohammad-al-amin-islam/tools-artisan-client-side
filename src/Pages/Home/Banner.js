import React from 'react';
import BannerImg from '../../images/banner-img.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={BannerImg} alt='Banner Images' />
                <div>
                    <h1 class="text-6xl font-bold text-info">Mordern Power Tools</h1>
                    <p class="py-6 text-xl">All hardware equipments and accessories available here</p>
                    <button class="btn btn-outline btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;