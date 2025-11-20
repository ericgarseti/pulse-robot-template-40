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
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">On Going R&D</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our cutting-edge research and development projects in UAV technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <Link
                key={index}
                to={project.link}
                className="glass-card group hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 capitalize">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
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
