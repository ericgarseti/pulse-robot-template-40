import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Agriculture = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Agriculture</h1>
            
            <div className="space-y-6">
              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Transform your farming operations with UAV technology that delivers actionable insights 
                  for improved crop management, resource optimization, and increased yields.
                </p>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Solutions</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Crop health monitoring and analysis</li>
                  <li>• Irrigation management optimization</li>
                  <li>• Pest and disease early detection</li>
                  <li>• Yield estimation and forecasting</li>
                  <li>• Soil condition assessment</li>
                </ul>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Benefits</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reduced operational costs</li>
                  <li>• Improved resource utilization</li>
                  <li>• Data-driven decision making</li>
                  <li>• Sustainable farming practices</li>
                  <li>• Increased profitability</li>
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

export default Agriculture;
