import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://raw.githubusercontent.com/shauryag2002/portfolio/main/public/shaurya.jpg"
                    alt="Shaurya Gupta - About Photo"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-100 rounded-full -z-10"></div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Passionate Software Engineer
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I&apos;m a dedicated software engineer with a strong foundation
                in modern web and mobile development. Currently working as SDE-1
                at 4 Way Technologies, where I&apos;ve contributed to
                applications with thousands of users.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My expertise spans across React, React Native, and Next.js, with
                a particular passion for creating seamless user experiences and
                optimizing application performance. I&apos;ve successfully
                delivered projects ranging from 3D character animations to
                comprehensive web applications.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                When I&apos;m not coding, I enjoy exploring new technologies and
                contributing to open-source projects. I believe in continuous
                learning and staying updated with the latest industry trends.
              </p>

              {/* Quick Facts Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    Professional Highlights
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">
                        📍 Based in New Delhi, India
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">
                        💼 SDE-1 at 4 Way Technologies
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">
                        🚀 4k+ app downloads delivered
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    Education & Skills
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">
                        🎓 B.Tech in Computer Science
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">
                        📦 900+ npm package downloads
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">
                        🌟 Open Source Contributor
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
