import React from 'react';
import AllTools from './AllTools';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllTools></AllTools>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;