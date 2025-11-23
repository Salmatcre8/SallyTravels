import React from 'react'

export default function Hero(){
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-accent-600/70 z-10"></div>
      <img src="/assets/images/airplane.jpg" alt="Travel" className="absolute inset-0 w-full h-full object-cover"/>

      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">Travel Far, Travel Wide, <span className="text-accent-400">Travel with Sally</span></h1>
        <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">Experience the world's most breathtaking destinations with our expert guides and personalized service.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary text-lg px-8 py-4"><i className="fas fa-plane mr-2"></i>Start Your Journey</button>
          <button className="btn-secondary text-lg px-8 py-4"><i className="fas fa-play mr-2"></i>Watch Video</button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce"><i className="fas fa-chevron-down text-white text-2xl"></i></div>
      </div>
    </section>
  )
}
