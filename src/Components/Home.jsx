import React from 'react';
import Navbar from './Navbar';
import Banner from './banner';
import CityJobs from './CityJobs';
import FeatureTask from './FeatureTask';
import AboutMe from './AboutMe';
import CountUp from './CountUp';
import CountUpp from './CountUp';
import ThemeControler from './ThemeControler';
import MyLottie from './MyLottie';


const Home = () => {
    return (
        <div >
        
          <Banner></Banner>
          <CityJobs></CityJobs>
          <FeatureTask></FeatureTask>
          <CountUpp></CountUpp>
          <AboutMe></AboutMe>
          <MyLottie></MyLottie>

            
        </div>
    );
};

export default Home;