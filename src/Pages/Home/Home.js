import React from 'react';
import AboutUs from './AboutUs';
import AllTools from './AllTools';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import DealsOfDay from './DealsOfDay';
import UserReview from './UserReview';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Home = () => {
    const [user,loading] = useAuthState(auth)
    if(loading){
        return <Loading></Loading>
    }
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