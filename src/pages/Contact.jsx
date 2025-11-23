import React from 'react'

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-display font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-6">Have questions? Reach out and we'll get back to you.</p>
      <form className="grid grid-cols-1 gap-4">
        <input className="p-3 border border-gray-300 rounded" placeholder="Your name" />
        <input className="p-3 border border-gray-300 rounded" placeholder="Email" />
        <textarea className="p-3 border border-gray-300 rounded" rows="6" placeholder="Message" />
        <button className="btn-primary w-max">Send Message</button>
      </form>
    </div>
  )
}
