import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner';
import JobTabs from './JobTabs';
import Support from './Support/Support';

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <JobTabs></JobTabs>
           <Support></Support>
           <Footer></Footer>
        </div>
    );
};

export default Home;