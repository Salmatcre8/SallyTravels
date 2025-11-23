import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-primary-400">SallyTravels</h3>
            <p className="text-gray-300 leading-relaxed">Your gateway to unforgettable travel experiences around the world.</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Home</li>
              <li className="text-gray-300">Packages</li>
              <li className="text-gray-300">Contact</li>
              <li className="text-gray-300">Book Now</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Flight Booking</li>
              <li className="text-gray-300">Hotel Reservations</li>
              <li className="text-gray-300">Tour Packages</li>
              <li className="text-gray-300">Travel Insurance</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-primary-400"></i>
                <span className="text-gray-300">Ikeja, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-primary-400"></i>
                <span className="text-gray-300">+234 80 666 333 63</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-primary-400"></i>
                <span className="text-gray-300">info@sallytravel.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Sally Travels. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
