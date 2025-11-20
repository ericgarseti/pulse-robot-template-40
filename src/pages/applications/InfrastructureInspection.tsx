import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const InfrastructureInspection = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Infrastructure Inspection</h1>
            
            <div className="space-y-6">
              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive UAV-based infrastructure inspection services that enhance safety, 
                  reduce costs, and provide detailed assessment of critical structures.
                </p>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Safe inspection of hard-to-reach areas</li>
                  <li>• Reduced downtime and operational disruption</li>
                  <li>• High-resolution visual documentation</li>
                  <li>• Early detection of structural issues</li>
                  <li>• Cost-effective compared to traditional methods</li>
                </ul>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Inspection Targets</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Bridges and overpasses</li>
                  <li>• Buildings and high-rise structures</li>
                  <li>• Towers and communication masts</li>
                  <li>• Dams and water infrastructure</li>
                  <li>• Railways and roadways</li>
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

export default InfrastructureInspection;
