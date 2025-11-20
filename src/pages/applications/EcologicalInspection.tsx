import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EcologicalInspection = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Ecological Inspection</h1>
            
            <div className="space-y-6">
              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Advanced UAV solutions for environmental monitoring and ecological research, 
                  providing non-invasive data collection for conservation and sustainability efforts.
                </p>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Non-intrusive wildlife monitoring</li>
                  <li>• Vegetation and habitat mapping</li>
                  <li>• Environmental change detection</li>
                  <li>• Cost-effective large-area surveys</li>
                  <li>• Multi-spectral analysis capabilities</li>
                </ul>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Applications</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Wildlife population studies</li>
                  <li>• Forest health assessment</li>
                  <li>• Wetland and coastal ecosystem monitoring</li>
                  <li>• Biodiversity surveys</li>
                  <li>• Climate change impact studies</li>
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

export default EcologicalInspection;
