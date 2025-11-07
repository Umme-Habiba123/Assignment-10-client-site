import React from "react";

const blogs = [
  {
    id: 1,
    image: "https://i.ibb.co.com/84cgjVPZ/a-young-professional-works-a-freelance-job-from-her-home-office.webp",
    date: "December 2, 2022",
    title: "Start an online business and work from home",
    desc: "A complete guide to starting a small business online",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/Z6KmKt7g/young-woman-freelancer-working-in-a-coffeehouse-u-2023-06-07-17-57-09-utc.jpg",
    date: "December 2, 2022",
    title: "Front becomes an official Instagram Marketing Partner",
    desc: "A complete guide to starting a small business online",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/67Dk945T/starten-als-freelancer-2.png",
    date: "December 2, 2022",
    title: "Start an online business and work from home right now",
    desc: "A complete guide to starting a small business online",
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/JjYMyNGd/Freelancer-working-remotely.webp",
    date: "December 2, 2022",
    title: "Start an online business and work from home with complete guide",
    desc: "A complete guide to starting a small business online",
  },
];

const BlogSection = () => {
  return (
    <section className="w-10/12 mx-auto py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Our Blog</h2>
        <p className="text-gray-500 mt-2">
          Aliquam lacinia diam quis lacus euismod
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <p className="text-sm text-gray-400">{blog.date}</p>
              <h3 className="text-lg font-semibold mt-2 text-gray-800 hover:text-blue-600 cursor-pointer">
                {blog.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{blog.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Trusted by section */}
      <div className="text-center mt-16">
        <p className="text-sm text-gray-500 mb-6">Trusted by the world's best</p>
        <div className="flex flex-wrap justify-center gap-10 items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6" />
          <img src="https://i.ibb.co.com/hJhG6NHC/amd7686.jpg" alt="AMD" className="h-6 text-lg" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Cisco_logo_blue_2016.svg" alt="Cisco" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Logitech_logo.svg" alt="Logitech" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Spotify.png" alt="Spotify" className="h-6" />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
