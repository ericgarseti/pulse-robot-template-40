import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AeroVayu = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-gray-900">
                aero vayu
              </h1>
              <p className="text-xl text-gray-600 mb-8">FIXED WING UAV</p>
            </div>
            <div className="animate-fade-in">
              <img
                src="/hero-image.jpg"
                alt="aero vayu fixed wing drone"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Feature - Dark Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              THE IDEAL DRONE TAILORED FOR EFFICIENT AND VERSATILE INSPECTION ACROSS CRITICAL ENVIRONMENTS
            </h2>
            <p className="text-lg text-gray-300">
              Featuring two tractor motors, single tail boom, and V-tail configuration for optimal performance and compact design
            </p>
          </div>
        </div>
      </section>

      {/* Feature: Dual Motors */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img
                src="/hero-image.jpg"
                alt="Dual tractor motor system"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
            <div className="animate-on-scroll">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">
                Enhanced Propulsion System
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Equipped with two powerful tractor motors that deliver exceptional thrust and reliability. 
                This dual-motor configuration ensures optimal performance across various mission profiles 
                while maintaining energy efficiency and extended flight duration for critical operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: V-Tail Design */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-on-scroll">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">
                Advanced V-Tail Configuration
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                The innovative V-tail design with single tail boom provides superior aerodynamic efficiency 
                and reduced drag. This configuration enhances stability during flight while minimizing weight 
                and maintaining structural integrity for demanding operational environments.
              </p>
            </div>
            <div className="order-1 md:order-2 animate-on-scroll">
              <img
                src="/hero-image.jpg"
                alt="V-tail configuration"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Flight Control */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img
                src="/hero-image.jpg"
                alt="Advanced flight control systems"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
            <div className="animate-on-scroll">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">
                Precision Flight Control
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                State-of-the-art autonomous flight systems provide precise navigation and control. 
                Advanced sensors and intelligent algorithms ensure stable flight characteristics, 
                automated mission execution, and real-time responsiveness to changing environmental conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Technical Specifications
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-on-scroll">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">✈️</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Fixed Wing Design</h4>
                <p className="text-gray-400">Optimized for long-range missions</p>
              </div>
              <div className="text-center animate-on-scroll">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">⚡</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Dual Motors</h4>
                <p className="text-gray-400">Enhanced propulsion & reliability</p>
              </div>
              <div className="text-center animate-on-scroll">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h4 className="text-xl font-bold mb-2">V-Tail System</h4>
                <p className="text-gray-400">Superior aerodynamic efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-on-scroll">
              <img
                src="/hero-image.jpg"
                alt="aero vayu compact design"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
            <div className="animate-on-scroll">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">
                Compact & Efficient Design
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Every aspect of aero vayu has been engineered with precision to deliver a perfect 
                balance between performance and portability. The compact form factor enables rapid 
                deployment while the robust construction ensures reliable operation in diverse conditions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From tactical reconnaissance to commercial surveying, aero vayu adapts to your mission 
                requirements with uncompromising efficiency and sophisticated engineering excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AeroVayu;
