import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MilitaryDefence = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Military & Defence</h1>
            
            <div className="space-y-6">
              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Cutting-edge UAV systems designed for military and defence applications, providing 
                  tactical advantage through advanced reconnaissance, surveillance, and operational support.
                </p>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Intelligence, Surveillance, and Reconnaissance (ISR)</li>
                  <li>• Border security and patrol</li>
                  <li>• Target acquisition and tracking</li>
                  <li>• Communications relay</li>
                  <li>• Electronic warfare support</li>
                </ul>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Secure encrypted communications</li>
                  <li>• Extended range and endurance</li>
                  <li>• All-weather operation capability</li>
                  <li>• Modular payload systems</li>
                  <li>• Autonomous and manual control modes</li>
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

export default MilitaryDefence;
