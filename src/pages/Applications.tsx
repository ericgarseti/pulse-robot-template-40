import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Applications = () => {
  const applications = [
    { name: "3D Modeling", link: "/applications/3d-modeling" },
    { name: "Geospatial Inspection", link: "/applications/geospatial-inspection" },
    { name: "Infrastructure Inspection", link: "/applications/infrastructure-inspection" },
    { name: "Utility Inspection", link: "/applications/utility-inspection" },
    { name: "Search & Rescue", link: "/applications/search-rescue" },
    { name: "Ecological Inspection", link: "/applications/ecological-inspection" },
    { name: "Precision Agriculture", link: "/applications/precision-agriculture" },
    { name: "Surveillance", link: "/applications/surveillance" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Applications</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how our UAV technology transforms various industries and operations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {applications.map((app, index) => (
              <Link
                key={index}
                to={app.link}
                className="glass-card group hover:scale-105 transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-bold">{app.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Applications;
