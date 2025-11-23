import React from 'react'

function Card({img, title, price, duration, desc}){
  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        <img src={img} alt={title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-4">
        <h4 className="font-bold text-lg text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 text-sm mb-3">{desc}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary-600 font-bold">{price}</span>
          <span className="text-gray-500 text-sm">{duration}</span>
        </div>
      </div>
    </div>
  )
}

export default function Featured(){
  const items = [
    {img:'/assets/images/elegushi.jpg', title:'Elegushi Beach', price:'$150/person', duration:'1 Day Tour', desc:'Pristine beach with crystal clear waters'},
    {img:'/assets/images/lcc.jpeg', title:'Lekki Conservation Centre', price:'$200/person', duration:'1 Day Tour', desc:'Nature reserve with canopy walkway'},
    {img:'/assets/images/nikeart.jpeg', title:'Nike Art Gallery', price:'$100/person', duration:'1 Day Tour', desc:'Contemporary African art showcase'},
    {img:'/assets/images/freedomp.jpeg', title:'Freedom Park', price:'$80/person', duration:'1 Day Tour', desc:'Historic park with cultural significance'},
  ]

  return (
    <section id="destinations" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">Featured Destinations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover breathtaking locations around the world, carefully curated for unforgettable experiences.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it, idx) => <Card key={idx} {...it} />)}
        </div>
      </div>
    </section>
  )
}
