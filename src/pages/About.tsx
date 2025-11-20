import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About AeroFly</h1>
            
            <div className="space-y-8">
              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
                <p className="text-gray-600 leading-relaxed">
                  AeroFly is a pioneering company specializing in Research and Development of UAVs, 
                  Drones, Robotics, and their production. We are dedicated to pushing the boundaries 
                  of aerial technology and autonomous systems.
                </p>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To deliver cutting-edge UAV and robotics solutions that transform industries through 
                  innovation, precision, and reliability. We strive to create technology that enhances 
                  operational efficiency and safety across diverse sectors.
                </p>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Targeted Industries</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Military & Defence</li>
                  <li>• Agriculture</li>
                  <li>• Construction</li>
                  <li>• Mining & Quarrying</li>
                  <li>• Forest Conservation</li>
                </ul>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
                <p className="text-gray-600 leading-relaxed">
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
