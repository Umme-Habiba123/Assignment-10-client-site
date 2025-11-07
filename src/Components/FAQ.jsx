import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "How do I hire a freelancer?",
    answer:
      "Simply browse through our freelancer profiles, check their ratings and reviews, and click 'Hire Now' to start the project.",
  },
  {
    id: 2,
    question: "How can I post a project?",
    answer:
      "Sign up for an account, click on 'Post a Project', provide the project details and budget, and publish it. Freelancers can then bid on your project.",
  },
  {
    id: 3,
    question: "How does payment work?",
    answer:
      "All payments are handled securely through our platform. You can release payment only when the project is completed to your satisfaction.",
  },
  {
    id: 4,
    question: "Can I communicate with freelancers before hiring?",
    answer:
      "Yes! You can message freelancers directly through our platform to discuss project details before finalizing the hire.",
  },
  {
    id: 5,
    question: "What if I’m not satisfied with the work?",
    answer:
      "You can request revisions from the freelancer or contact our support team to resolve disputes. Our platform ensures fair resolutions.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-green-600 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-700 text-lg">
          Find answers to common questions about our freelancing platform.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex justify-between items-center px-6 py-4 focus:outline-none"
            >
              <span className="text-left text-green-600 font-medium text-lg">
                {faq.question}
              </span>
              {openId === faq.id ? (
                <FaChevronUp className="text-green-600" />
              ) : (
                <FaChevronDown className="text-green-600" />
              )}
            </button>
            {openId === faq.id && (
              <div className="px-6 pb-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
