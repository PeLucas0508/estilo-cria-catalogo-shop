
import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Clothing',
    image: '/placeholder.svg',
    description: 'T-shirts, hoodies, and more',
  },
  {
    id: 2,
    name: 'Mugs',
    image: '/placeholder.svg',
    description: 'Coffee and tea mugs',
  },
  {
    id: 3,
    name: 'Keychains',
    image: '/placeholder.svg',
    description: 'Customizable keychains',
  },
  {
    id: 4,
    name: 'Beanies',
    image: '/placeholder.svg',
    description: 'Custom knitted beanies',
  },
  {
    id: 5,
    name: 'Aprons',
    image: '/placeholder.svg',
    description: 'Kitchen and workshop aprons',
  },
];

const CategorySection = () => {
  return (
    <section id="categories" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkblue mb-4">
            Browse Our <span className="text-brand-red">Categories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of customizable products. Each category offers multiple options to personalize.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <a 
              href={`#${category.name.toLowerCase()}`} 
              key={category.id} 
              className="category-card group rounded-xl overflow-hidden h-60 flex items-end"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="relative z-10 p-6 w-full">
                <h3 className="text-xl font-semibold text-white mb-1">{category.name}</h3>
                <p className="text-white/90 text-sm mb-4">{category.description}</p>
                <div className="flex items-center text-white text-sm font-medium">
                  <span>Explore</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
