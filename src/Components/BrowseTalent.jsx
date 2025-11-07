import React from "react";
import {
  FaLaptopCode,
  FaPalette,
  FaBullhorn,
  FaPenFancy,
  FaMusic,
  FaVideo,
  FaDraftingCompass,
  FaMoneyCheckAlt,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    icon: <FaLaptopCode size={40} className="text-green-600 mb-2" />,
    title: "Development & IT",
    subtitle: "Software Engineer, Web / Mobile Developer & More",
    skills: "1,853 skills",
  },
  {
    id: 2,
    icon: <FaPalette size={40} className="text-green-600 mb-2" />,
    title: "Design & Creative",
    subtitle: "Graphic Designer, Illustrator, UI/UX & More",
    skills: "1,853 skills",
  },
  {
    id: 3,
    icon: <FaBullhorn size={40} className="text-green-600 mb-2" />,
    title: "Digital Marketing",
    subtitle: "SEO, Social Media, Ads & More",
    skills: "1,853 skills",
  },
  {
    id: 4,
    icon: <FaPenFancy size={40} className="text-green-600 mb-2" />,
    title: "Writing & Translation",
    subtitle: "Copywriting, Translation, Content Writer & More",
    skills: "1,853 skills",
  },
  {
    id: 5,
    icon: <FaMusic size={40} className="text-green-600 mb-2" />,
    title: "Music & Audio",
    subtitle: "Composer, Voice Over, Sound Engineer & More",
    skills: "1,853 skills",
  },
  {
    id: 6,
    icon: <FaVideo size={40} className="text-green-600 mb-2" />,
    title: "Video & Animation",
    subtitle: "Video Editor, Animator, Motion Graphics & More",
    skills: "1,853 skills",
  },
  {
    id: 7,
    icon: <FaDraftingCompass size={40} className="text-green-600 mb-2" />,
    title: "Engineering & Architecture",
    subtitle: "Civil, Mechanical, CAD Designer & More",
    skills: "1,853 skills",
  },
  {
    id: 8,
    icon: <FaMoneyCheckAlt size={40} className="text-green-600 mb-2" />,
    title: "Finance & Accounting",
    subtitle: "Accountant, CPA, Financial Analyst & More",
    skills: "1,853 skills",
  },
];

const BrowseTalent = () => {
  return (
    <div className="min-h-screen px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-green-600 mb-4">
          Browse Talent by Category
        </h2>
        <p className="text-gray-700 text-lg">
          Get some inspiration from 1800+ skills
        </p>
      </div>

      {/* Categories Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center text-center p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            {category.icon}
            <h3 className="text-xl font-semibold text-green-600 mb-1">
              {category.title}
            </h3>
            <p className="text-gray-600 mb-1">{category.subtitle}</p>
            <span className="text-sm text-gray-500">{category.skills}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseTalent;
