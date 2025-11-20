import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AeroStern = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">aero stern</h1>
            
            <div className="aspect-video mb-8 overflow-hidden rounded-lg">
              <img
                src="/hero-image.jpg"
                alt="aero stern"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6 text-gray-600">
              <p className="text-lg">
                aero stern is a VTOL Glider UAV designed for vertical takeoff and landing 
                capabilities combined with efficient gliding performance.
              </p>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Key Features</h2>
                <ul className="space-y-2">
                  <li>• Vertical Takeoff and Landing (VTOL) capability</li>
                  <li>• Efficient gliding performance for extended flight</li>
                  <li>• Hybrid design combining VTOL and fixed-wing benefits</li>
                  <li>• Suitable for diverse terrain and mission profiles</li>
                  <li>• Advanced autonomous flight systems</li>
                </ul>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Specifications</h2>
                <ul className="space-y-2">
                  <li>• Type: VTOL Glider UAV</li>
                  <li>• Takeoff Mode: Vertical</li>
                  <li>• Flight Mode: Fixed-Wing Gliding</li>
                  <li>• Design Focus: Versatility & Efficiency</li>
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

export default AeroStern;
