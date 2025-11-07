import React from 'react';
import Navbar from './Navbar';
import Banner from './banner';
import CityJobs from './CityJobs';
import FeatureTask from './FeatureTask';
import AboutMe from './AboutMe';
import CountUpp from './CountUp';
import MyLottie from './MyLottie';
import TypeWritter from './TypeWritter';
import FAQ from './FAQ';
import BrowseTalent from './BrowseTalent';


const Home = () => {
  return (
    <div >

      <Banner></Banner>
      <CityJobs></CityJobs>
      <FeatureTask></FeatureTask>
      <CountUpp></CountUpp>
      <FAQ></FAQ>
      <BrowseTalent></BrowseTalent>
      <AboutMe></AboutMe>

      <MyLottie></MyLottie>
      <TypeWritter></TypeWritter>





    </div>
  );
};

export default Home;