import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import AlgorithmList from './components/AlgorithmList'
import AlgorithmDetail from './components/AlgorithmDetail'
import PrivacyPolicy from './components/PrivacyPolicy'
import Contact from './components/Contact'
import AlgorithmConcepts from './components/AlgorithmConcepts'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedAlgorithmId, setSelectedAlgorithmId] = useState(null)
  const [selectedTag, setSelectedTag] = useState(null)

  // ページ遷移時にスクロール位置をリセット
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  const handlePageChange = (page, options = {}) => {
    setCurrentPage(page)
    if (options.algorithmId) {
      setSelectedAlgorithmId(options.algorithmId)
    }
    if (options.tag) {
      setSelectedTag(options.tag)
    }
    // ページ遷移時にスクロール位置をリセット
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }

  const handleAlgorithmSelect = (algorithmId) => {
    setSelectedAlgorithmId(algorithmId)
    setCurrentPage('algorithm-detail')
    // ページ遷移時にスクロール位置をリセット
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }

  const handleBackToList = () => {
    setCurrentPage('algorithms')
    setSelectedAlgorithmId(null)
    // ページ遷移時にスクロール位置をリセット
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }

  const handleBackToHome = () => {
    setCurrentPage('home')
    setSelectedAlgorithmId(null)
    setSelectedTag(null)
    // ページ遷移時にスクロール位置をリセット
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} />
      case 'algorithms':
        return (
          <AlgorithmList 
            selectedTag={selectedTag}
            onAlgorithmSelect={handleAlgorithmSelect}
          />
        )
      case 'algorithm-detail':
        return (
          <AlgorithmDetail 
            algorithmId={selectedAlgorithmId}
            onBack={handleBackToList}
          />
        )
      case 'privacy-policy':
        return <PrivacyPolicy />
      case 'contact':
        return <Contact />
      case 'concepts':
        return <AlgorithmConcepts />
      default:
        return <HomePage onPageChange={handlePageChange} />
    }
  }

  return (
    <Layout onPageChange={handlePageChange} currentPage={currentPage}>
      {renderCurrentPage()}
    </Layout>
  )
}

export default App
