import React from 'react'

export default function Services(){
  const services = [
    {icon:'fas fa-route', title:'Customized Itineraries', desc:'Personalized travel plans tailored to your interests, budget, and travel style.'},
    {icon:'fas fa-hotel', title:'Premium Accommodations', desc:'Curated selection of hotels and resorts at competitive rates.'},
    {icon:'fas fa-plane', title:'Flight Management', desc:'Complete flight arrangements from booking to check-in.'},
    {icon:'fas fa-map-marked-alt', title:'Guided Tours', desc:'Expert-led tours and excursions to discover hidden gems.'},
    {icon:'fas fa-headset', title:'24/7 Support', desc:'Round-the-clock assistance for any questions or emergencies.'},
    {icon:'fas fa-shield-alt', title:'Travel Insurance', desc:'Comprehensive protection plans for worry-free travel.'},
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">Our Premium Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">We offer comprehensive travel services to make your journey unforgettable and stress-free.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="card text-center p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${s.icon} text-2xl text-primary-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{s.title}</h3>
              <p className="text-gray-600 mb-6">{s.desc}</p>
              <button className="btn-secondary">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
