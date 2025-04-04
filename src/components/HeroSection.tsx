
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-brand-lightgray overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-darkblue">
              Express Yourself With Custom <span className="text-brand-red">Merchandise</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Create personalized clothing, mugs, keychains, beanies, and aprons with your unique designs. Perfect for gifts, promotions, or just for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white">
                Start Designing
              </Button>
              <Button size="lg" variant="outline" className="border-brand-darkblue text-brand-darkblue hover:bg-brand-darkblue/10">
                View Catalog
              </Button>
            </div>
          </div>
          <div className="relative lg:h-[500px] animate-fade-in">
            <div className="absolute top-6 right-0 w-64 h-64 md:w-80 md:h-80 bg-white rounded-xl shadow-xl transform rotate-3 overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Customized t-shirt" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-0 w-64 h-64 md:w-80 md:h-80 bg-white rounded-xl shadow-xl transform -rotate-6 overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Customized mug" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-12 left-0 right-0 h-24 bg-brand-teal/10 transform -skew-y-3"></div>
    </section>
  );
};

export default HeroSection;
