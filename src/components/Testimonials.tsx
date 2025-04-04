
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    role: 'Small Business Owner',
    content: 'The custom t-shirts for our staff were perfect! Great quality and the designs came out exactly as I wanted.',
    rating: 5,
    image: '/placeholder.svg',
  },
  {
    id: 2,
    name: 'João Santos',
    role: 'Birthday Party Organizer',
    content: 'I ordered customized mugs as gifts for a birthday party. Everyone loved them! Will definitely order again.',
    rating: 5,
    image: '/placeholder.svg',
  },
  {
    id: 3,
    name: 'Ana Oliveira',
    role: 'Event Coordinator',
    content: 'The personalized aprons were a hit at our cooking workshop. Fast delivery and excellent customer service.',
    rating: 4,
    image: '/placeholder.svg',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-brand-teal/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkblue mb-4">
            Customer <span className="text-brand-red">Testimonials</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our customers have to say about their experience with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl shadow-md p-6 flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 flex-grow">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
