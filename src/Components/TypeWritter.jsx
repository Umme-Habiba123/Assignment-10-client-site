import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const TypeWritter = () => {


    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (
        <div>

            <div className='w-10/12 mx-auto'>

                <p className='text-gray-600 satisfy-regular text-2xl text-center '>
                    <span style={{ fontWeight: 'bold' }}>

                        <Typewriter
                            words={[`
            What makes you want help from us?
          1. Expertise On Demand
            Whether you need a quick design, content writing, data entry, or even home-based tasks — we connect you with skilled freelancers ready to get the job done.
            
            2. Save Time, Stay Focused
            Your time is valuable. Instead of juggling every small task, delegate them to someone who can handle it efficiently while you focus on what matters most.
            
             3. Transparent and Secure
            We ensure clear communication, fair pricing, and secure transactions. No hidden terms. Just honest work and happy users.      
            
            ` ]}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={800}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}

                        />
                    </span>
                </p>

            </div>
        </div>
    );
};

export default TypeWritter;