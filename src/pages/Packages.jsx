import React from 'react'

export default function Packages() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-display font-bold mb-6">Our Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="font-bold text-xl mb-2">Romantic Paris Getaway</h3>
          <p className="text-gray-600 mb-4">3 days / 2 nights including hotel and city tour.</p>
          <div className="flex justify-between items-center">
            <span className="text-primary-600 font-bold">$750</span>
            <button className="btn-primary">Book</button>
          </div>
        </div>
        <div className="card p-6">
          <h3 className="font-bold text-xl mb-2">African Explorer</h3>
          <p className="text-gray-600 mb-4">7 days exploring major West African highlights.</p>
          <div className="flex justify-between items-center">
            <span className="text-primary-600 font-bold">$1,299</span>
            <button className="btn-primary">Book</button>
          </div>
        </div>
        <div className="card p-6">
          <h3 className="font-bold text-xl mb-2">Tokyo Highlights</h3>
          <p className="text-gray-600 mb-4">5 days / 4 nights with guided tours.</p>
          <div className="flex justify-between items-center">
            <span className="text-primary-600 font-bold">$1,599</span>
            <button className="btn-primary">Book</button>
          </div>
        </div>
      </div>
    </div>
  )
}
