import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "SDE-1",
      company: "4 Way Technologies",
      companyUrl: "https://www.4waytechnologies.com/",
      location: "Delhi, India",
      period: "August 2024 – Current",
      description: [
        "Developed and optimized Chatreal website and mobile apps (Android, iOS) with over 3k Android and 1k iOS installs.",
        "Reduced app crashes, ANRs, and errors in production through performance tuning, deep linking implementation, and enhanced monitoring.",
        "Created smooth 3D character animations using FBX files and react-three-fiber package for immersive user experience.",
        "Improved web account management and developed fantasy section with dynamic dark and light themes using Redux and Context API for global state management.",
        "Delivered Test Assessment Portal and Employee Portal frontend solutions, ensuring responsiveness and seamless user interfaces.",
      ],
      technologies: [
        "React Native",
        "React.js",
        "TypeScript",
        "Redux",
        "react-three-fiber",
        "Expo",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "H3A Business Solutions Pvt Ltd",
      location: "Noida, Uttar Pradesh",
      period: "April 2023 – July 2023",
      description: [
        "Worked as Backend and ReactJS Developer Intern using NodeJS, ReactJS, MongoDB, TypeScript, PayU Money, Cloudinary, and Razorpay.",
        "Delivered projects: Joy Of Tails and Parallaxplay with optimized frontend performance and API integrations.",
        "Improved payment process efficiency and reduced page load time by 25% through optimized Razorpay and PayU Money integration.",
        "Enhanced user experience by implementing dynamic image handling with Cloudinary and improving database query performance, decreasing response times by 20%.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "TypeScript",
        "Razorpay",
        "Cloudinary",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                      >
                        {exp.company}
                        <ExternalLink size={16} />
                      </a>
                    </div>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
