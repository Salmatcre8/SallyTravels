import React from 'react'

export default function CTA(){
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready for Your Next Adventure?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Join thousands of satisfied travelers who have discovered the world with Sally Travels. Your dream destination awaits.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">Book Your Trip</button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">Call Us Now</button>
        </div>
      </div>
    </section>
  )
}
