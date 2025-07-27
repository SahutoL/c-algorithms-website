import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, onPageChange, currentPage }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header onPageChange={onPageChange} currentPage={currentPage} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

