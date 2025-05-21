import React, { useEffect, useState } from 'react';

const slides = [
  {
    title: 'Hire Skilled Freelancers Instantly',
    subtitle: 'Get your projects done by top-rated professionals from around the world.',
    img: 'https://i.postimg.cc/J0y71kcS/55.avif' 
  },
  {
    title: 'Your Tasks, Their Expertise',
    subtitle: 'Post your job and watch the offers roll in within minutes.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80' 
  },
  {
    title: 'Flexible Work. Fast Delivery.',
    subtitle: 'Join a trusted community of clients and freelancers.',
    img: 'https://i.postimg.cc/MKQMGHzY/f-3.avif' 
  }
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { title, subtitle, img } = slides[index];

  return (
    <div className="relative h-[70vh] md:h-[80vh] transition-all duration-700 mb-50">
      <img
        src={img}
        alt="Freelancer slide"
        className="w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-yellow-100 px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md">{title}</h1>
        <p className="mt-4 text-lg md:text-2xl drop-shadow-md">{subtitle}</p>
        <button className="mt-6 bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
