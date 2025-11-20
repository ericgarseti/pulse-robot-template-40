import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ThreeDModeling = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">3D Modeling</h1>
            
            <div className="space-y-6">
              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our UAV-based 3D modeling solutions provide high-resolution aerial data capture 
                  for creating detailed three-dimensional models of terrain, structures, and landscapes.
                </p>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• High-precision photogrammetry capabilities</li>
                  <li>• Rapid data collection over large areas</li>
                  <li>• Cost-effective compared to traditional surveying</li>
                  <li>• Safe access to difficult or hazardous terrain</li>
                  <li>• Detailed topographic mapping</li>
                </ul>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Applications</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Urban planning and development</li>
                  <li>• Construction site documentation</li>
                  <li>• Archaeological surveys</li>
                  <li>• Real estate visualization</li>
                  <li>• Environmental monitoring</li>
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

export default ThreeDModeling;
