import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AeroVayu = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">aero vayu</h1>
            
            <div className="aspect-video mb-8 overflow-hidden rounded-lg">
              <img
                src="/hero-image.jpg"
                alt="aero vayu"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6 text-gray-600">
              <p className="text-lg">
                aero vayu is a fixed wing UAV, featuring two tractor motors, a single tail boom, 
                and a V-tail, emphasizing optimal performance and compact design.
              </p>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Key Features</h2>
                <ul className="space-y-2">
                  <li>• Two tractor motors for enhanced propulsion</li>
                  <li>• Single tail boom design for structural efficiency</li>
                  <li>• V-tail configuration for improved aerodynamics</li>
                  <li>• Optimized for performance and compact design</li>
                  <li>• Advanced flight control systems</li>
                </ul>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Specifications</h2>
                <ul className="space-y-2">
                  <li>• Type: Fixed Wing UAV</li>
                  <li>• Propulsion: Dual Tractor Motors</li>
                  <li>• Tail Configuration: V-tail with Single Boom</li>
                  <li>• Design Focus: Performance & Compact Form Factor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AeroVayu;
