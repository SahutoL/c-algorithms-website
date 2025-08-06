import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import AlgorithmList from './components/AlgorithmList'
import AlgorithmDetail from './components/AlgorithmDetail'
import PrivacyPolicy from './components/PrivacyPolicy'
import Contact from './components/Contact'
import AlgorithmConcepts from './components/AlgorithmConcepts'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/algorithms" element={<AlgorithmList />} />
          <Route path="/algorithms/:id" element={<AlgorithmDetail />} />
          <Route path="/concepts" element={<AlgorithmConcepts />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          {/* 404 Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App


