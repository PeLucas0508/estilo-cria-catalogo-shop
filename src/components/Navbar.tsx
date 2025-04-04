import React from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Menu className="md:hidden h-6 w-6" />
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/dd28df56-0a30-426c-b764-d5df8632113f.png" 
                alt="LAHYZ Sublime Logo" 
                className="h-16 w-auto"
              />
            </a>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-brand-red transition-colors">
              Home
            </a>
            <a href="#categories" className="text-sm font-medium hover:text-brand-red transition-colors">
              Categories
            </a>
            <a href="#featured" className="text-sm font-medium hover:text-brand-red transition-colors">
              Featured
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-brand-red transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-brand-red transition-colors">
              Testimonials
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-brand-red">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-brand-red">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-brand-red text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="default" className="hidden md:flex bg-brand-red hover:bg-brand-red/90 text-white">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
