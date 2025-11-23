import React from 'react'

export default function Book() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-display font-bold mb-4">Book a Trip</h1>
      <p className="text-gray-600 mb-6">Fill out the form and our agents will contact you to confirm.</p>
      <form className="grid grid-cols-1 gap-4">
        <input className="p-3 border border-gray-300 rounded" placeholder="Full name" />
        <input className="p-3 border border-gray-300 rounded" placeholder="Email" />
        <input className="p-3 border border-gray-300 rounded" placeholder="Destination" />
        <input type="date" className="p-3 border border-gray-300 rounded" />
        <button className="btn-primary w-max">Request Booking</button>
      </form>
    </div>
  )
}
