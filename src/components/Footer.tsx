import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-12 border-t border-gray-200">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and Head Office */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-6">
              <img 
                src="/logo.svg" 
                alt="Pulse Robot Logo" 
                className="h-8" 
              />
            </Link>
            <h3 className="font-bold text-gray-900 mb-3">Head Office</h3>
            <address className="text-sm text-gray-600 not-italic leading-relaxed">
              Austin Arena, Bhumkar Chowk Rd,<br />
              Ashok Nagar, Tathawade,<br />
              Pimpri-Chinchwad, Pune,<br />
              Maharashtra 411033
            </address>
          </div>

          {/* On Going R&D */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-gray-900 mb-3">On Going R&D</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/aero-vayu" className="hover:text-pulse-500 transition-colors">aero vayu</Link></li>
              <li><Link to="/aero-stern" className="hover:text-pulse-500 transition-colors">aero stern</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-gray-900 mb-3">Industries</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/industries/military-defence" className="hover:text-pulse-500 transition-colors">Military & Defence</Link></li>
              <li><Link to="/industries/agriculture" className="hover:text-pulse-500 transition-colors">Agriculture</Link></li>
              <li><Link to="/industries/construction" className="hover:text-pulse-500 transition-colors">Construction</Link></li>
              <li><Link to="/industries/mining-quarrying" className="hover:text-pulse-500 transition-colors">Mining & Quarrying</Link></li>
              <li><Link to="/industries/forest-conservation" className="hover:text-pulse-500 transition-colors">Forest Conservation</Link></li>
            </ul>
          </div>

          {/* Applications */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-gray-900 mb-3">Applications</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/applications/3d-modeling" className="hover:text-pulse-500 transition-colors">3D Modeling</Link></li>
              <li><Link to="/applications/geospatial-inspection" className="hover:text-pulse-500 transition-colors">Geospatial Inspection</Link></li>
              <li><Link to="/applications/infrastructure-inspection" className="hover:text-pulse-500 transition-colors">Infrastructure Inspection</Link></li>
              <li><Link to="/applications/utility-inspection" className="hover:text-pulse-500 transition-colors">Utility Inspection</Link></li>
              <li><Link to="/applications/search-rescue" className="hover:text-pulse-500 transition-colors">Search & Rescue</Link></li>
              <li><Link to="/applications/ecological-inspection" className="hover:text-pulse-500 transition-colors">Ecological Inspection</Link></li>
              <li><Link to="/applications/precision-agriculture" className="hover:text-pulse-500 transition-colors">Precision Agriculture</Link></li>
              <li><Link to="/applications/surveillance" className="hover:text-pulse-500 transition-colors">Surveillance</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/contact" className="hover:text-pulse-500 transition-colors">Contact</Link></li>
              <li><Link to="/about" className="hover:text-pulse-500 transition-colors">About us</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">© 2025 AeroFly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
