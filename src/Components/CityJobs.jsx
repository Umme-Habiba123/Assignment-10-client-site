import React from 'react';

const cities = [
  {
    name: "San Francisco",
    image: "https://i.ibb.co/s9yvyZRb/11.webp",
    description: "Find top freelance gigs in tech, writing, and marketing from San Francisco-based clients.",
  },
  {
    name: "New York",
    image: "https://i.ibb.co/Kcvz9hGQ/11.jpg",
    description: "Explore freelance design, IT, and support tasks in this growing port city.",
  },
  {
    name: "Los Angeles",
    image: "https://i.ibb.co/1f48ccWm/los-33.webp",
    description: "Get hired for educational and writing gigs from Los Angeles-based institutions.",
  },
  {
    name: "Miami",
    image: "https://i.ibb.co/3y26jw8B/Getty-Images-1955218593.jpg",
    description: "Connect with clients looking for remote admin & voiceover work from Miami.",
  }
];

const CityJobs = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 tagesschrift-regular">
        Find Freelance Jobs by City
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cities.map((city, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg h-96"
          >
            <img
              src={city.image}
              alt={city.name}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-opacity-50 group-hover:bg-opacity-60 transition duration-500"></div>
            <div className="relative z-10 p-6 text-white flex flex-col justify-end h-full transform group-hover:-translate-y-2 transition duration-300">
              <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
              <p className="mb-4 text-sm">{city.description}</p>
              <button className="self-start bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition">
                Get Job
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityJobs;
