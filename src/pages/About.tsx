import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-5xl">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center text-gray-900">About AeroFly</h1>
            
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-2xl font-display font-bold mb-4 text-gray-900">Who We Are</h2>
                <p className="text-gray-700 leading-relaxed">
                  AeroFly is a pioneering company specializing in Research and Development of UAVs, 
                  Drones, Robotics, and their production. We are dedicated to pushing the boundaries 
                  of aerial technology and autonomous systems.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-2xl font-display font-bold mb-4 text-gray-900">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To deliver cutting-edge UAV and robotics solutions that transform industries through 
                  innovation, precision, and reliability. We strive to create technology that enhances 
                  operational efficiency and safety across diverse sectors.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-2xl font-display font-bold mb-4 text-gray-900">Targeted Industries</h2>
                <ul className="space-y-2 text-gray-700 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-pulse-500 mr-2">•</span>
                    <span>Military & Defence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pulse-500 mr-2">•</span>
                    <span>Agriculture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pulse-500 mr-2">•</span>
                    <span>Construction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pulse-500 mr-2">•</span>
                    <span>Mining & Quarrying</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pulse-500 mr-2">•</span>
                    <span>Forest Conservation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-2xl font-display font-bold mb-4 text-gray-900">Our Expertise</h2>
                <p className="text-gray-700 leading-relaxed">
                  With advanced R&D capabilities and production facilities, we develop state-of-the-art 
                  UAV systems including fixed-wing aircraft, VTOL platforms, and specialized drones 
                  tailored to meet the unique demands of each industry we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
