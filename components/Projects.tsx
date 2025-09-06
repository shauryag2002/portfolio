import {
  ExternalLink,
  Github,
  Download,
  Smartphone,
  Globe,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Chatreal",
      description:
        "Developed the Chatreal app and website with 3k+ Android and 1k+ iOS installs. Implemented 3D character animations using FBX files and React Three Fiber for immersive UX.",
      technologies: [
        "React Native",
        "Expo",
        "React Three Fiber",
        "Redux",
        "TypeScript",
      ],
      features: [
        "3D character animations with FBX files",
        "Deep linking implementation",
        "Performance optimization",
        "Dynamic themes with Redux state management",
        "Cross-platform mobile app",
      ],
      links: {
        website: "https://chatreal.ai",
        android:
          "https://play.google.com/store/search?q=chatreal&c=apps&hl=en_US",
        ios: "https://apps.apple.com/us/app/chatreal-3d-character-ai-bot/id6717603008",
      },
      stats: "4k+ downloads",
    },
    {
      title: "real-time-monaco",
      description:
        "Developed an npm package for real-time collaborative code editing using Monaco Editor and Yjs. Features include user cursors, selections highlighting, and conflict resolution.",
      technologies: ["JavaScript", "Monaco Editor", "Yjs", "WebRTC", "npm"],
      features: [
        "Real-time collaborative code editing",
        "User cursors and selections highlighting",
        "Conflict resolution for data consistency",
        "Simple Component for easy integration",
        "WebRTC-based synchronization",
      ],
      links: {
        npm: "https://www.npmjs.com/package/real-time-monaco",
        github: "https://github.com/shauryag2002/real-time-monaco",
        demo: "https://real-time-monaco.vercel.app/",
      },
      stats: "900+ downloads",
    },
    {
      title: "generate-apk",
      description:
        "Created an npm package to automate Android APK generation from JavaScript projects. Simplifies build process and supports customization for app packaging and signing.",
      technologies: ["JavaScript", "Node.js", "Android SDK", "npm", "CLI"],
      features: [
        "Automated APK generation",
        "Customizable build configurations",
        "App packaging and signing support",
        "Easy-to-use CLI interface",
        "Development pipeline integration",
      ],
      links: {
        npm: "https://www.npmjs.com/package/generate-apk",
        github: "https://github.com/shauryag2002/generate-apk",
      },
      stats: "Open Source",
    },
    {
      title: "Joy Of Tails",
      description:
        "E-commerce platform for pet products built during internship at H3A Business Solutions. Implemented payment integration and optimized performance.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Razorpay",
        "Cloudinary",
      ],
      features: [
        "E-commerce functionality",
        "Payment gateway integration",
        "Image management with Cloudinary",
        "Responsive design",
        "Admin dashboard",
      ],
      links: {
        website: "https://joyoftailsweb.onrender.com/",
      },
      stats: "Production Ready",
    },
    {
      title: "Parallaxplay",
      description:
        "Interactive web application with parallax effects and modern animations. Built with focus on user experience and visual appeal.",
      technologies: ["React.js", "CSS3", "JavaScript", "Animation Libraries"],
      features: [
        "Parallax scrolling effects",
        "Modern animations",
        "Responsive design",
        "Interactive UI elements",
        "Performance optimized",
      ],
      links: {
        website: "https://parallaxplay-73gc.onrender.com/",
      },
      stats: "Live Demo",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "website":
        return <Globe size={16} />;
      case "github":
        return <Github size={16} />;
      case "npm":
        return <Download size={16} />;
      case "android":
      case "ios":
        return <Smartphone size={16} />;
      default:
        return <ExternalLink size={16} />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {project.stats}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-600 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {Object.entries(project.links).map(([type, url]) => (
                    <a
                      key={type}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium"
                    >
                      {getIcon(type)}
                      <span className="capitalize">{type}</span>
                    </a>
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

export default Projects;
