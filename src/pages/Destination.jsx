import React from 'react'

export default function Destination() {
  return (
    <div>
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-accent-600/80 z-10"></div>
        <img src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg" alt="Destinations" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Explore Amazing Destinations</h1>
          <p className="text-xl md:text-2xl font-light">Discover breathtaking locations around the world</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Popular Tours & Destinations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From local gems to international wonders, explore our carefully curated selection of destinations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card group">
              <div className="relative overflow-hidden">
                <img src="/assets/images/elegushi.jpg" alt="Elegushi Beach" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Elegushi Beach</h4>
                <p className="text-gray-600 text-sm mb-3">Pristine beach with crystal clear waters</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-600 font-bold">$150/person</span>
                  <span className="text-gray-500 text-sm">1 Day Tour</span>
                </div>
              </div>
            </div>

                <div className="card group">
              <div className="relative overflow-hidden">
                <img src="/assets/images/lcc.jpeg" alt="Lekki Conservation Centre" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Lekki Conservation Centre</h4>
                <p className="text-gray-600 text-sm mb-3">Nature reserve with canopy walkway</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-600 font-bold">$200/person</span>
                  <span className="text-gray-500 text-sm">1 Day Tour</span>
                </div>
              </div>
            </div>

                <div className="card group">
              <div className="relative overflow-hidden">
                <img src="/assets/images/nikeart.jpeg" alt="Nike Art Gallery" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Nike Art Gallery</h4>
                <p className="text-gray-600 text-sm mb-3">Contemporary African art showcase</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-600 font-bold">$100/person</span>
                  <span className="text-gray-500 text-sm">1 Day Tour</span>
                </div>
              </div>
            </div>

                <div className="card group">
              <div className="relative overflow-hidden">
                <img src="/assets/images/freedomp.jpeg" alt="Freedom Park" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Freedom Park</h4>
                <p className="text-gray-600 text-sm mb-3">Historic park with cultural significance</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-600 font-bold">$80/person</span>
                  <span className="text-gray-500 text-sm">1 Day Tour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
