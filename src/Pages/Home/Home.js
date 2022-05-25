import React from 'react';
import AboutUs from './AboutUs';
import AllTools from './AllTools';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import DealsOfDay from './DealsOfDay';
import UserReview from './UserReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllTools></AllTools>
            <BusinessSummary></BusinessSummary>
            <UserReview></UserReview>
            <DealsOfDay></DealsOfDay>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;