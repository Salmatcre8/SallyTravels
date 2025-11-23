import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <div>
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-display font-bold text-primary-600">SallyTravels</h1>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">Home</Link>
                <Link to="/destinations" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Destinations</Link>
                <Link to="/packages" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Packages</Link>
                <Link to="/contact" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Contact</Link>
                <Link to="/book" className="btn-primary">Book Now</Link>
              </div>
            </div>

            <div className="md:hidden">
              <button id="mobile-menu-button" className="text-gray-700 hover:text-primary-600 focus:outline-none">
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        <div id="mobile-menu" className="md:hidden hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">Home</Link>
            <Link to="/destinations" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">Destinations</Link>
            <Link to="/packages" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">Packages</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">Contact</Link>
            <Link to="/book" className="block px-3 py-2 text-primary-600 hover:text-primary-700 font-medium">Book Now</Link>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}
