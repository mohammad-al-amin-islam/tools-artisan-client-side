import React from 'react';
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
        </div>
    );
};

export default Home;