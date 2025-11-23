import React from 'react'

export default function Search(){
  return (
    <section className="bg-white py-8 shadow-lg -mt-16 relative z-30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Destination</label>
              <input type="text" placeholder="Where to?" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Check-in</label>
              <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Check-out</label>
              <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
            </div>
            <div className="flex items-end">
              <button className="w-full btn-primary"><i className="fas fa-search mr-2"></i>Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
