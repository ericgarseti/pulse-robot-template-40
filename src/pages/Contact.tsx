import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-5xl">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center text-gray-900">Contact Us</h1>
            
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-2xl font-display font-bold mb-6 text-gray-900">Get in Touch</h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Have questions about our UAV solutions? Our team is here to help. 
                  Reach out to us through any of the following channels.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-pulse-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-bold mb-2 text-gray-900">Head Office</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Austin Arena, Bhumkar Chowk Rd,<br />
                        Ashok Nagar, Tathawade,<br />
                        Pimpri-Chinchwad, Pune,<br />
                        Maharashtra 411033
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-pulse-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-bold mb-2 text-gray-900">Phone</h3>
                      <p className="text-gray-700">+91 XXXX XXXXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-pulse-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-bold mb-2 text-gray-900">Email</h3>
                      <p className="text-gray-700">info@aerofly.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-2xl font-display font-bold mb-4 text-gray-900">Business Hours</h2>
                <div className="space-y-2 text-gray-700 leading-relaxed">
                  <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM</p>
                  <p><span className="font-semibold">Sunday:</span> Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
