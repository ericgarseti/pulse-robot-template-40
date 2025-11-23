import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AeroStern = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-gray-900">
                aero stern
              </h1>
              <p className="text-xl text-gray-600 mb-8">VTOL GLIDER UAV</p>
            </div>
            <div className="animate-fade-in">
              <img
                src="/hero-image.jpg"
                alt="aero stern VTOL glider drone"
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
              REVOLUTIONARY VTOL CAPABILITY MEETS EFFICIENT GLIDING FOR UNMATCHED OPERATIONAL FLEXIBILITY
            </h2>
            <p className="text-lg text-gray-300">
              Combining vertical takeoff and landing with superior gliding performance for missions across diverse terrain
            </p>
          </div>
        </div>
      </section>

      {/* Feature: VTOL Capability */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img
                src="/hero-image.jpg"
                alt="VTOL takeoff and landing capability"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
            <div className="animate-on-scroll">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">
                Vertical Takeoff & Landing
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Revolutionary VTOL technology eliminates the need for runways or launch equipment. 
                Deploy from virtually any location - rooftops, ships, confined spaces, or rough terrain. 
                This unprecedented flexibility enables rapid response and mission adaptability in challenging environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Gliding Performance */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-on-scroll">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">
                Efficient Gliding Performance
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Once airborne, aero stern transitions to an efficient glider configuration, maximizing 
                flight duration and range. The optimized aerodynamic design delivers exceptional lift-to-drag 
                ratios, enabling extended surveillance missions with minimal energy consumption.
              </p>
            </div>
            <div className="order-1 md:order-2 animate-on-scroll">
              <img
                src="/hero-image.jpg"
                alt="Efficient gliding performance"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Hybrid Design */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img
                src="/hero-image.jpg"
                alt="Hybrid VTOL and fixed-wing design"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
            <div className="animate-on-scroll">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">
                Best of Both Worlds
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                The hybrid architecture seamlessly combines VTOL versatility with fixed-wing efficiency. 
                Intelligent flight management systems automatically optimize performance across all flight phases, 
                from vertical ascent through cruise gliding to precision vertical landing.
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
                  <span className="text-3xl">🚁</span>
                </div>
                <h4 className="text-xl font-bold mb-2">VTOL Capability</h4>
                <p className="text-gray-400">Vertical takeoff & landing</p>
              </div>
              <div className="text-center animate-on-scroll">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🪂</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Glider Mode</h4>
                <p className="text-gray-400">Extended flight duration</p>
              </div>
              <div className="text-center animate-on-scroll">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🔄</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Hybrid Design</h4>
                <p className="text-gray-400">Ultimate mission versatility</p>
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
                alt="aero stern versatile design"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
            <div className="animate-on-scroll">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">
                Versatility Engineered
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                aero stern represents the pinnacle of UAV engineering, designed to excel across the most 
                demanding mission profiles. Whether conducting surveillance in urban canyons, monitoring 
                remote infrastructure, or performing search and rescue operations, this platform delivers 
                uncompromising performance.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Advanced autonomous systems, robust construction, and intelligent power management ensure 
                that aero stern operates reliably in conditions where conventional UAVs cannot, making it 
                the ultimate choice for critical operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AeroStern;
