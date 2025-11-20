import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const UtilityInspection = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Utility Inspection</h1>
            
            <div className="space-y-6">
              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Specialized UAV solutions for inspecting utility infrastructure, enabling proactive 
                  maintenance and reducing service interruptions across power, gas, and water systems.
                </p>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Enhanced worker safety in hazardous environments</li>
                  <li>• Thermal imaging for electrical fault detection</li>
                  <li>• Rapid inspection of extensive utility networks</li>
                  <li>• Detailed documentation for maintenance planning</li>
                  <li>• Minimal service disruption during inspections</li>
                </ul>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Utility Types</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Power transmission lines and substations</li>
                  <li>• Solar and wind energy installations</li>
                  <li>• Gas pipelines and facilities</li>
                  <li>• Water treatment and distribution systems</li>
                  <li>• Telecommunications infrastructure</li>
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

export default UtilityInspection;
