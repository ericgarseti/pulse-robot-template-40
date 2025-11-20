import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MiningQuarrying = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Mining & Quarrying</h1>
            
            <div className="space-y-6">
              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Optimize mining and quarrying operations with UAV solutions that improve safety, 
                  accuracy, and efficiency in resource extraction and site management.
                </p>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Applications</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Stockpile volume measurement</li>
                  <li>• Pit and quarry mapping</li>
                  <li>• Blast planning and monitoring</li>
                  <li>• Haul road inspection</li>
                  <li>• Tailings dam monitoring</li>
                </ul>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Benefits</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Enhanced worker safety in hazardous areas</li>
                  <li>• Accurate inventory management</li>
                  <li>• Rapid site assessment capabilities</li>
                  <li>• Environmental compliance monitoring</li>
                  <li>• Operational efficiency improvements</li>
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

export default MiningQuarrying;
