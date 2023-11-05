import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner';
import JobTabs from './JobTabs';

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <JobTabs></JobTabs>
           <Footer></Footer>
        </div>
    );
};

export default Home;