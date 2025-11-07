import React from 'react';
import { useNavigate } from 'react-router';

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
  }
  // Only 3 cities in this example
];

const CityJobs = () => {
  const navigate = useNavigate();

  const handleGetJob = (cityName) => {
    navigate(`/jobs?city=${encodeURIComponent(cityName)}`);
  };

  // Ensure at least 4 cards
  const displayCities = [...cities];
  while (displayCities.length < 4) {
    displayCities.push({ empty: true, name: "", image: "", description: "" });
  }

  return (
    <section className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 tagesschrift-regular">
        Find Freelance Jobs by City
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayCities.map((city, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-lg shadow-lg h-96 ${
              city.empty ? 'bg-gray-100 cursor-default' : ''
            }`}
          >
            {!city.empty && (
              <>
                <img
                  src={city.image}
                  alt={city.name}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-50 transition duration-500"></div>
                <div className="relative z-10 p-6 flex flex-col justify-end h-full transform group-hover:-translate-y-2 transition duration-300">
                  <h3 className="text-2xl font-bold mb-2 text-white">{city.name}</h3>
                  <p className="mb-4 text-sm text-white">{city.description}</p>
                  <button
                    onClick={() => handleGetJob(city.name)}
                    className="self-start font-semibold bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                  >
                    Get Job
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CityJobs;
