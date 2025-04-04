
import React from 'react';
import { Palette, ShoppingBag, Truck } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Choose & Customize',
    description: 'Select your product and add your personal design, text, or upload your artwork.',
    icon: Palette,
  },
  {
    id: 2,
    title: 'Order & Preview',
    description: 'Review your customized item in 3D preview, adjust if needed, and place your order.',
    icon: ShoppingBag,
  },
  {
    id: 3,
    title: 'Production & Delivery',
    description: 'We carefully produce your custom item and deliver it straight to your door.',
    icon: Truck,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkblue mb-4">
            How It <span className="text-brand-red">Works</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Creating personalized products is easy with our simple three-step process. From design to delivery!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="relative p-6 rounded-xl bg-brand-lightgray border border-gray-100 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-6 text-brand-red">
                <step.icon className="h-8 w-8" />
              </div>
              <div className="absolute -top-3 -right-3 flex items-center justify-center w-8 h-8 rounded-full bg-brand-darkblue text-white text-sm font-bold">
                {step.id}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
