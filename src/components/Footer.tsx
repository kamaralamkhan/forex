import React from 'react';
import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">Forexfundz</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner in forex funding solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/review" className="text-gray-400 hover:text-white transition-colors">Customer Review</a></li>
              <li><a href="/buy" className="text-gray-400 hover:text-white transition-colors">Buy Now</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">support@forexfundz.com</span>
              </li>
              {/* <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">+</span>
              </li> */}
              {/* <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">New York, NY 10001</span>
              </li> */}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-balance">
          <p>Trading in financial markets is a high-risk activity and therefore it is advised not to risk more than what you can afford to lose.

Forex Fundz is not a broker and does not accept deposits. The offered technical solution for the Forex Fundz trading platforms and data feed is powered by Third-Party providers. All content published and distributed by Forex Fundz is to be treated as general information only.

Forex Fundz only offers virtual demo accounts where live market conditions are simulated and any reference to ‘funded’ used on our website or in any of our terms and conditions is a reference to virtual funding, only.

None of the services that we provide can be considered as investment services or recommendations, and none of our employees, staff, or representatives are authorised to provide investment advice or recommendations. All information provided on our website is intended solely for educational purposes related to trading on the financial markets and does not serve as specific investment advice, business recommendation, investment analysis, or similar general recommendation regarding the trading of any investment instruments.

The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations.</p>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Forexfundz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}