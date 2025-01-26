'use client';

import React from "react";
import Image from "next/image";
import { Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-10 px-6 shadow-md">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo and Social Media */}
        <div className="space-y-4">
          <Image src="/images/wine_logo.png" alt="Wine Logo" width={40} height={40} />
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-800">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-800">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-gray-800">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-800">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Use Cases</h3>
          <ul className="space-y-2 mt-4 text-gray-600">
            {[
              "UI design",
              "UX design",
              "Wireframing",
              "Diagramming",
              "Brainstorming",
              "Online whiteboard",
              "Team collaboration",
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-800">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Explore</h3>
          <ul className="space-y-2 mt-4 text-gray-600">
            {[
              "Design",
              "Prototyping",
              "Development features",
              "Design systems",
              "Collaboration features",
              "Design process",
              "FigJam",
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-800">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Resources</h3>
          <ul className="space-y-2 mt-4 text-gray-600">
            {[
              "Blog",
              "Best practices",
              "Colors",
              "Color wheel",
              "Support",
              "Developers",
              "Resource library",
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-800">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
