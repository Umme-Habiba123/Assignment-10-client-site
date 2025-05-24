import React from 'react';
import Lottie from 'lottie-react';
import animation from '../../public/animation.json'

const MyLottie = () => {
    return (
        <div className='w-[800px] '>
           <Lottie animationData={animation} loop={true}>

           </Lottie>
            
        </div>
    );
};

export default MyLottie;