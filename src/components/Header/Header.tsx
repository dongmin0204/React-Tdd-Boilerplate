import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import LocaleToggle from '../../containers/LocaleToggle/LocaleToggle'

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
          >
            React Boilerplate
          </Link>
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FormattedMessage id="boilerplate.components.Header.home" defaultMessage="Home" />
            </Link>
            <Link 
              to="/features" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FormattedMessage id="boilerplate.components.Header.features" defaultMessage="Features" />
            </Link>
            <LocaleToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
