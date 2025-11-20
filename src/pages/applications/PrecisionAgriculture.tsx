import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrecisionAgriculture = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Precision Agriculture</h1>
            
            <div className="space-y-6">
              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Revolutionary UAV technology for modern farming, enabling data-driven decisions 
                  that optimize crop yields, reduce costs, and promote sustainable agriculture.
                </p>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Multi-spectral crop health monitoring</li>
                  <li>• Precision irrigation mapping</li>
                  <li>• Early pest and disease detection</li>
                  <li>• Yield prediction and analysis</li>
                  <li>• Targeted fertilizer and pesticide application</li>
                </ul>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Applications</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Crop stress identification</li>
                  <li>• Soil analysis and mapping</li>
                  <li>• Field drainage planning</li>
                  <li>• Livestock monitoring</li>
                  <li>• Farm inventory management</li>
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

export default PrecisionAgriculture;
