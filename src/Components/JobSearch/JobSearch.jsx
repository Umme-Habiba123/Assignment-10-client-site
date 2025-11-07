import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Get city from query param
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const city = params.get('city');

  useEffect(() => {
    // Fetch all jobs from API
    fetch('http://localhost:5000/jobs') 
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.log(err));
  }, []);

  // Filter jobs by city and search term
  const filteredJobs = jobs.filter(job => {
    const matchesCity = city ? job.city?.toLowerCase() === city.toLowerCase() : true;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Jobs {city ? `in ${city}` : ''}
      </h2>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search jobs by title..."
          className="border border-gray-300 px-4 py-2 rounded w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Jobs Grid */}
      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map(job => (
            <div
              key={job._id}
              className="p-5 border rounded shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
              <p className="text-gray-600 text-sm mb-1">{job.description}</p>
              <p className="text-xs text-gray-400">Location: {job.city}</p>
              <p className="text-xs text-gray-400">
                Deadline: {new Date(job.deadline).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-8">No jobs found.</p>
      )}
    </div>
  );
};

export default JobSearch;
