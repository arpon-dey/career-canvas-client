import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner';
import JobTabs from './JobTabs';
import Latest from './Latest/Latest';
import Support from './Support/Support';

const Home = () => {

    const location = useLocation()

    const generateTitle = () => {
        switch (location.pathname) {
            case '/':
                return 'Digitalent | Home';
            case '/addJob':
                return 'Digitalent | Add job';
            default:
                return 'PHero';
        }
    };
   
    return (
        <div>
            <Helmet>
                <title>{generateTitle()}</title>
            </Helmet>
            <Navbar></Navbar>

            <Banner></Banner>
            <JobTabs></JobTabs>
            <Latest></Latest>
            <Support></Support>
            <Footer></Footer>
       
        </div >
    );
};

export default Home;
