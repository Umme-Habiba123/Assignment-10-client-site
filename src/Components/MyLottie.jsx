import React from 'react';
import Lottie from 'lottie-react';
import animation from '../../public/animation.json'
import TypeWritter from './TypeWritter';



const MyLottie = () => {

    return (
       <div>
        <div>
            <p className='text-center text-violet-600 tagesschrift-regular text-5xl'>Let's Have a chat...</p>
        </div>
         <div className='w-[800px] mx-auto text-center  gap-8'>

            <Lottie animationData={animation} loop={true}>
            </Lottie>

          
        </div>
       </div>


    );
}


export default MyLottie;