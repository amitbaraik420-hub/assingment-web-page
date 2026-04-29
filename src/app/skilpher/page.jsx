import React from 'react';
import { FaGraduationCap, FaBolt, FaTrophy } from 'react-icons/fa'; // আইকনের জন্য react-icons ব্যবহার করুন

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaGraduationCap className="text-4xl text-blue-900 mb-4" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience."
    },
    {
      icon: <FaBolt className="text-4xl text-orange-500 mb-4" />,
      title: "Learn at Your Pace",
      description: "Flexible scheduling lets you learn whenever and wherever you want."
    },
    {
      icon: <FaTrophy className="text-4xl text-yellow-600 mb-4" />,
      title: "Earn Certificates",
      description: "Get recognized with industry-standard certificates upon completion."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
      
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Why Choose Skillsphere?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center border border-gray-100"
            >
     
              <div className="flex items-center justify-center">
                {feature.icon}
              </div>
              
             
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
         
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;