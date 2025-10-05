import { FormattedMessage } from 'react-intl'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-300">
          <FormattedMessage 
            id="boilerplate.components.Footer.author.message" 
            defaultMessage="Made with ❤️ by {author}"
            values={{ author: <span key="author" className="font-semibold">DongMin Baek</span> }}
          />
        </p>
        <p className="text-gray-400 text-sm mt-2">
          <FormattedMessage 
            id="boilerplate.components.Footer.license.message" 
            defaultMessage="This project is licensed under the MIT license."
          />
        </p>
      </div>
    </footer>
  )
}

export default Footer
