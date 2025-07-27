import { useState } from 'react'
import { Menu, X, Code, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = ({ onPageChange, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavigation = (page) => {
    onPageChange(page)
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavigation('home')}
          >
            <Code className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">
              C Algorithm Hub
            </span>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation("home")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === "home" 
                  ? "text-blue-600 bg-blue-50" 
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              ホーム
            </button>
            <button
              onClick={() => handleNavigation("algorithms")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === "algorithms" || currentPage === "algorithm-detail"
                  ? "text-blue-600 bg-blue-50" 
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              アルゴリズム
            </button>
            <button
              onClick={() => handleNavigation("concepts")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === "concepts"
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              概念
            </button>
            <button
              onClick={() => handleNavigation("about")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === "about" 
                  ? "text-blue-600 bg-blue-50" 
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              概要
            </button>
            <Button variant="outline" size="sm" className="flex items-center space-x-1">
              <BookOpen className="h-4 w-4" />
              <span>学習ガイド</span>
            </Button>
          </nav>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* モバイルナビゲーション */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <button
                onClick={() => handleNavigation("home")}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  currentPage === "home" 
                    ? "text-blue-600 bg-blue-50" 
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                ホーム
              </button>
              <button
                onClick={() => handleNavigation("algorithms")}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  currentPage === "algorithms" || currentPage === "algorithm-detail"
                    ? "text-blue-600 bg-blue-50" 
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                アルゴリズム
              </button>
              <button
                onClick={() => handleNavigation("concepts")}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  currentPage === "concepts"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                概念
              </button>
              <button
                onClick={() => handleNavigation("about")}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  currentPage === "about" 
                    ? "text-blue-600 bg-blue-50" 
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                概要
              </button>
              <div className="px-3 py-2">
                <Button variant="outline" size="sm" className="w-full flex items-center justify-center space-x-1">
                  <BookOpen className="h-4 w-4" />
                  <span>学習ガイド</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

