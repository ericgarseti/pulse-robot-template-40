import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OnGoingRnD = () => {
  const projects = [
    {
      name: "aero vayu",
      description: "A fixed wing UAV, featuring two tractor motors, a single tail boom, and a V-tail, emphasizing optimal performance and compact design.",
      link: "/aero-vayu",
      image: "/hero-image.jpg"
    },
    {
      name: "aero stern",
      description: "A VTOL Glider UAV designed for vertical takeoff and landing capabilities with efficient gliding performance.",
      link: "/aero-stern",
      image: "/hero-image.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-8 sm:pb-12 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
              On Going R&D
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Pioneering advanced UAV platforms through innovative research and development. 
              Our cutting-edge projects push the boundaries of aerial technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Link
                key={index}
                to={project.link}
                className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-300 group animate-fade-in"
              >
                <div className="w-full">
                  <img 
                    src={project.image}
                    alt={`${project.name} - Advanced UAV system`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="bg-white p-4 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4 capitalize">{project.name}</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OnGoingRnD;
