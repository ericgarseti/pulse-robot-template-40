import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Surveillance = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Surveillance</h1>
            
            <div className="space-y-6">
              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Advanced aerial surveillance solutions providing comprehensive monitoring capabilities 
                  for security, reconnaissance, and situational awareness applications.
                </p>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Continuous or on-demand monitoring</li>
                  <li>• Extended operational range and endurance</li>
                  <li>• High-resolution day and night imaging</li>
                  <li>• Real-time video transmission</li>
                  <li>• Covert reconnaissance capabilities</li>
                </ul>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Applications</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Border patrol and security</li>
                  <li>• Critical infrastructure protection</li>
                  <li>• Event monitoring and crowd management</li>
                  <li>• Anti-poaching operations</li>
                  <li>• Military reconnaissance</li>
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

export default Surveillance;
