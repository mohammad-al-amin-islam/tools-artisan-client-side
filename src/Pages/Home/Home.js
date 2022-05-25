import React from 'react';
import AllTools from './AllTools';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import UserReview from './UserReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllTools></AllTools>
            <BusinessSummary></BusinessSummary>
            <UserReview></UserReview>
        </div>
    );
};

export default Home;