"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Shaurya Gupta</h3>
              <p className="text-gray-400 leading-relaxed">
                Software Engineer passionate about creating amazing digital
                experiences with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About", "Experience", "Projects", "Skills", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <button
                        onClick={() =>
                          document
                            .getElementById(item.toLowerCase())
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>New Delhi, India</p>
                <a
                  href="mailto:guptashaurya2002@gmail.com"
                  className="block hover:text-white transition-colors"
                >
                  guptashaurya2002@gmail.com
                </a>
                <a
                  href="tel:+919971439246"
                  className="block hover:text-white transition-colors"
                >
                  +91-997-143-92-46
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:guptashaurya2002@gmail.com"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/shauryag2002"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/shauryag2002"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © {currentYear} Shaurya Gupta. Made with{" "}
              <Heart size={16} className="text-red-500" /> using Next.js &
              Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
