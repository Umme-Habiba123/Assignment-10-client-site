import React from 'react';
import MyLottie from './MyLottie';
import TypeWritter from '../Components/TypeWritter';

const Animation = () => {
    return (
        <div>
            <p>Lets have a chat</p>
            <div>
                <MyLottie></MyLottie>
                <TypeWritter></TypeWritter>
            </div>
        </div>
    );
};

export default Animation;