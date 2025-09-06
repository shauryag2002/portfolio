const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Frontend Frameworks",
      skills: ["React.js", "Next.js", "Redux", "Recoil", "Tailwind CSS"],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Backend & Database",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Prisma",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Mobile Development",
      skills: ["React Native", "Expo", "Android Studio", "Xcode"],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git/GitHub",
        "Docker",
        "Firebase",
        "Cloudinary",
        "Digital Ocean",
        "Sentry",
      ],
      color: "from-red-500 to-red-600",
    },
    {
      title: "Testing & Other",
      skills: ["Cypress", "Jest", "Zod", "NextAuth", "Django"],
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-full h-2 bg-gradient-to-r ${category.color} rounded-full mb-6`}
                ></div>

                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-medium text-gray-700">{skill}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < 4
                                ? `bg-gradient-to-r ${category.color}`
                                : "bg-gray-300"
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🚀",
                  title: "Performance Optimization",
                  desc: "Reduced crashes and improved load times by 25%",
                },
                {
                  icon: "📱",
                  title: "Cross-Platform Development",
                  desc: "4k+ mobile app downloads delivered",
                },
                {
                  icon: "🎨",
                  title: "3D Animations",
                  desc: "Interactive FBX character animations",
                },
                {
                  icon: "🔧",
                  title: "API Integration",
                  desc: "Payment gateways, cloud services, and third-party APIs",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="text-4xl mb-4 text-center">{item.icon}</div>
                  <h4 className="font-bold text-gray-800 mb-2 text-center">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm text-center">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
