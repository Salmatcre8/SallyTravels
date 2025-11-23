import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Packages from './pages/Packages'
import Contact from './pages/Contact'
import Book from './pages/Book'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destinations" element={<Destination />} />
          <Route path="packages" element={<Packages />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book" element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
