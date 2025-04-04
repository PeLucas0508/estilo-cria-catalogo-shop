
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-darkblue text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              Estilo<span className="text-brand-red">Cria</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Your one-stop shop for customizable products. Express yourself with personalized merchandise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-red transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-red transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-red transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-red transition-colors">Home</a>
              </li>
              <li>
                <a href="#categories" className="text-gray-300 hover:text-brand-red transition-colors">Categories</a>
              </li>
              <li>
                <a href="#featured" className="text-gray-300 hover:text-brand-red transition-colors">Featured Products</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-brand-red transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-brand-red transition-colors">Testimonials</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Customer Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-red transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-red transition-colors">Shipping Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-red transition-colors">Return Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-red transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-red transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-brand-red" />
                <span className="text-gray-300">Av. Paulista, 1000, São Paulo, Brazil</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-brand-red" />
                <span className="text-gray-300">+55 (11) 9999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-brand-red" />
                <span className="text-gray-300">contact@estilocria.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EstiloCria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
