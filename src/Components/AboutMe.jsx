import React from 'react';
import MyPhoto from '../assets/myself1.jpg'
import { Link } from 'react-router';

const AboutMe = () => {
    return (
        <div className='w-8/12 mx-auto'>
            <h1 className='text-center text-3xl text-cyan-600 tagesschrift-regular'>Hello...</h1>
            <div className='flex gap-8'>
                <div>
                    <p className='satisfy-regular
                     font-semibold text-xl'> I'm the founder of Snow Crave Box, a subscription service dedicated to bringing joy to your beloved cats and dogs. My journey began with a deep love for animals and the desire to provide them with the best. I noticed that pet owners often struggle to find high-quality, engaging products for their furry companions. That's when the idea of Snow Crave Box was born—a curated monthly box filled with toys, treats, and accessories that cater to both cats and dogs. Each month, I personally select items that are not only fun but also beneficial for your pets' well-being. From chew toys that promote dental health to treats made with natural ingredients, every product is chosen with care and love. At Snow Crave Box, we believe that pets are family. Our mission is to enhance the bond between you and your pets by delivering happiness right to your doorstep. Thank you for allowing us to be a part of your pet's life. We look forward to bringing smiles and wagging tails with each box!
                    </p>
                </div>

                <div className=''>
                    <img className='w-60 md:w-80' src={MyPhoto} alt="" />
                </div>

            </div>
           <Link>
            <button className='btn bg-cyan-800 hover:bg-white hover:text-black mt-3 rounded-sm px-8 text-lg satisfy-regular text-white '>Follow for more!</button>
           </Link>

        </div>
    );
};

export default AboutMe;