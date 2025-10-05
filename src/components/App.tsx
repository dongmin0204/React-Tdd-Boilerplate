import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store'
import LanguageProvider from '../containers/LanguageProvider/LanguageProvider'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import HomePage from '../containers/HomePage/HomePage'
import FeaturePage from '../containers/FeaturePage/FeaturePage'
import NotFoundPage from '../containers/NotFoundPage/NotFoundPage'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/features" element={<FeaturePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </Provider>
  )
}

export default App
