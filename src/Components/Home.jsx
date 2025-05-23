import React from 'react';
import Navbar from './Navbar';
import Banner from './banner';
import CityJobs from './CityJobs';
import FeatureTask from './FeatureTask';
import AboutMe from './AboutMe';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <CityJobs></CityJobs>
          <FeatureTask></FeatureTask>
          <AboutMe></AboutMe>
            
        </div>
    );
};

export default Home;