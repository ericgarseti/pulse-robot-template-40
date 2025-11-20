import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GeospatialInspection = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Geospatial Inspection</h1>
            
            <div className="space-y-6">
              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Advanced geospatial inspection services using UAV technology to collect, analyze, 
                  and map geographic data with unprecedented accuracy and efficiency.
                </p>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• High-resolution spatial data collection</li>
                  <li>• Real-time geographic information systems (GIS) integration</li>
                  <li>• Multi-spectral and thermal imaging capabilities</li>
                  <li>• Accurate boundary and land survey mapping</li>
                  <li>• Change detection and monitoring over time</li>
                </ul>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Applications</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Land use and land cover mapping</li>
                  <li>• Natural resource management</li>
                  <li>• Disaster response and assessment</li>
                  <li>• Urban development planning</li>
                  <li>• Environmental impact studies</li>
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

export default GeospatialInspection;
