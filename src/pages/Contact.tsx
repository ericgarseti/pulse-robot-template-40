import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h1>
            
            <div className="space-y-6">
              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our UAV solutions? Our team is here to help. 
                  Reach out to us through any of the following channels.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-pulse-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Head Office</h3>
                      <p className="text-gray-600">
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
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p className="text-gray-600">+91 XXXX XXXXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-pulse-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-gray-600">info@aerofly.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
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
