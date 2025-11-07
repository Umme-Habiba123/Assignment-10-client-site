import React from 'react';
import Lottie from 'lottie-react';
import animation from '../../public/animation.json';
import TypeWritter from './TypeWritter';

const MyLottie = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-0 max-w-7xl mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-600 tagesschrift-regular mb-10">
        Let's Have a chat...
      </h1>

      <div className="mx-auto w-full max-w-xl sm:max-w-2xl lg:max-w-4xl">
        <Lottie 
          animationData={animation} 
          loop={true} 
          className="w-full h-auto"
        />
      </div>

      {/* Optional: Typewriter below animation */}
      <div className="mt-6 text-lg md:text-xl text-black">
        {/* <TypeWritter /> */}
      </div>
    </section>
  );
};

export default MyLottie;
