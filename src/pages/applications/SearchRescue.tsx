import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SearchRescue = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Search & Rescue</h1>
            
            <div className="space-y-6">
              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Life-saving UAV technology designed for rapid deployment in search and rescue 
                  operations, providing aerial reconnaissance and support in critical situations.
                </p>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Rapid area coverage in emergency situations</li>
                  <li>• Thermal imaging for locating individuals</li>
                  <li>• Access to difficult or dangerous terrain</li>
                  <li>• Real-time video feed to command centers</li>
                  <li>• Night and low-visibility operation capability</li>
                </ul>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Mission Types</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Missing person searches in wilderness areas</li>
                  <li>• Disaster response and victim location</li>
                  <li>• Maritime search and rescue</li>
                  <li>• Avalanche and mountain rescue support</li>
                  <li>• Urban emergency response</li>
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

export default SearchRescue;
