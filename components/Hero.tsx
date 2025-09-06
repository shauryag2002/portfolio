"use client";

import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/shaurya.jpg"
                alt="Shaurya Gupta - Software Engineer"
                width={192}
                height={192}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            Shaurya Gupta
          </h1>

          <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
            Software Engineer & Full Stack Developer
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Software engineer experienced in building scalable and responsive
            web and mobile applications using React, React Native, and Expo.
            Skilled in integrating third-party APIs, optimizing user experience,
            and collaborating in agile teams to deliver high-quality software
            solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={20} />
              <span>New Delhi, India</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone size={20} />
              <span>+91-997-143-92-46</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="mailto:guptashaurya2002@gmail.com"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>

            <a
              href="https://github.com/shauryag2002"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/shauryag2002"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="animate-bounce">
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-block p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
