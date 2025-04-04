
import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'Custom T-Shirt',
    image: '/placeholder.svg',
    price: '$24.99',
    category: 'Clothing',
  },
  {
    id: 2,
    name: 'Personalized Mug',
    image: '/placeholder.svg',
    price: '$14.99',
    category: 'Mugs',
  },
  {
    id: 3,
    name: 'Custom Photo Keychain',
    image: '/placeholder.svg',
    price: '$9.99',
    category: 'Keychains',
  },
  {
    id: 4,
    name: 'Embroidered Beanie',
    image: '/placeholder.svg',
    price: '$19.99',
    category: 'Beanies',
  },
  {
    id: 5,
    name: 'Chef Apron',
    image: '/placeholder.svg',
    price: '$29.99',
    category: 'Aprons',
  },
  {
    id: 6,
    name: 'Vintage Hoodie',
    image: '/placeholder.svg',
    price: '$39.99',
    category: 'Clothing',
  },
];

const FeaturedProducts = () => {
  return (
    <section id="featured" className="py-16 md:py-24 bg-brand-lightgray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkblue mb-4">
            Featured <span className="text-brand-red">Products</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most popular items ready for your personal touch. High-quality products with endless customization options.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-600 hover:text-brand-red rounded-full shadow-sm"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <div className="absolute bottom-3 left-3">
                  <span className="inline-block bg-brand-teal text-white text-xs font-semibold px-2.5 py-1 rounded">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-brand-red">{product.price}</span>
                  <Button size="sm" className="bg-brand-darkblue hover:bg-brand-darkblue/90 text-white">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Customize
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-brand-darkblue text-brand-darkblue hover:bg-brand-darkblue/10">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
