import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Shubham",
    role: "Professional Trader",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
    rating: 5,
    review: "Forexfundz has transformed my trading career. Their instant funding program allowed me to scale my strategy quickly. The platform is intuitive and their support team is exceptional.",
    date: "March 15, 2024"
  },
  {
    id: 2,
    name: "Nitika",
    role: "Day Trader",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    rating: 5,
    review: "The two-phase program is perfect for developing disciplined trading habits. I've been able to consistently grow my account and the profit splits are among the best in the industry.",
    date: "March 12, 2024"
  },
  {
    id: 3,
    name: "Himanshu",
    role: "Swing Trader",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60",
    rating: 5,
    review: "What sets Forexfundz apart is their transparency and fair rules. The one-phase program helped me prove my strategy, and their payouts are always on time.",
    date: "March 10, 2024"
  }
];

const CustomerReviews = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-white" id="review">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Trusted by Traders Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful traders who have chosen Forexfundz as their preferred funding partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <Quote className="w-8 h-8 text-purple-400 mb-2" />
              
              <p className="text-gray-700 mb-4">{review.review}</p>
              
              <div className="text-sm text-gray-500">{review.date}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-gray-100 px-6 py-3 rounded-full">
              <span className="text-2xl font-bold text-gray-900">1000+</span>
              <p className="text-sm text-gray-600">Funded Traders</p>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-full">
              <span className="text-2xl font-bold text-gray-900">$50M+</span>
              <p className="text-sm text-gray-600">Profit Paid</p>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-full">
              <span className="text-2xl font-bold text-gray-900">98%</span>
              <p className="text-sm text-gray-600">Satisfaction Rate</p>
            </div>
          </div>

          <a
            href="#buy"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;