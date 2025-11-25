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
              <p className="text-lg text-gray-700 leading-relaxed">
                Boldly going where no drone has gone before, armed with nothing but AI and a Dash of Daring. 
                Revolutionary VTOL capability meets efficient gliding for unmatched operational flexibility 
                across diverse mission profiles.
              </p>
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

      {/* Mission Statement */}
      <section className="bg-gray-900 text-white py-20">
        <div className="section-container">
          <div className="max-w-5xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-center">
              Leading the Drone Revolution
            </h2>
            <p className="text-lg md:text-xl text-gray-300 text-center leading-relaxed mb-6">
              Originating from the prestigious incubators of IITs, IIITs, and IIMs, we are a team of Innovators 
              dedicated to Redefining Drone Technology. Developing state-of-the-art drones equipped with AI Pilot 
              system, empowering our drones to Autonomously Navigate through Confined Spaces, Independent of GPS 
              and Compass guidance.
            </p>
            <p className="text-xl md:text-2xl text-center font-bold text-white">
              AI on Edge Aerial Operations
            </p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center text-gray-900">
            Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Utility Inspection",
                description: "Proactive surveillance of energy lifelines to detect & address potential issues in power lines, pipelines, and other utility networks"
              },
              {
                title: "Infrastructure Inspection",
                description: "Precision Inspection of vital infrastructure to Assess and Diagnose Structural Integrity of bridges, skyscrapers etc"
              },
              {
                title: "3D Mapping",
                description: "3D Mapping of Tunnels, Mines, and Essential Infrastructures for a New Dimension in exploration"
              },
              {
                title: "Search & Rescue",
                description: "Search and Rescue Operations for Location of Missing Persons, Rapid Assessment of Disaster Zones, and Vital Communication"
              },
              {
                title: "Ecological Inspection",
                description: "Inspection of Air Quality, Emission Sources, Pollution Tracking, and Wildlife Monitoring for a Healthier Planet"
              },
              {
                title: "Precision Agriculture",
                description: "Enhancing Urban Farming by generating Insights for Optimal Crop Health, Soil Analysis, and Agricultural Practices"
              },
              {
                title: "Surveillance",
                description: "Surveillance and Progress Tracking for Security Monitoring and Construction Oversight"
              },
              {
                title: "Geospatial Inspection",
                description: "Map creation for Urban Planning, Infrastructure Evolution, and Strategic Land Use Analysis"
              },
              {
                title: "Inventory Management",
                description: "Providing Inventory Management Solutions for Warehouse and other applications"
              }
            ].map((app, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-elegant transition-shadow animate-on-scroll">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{app.title}</h3>
                <p className="text-gray-600 leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center text-gray-900">
            Industries
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Deploying AI Powered Drones to Create Ease in Industries
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                number: "01",
                title: "Agriculture",
                description: "Precision Aerial Crop Monitoring and Health Inspection"
              },
              {
                number: "02",
                title: "Military & Defence",
                description: "Tracking, Border Surveillance, Stealth Operations etc"
              },
              {
                number: "03",
                title: "Environmental Conservation",
                description: "Real-time air quality analysis, wildlife monitoring, vegetation monitoring etc"
              },
              {
                number: "04",
                title: "Construction",
                description: "Monitoring Progress, Identifying Defects, and Ensuring Safety on construction sites"
              },
              {
                number: "05",
                title: "Energy & Utilities",
                description: "Inspection of Power Plants, Pipelines, and Utility Structures"
              },
              {
                number: "06",
                title: "Public Safety",
                description: "Surveillance for Public Places and Conducting Search & Rescue Operations in Disaster-Stricken Areas"
              },
              {
                number: "07",
                title: "Mining & Quarrying",
                description: "Developing 3D Mapping Solutions for Tunnels, Mines, and Similar Environments"
              },
              {
                number: "08",
                title: "Warehouse",
                description: "Efficient Warehouse Inventory Management"
              }
            ].map((industry, index) => (
              <div key={index} className="flex gap-6 p-6 bg-white rounded-lg hover:shadow-elegant transition-shadow animate-on-scroll">
                <div className="text-4xl font-bold text-gray-300 flex-shrink-0">{industry.number}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{industry.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
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

      <Footer />
    </div>
  );
};

export default AeroStern;
