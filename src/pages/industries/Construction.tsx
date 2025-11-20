import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Construction = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Construction</h1>
            
            <div className="space-y-6">
              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Enhance construction project management with UAV technology that provides accurate 
                  site surveys, progress tracking, and safety inspections from planning to completion.
                </p>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Services</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Site surveying and mapping</li>
                  <li>• Progress monitoring and documentation</li>
                  <li>• Volumetric measurements and calculations</li>
                  <li>• Safety and compliance inspections</li>
                  <li>• As-built verification</li>
                </ul>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Advantages</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Faster data collection than traditional methods</li>
                  <li>• Improved project timeline management</li>
                  <li>• Enhanced stakeholder communication</li>
                  <li>• Reduced survey costs</li>
                  <li>• Better quality control</li>
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

export default Construction;
