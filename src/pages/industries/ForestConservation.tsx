import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ForestConservation = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Forest Conservation</h1>
            
            <div className="space-y-6">
              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Support forest conservation efforts with UAV technology that enables comprehensive 
                  monitoring, protection, and management of forest ecosystems.
                </p>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Conservation Tools</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Forest health assessment and mapping</li>
                  <li>• Illegal logging detection and prevention</li>
                  <li>• Wildlife habitat monitoring</li>
                  <li>• Fire detection and management</li>
                  <li>• Reforestation planning and tracking</li>
                </ul>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Impact</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Improved forest protection effectiveness</li>
                  <li>• Early threat detection capabilities</li>
                  <li>• Cost-effective large-area monitoring</li>
                  <li>• Better resource allocation for conservation</li>
                  <li>• Enhanced biodiversity preservation</li>
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

export default ForestConservation;
