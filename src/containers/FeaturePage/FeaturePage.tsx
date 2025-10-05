import React from 'react'
import { FormattedMessage } from 'react-intl'

function FeaturePage() {
  const features = [
    {
      titleId: 'boilerplate.containers.FeaturePage.scaffolding.header',
      descriptionId: 'boilerplate.containers.FeaturePage.scaffolding.message',
      icon: '🛠️'
    },
    {
      titleId: 'boilerplate.containers.FeaturePage.feedback.header',
      descriptionId: 'boilerplate.containers.FeaturePage.feedback.message',
      icon: '⚡'
    },
    {
      titleId: 'boilerplate.containers.FeaturePage.state_management.header',
      descriptionId: 'boilerplate.containers.FeaturePage.state_management.message',
      icon: '🌍'
    },
    {
      titleId: 'boilerplate.containers.FeaturePage.javascript.header',
      descriptionId: 'boilerplate.containers.FeaturePage.javascript.message',
      icon: '📘'
    },
    {
      titleId: 'boilerplate.containers.FeaturePage.css.header',
      descriptionId: 'boilerplate.containers.FeaturePage.css.message',
      icon: '🎨'
    },
    {
      titleId: 'boilerplate.containers.FeaturePage.routing.header',
      descriptionId: 'boilerplate.containers.FeaturePage.routing.message',
      icon: '🛣️'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          <FormattedMessage 
            id="boilerplate.containers.FeaturePage.header" 
            defaultMessage="Features"
          />
        </h1>
        <p className="text-xl text-gray-600">
          <FormattedMessage 
            id="boilerplate.containers.FeaturePage.subtitle" 
            defaultMessage="Everything you need to build a modern React application"
          />
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              <FormattedMessage 
                id={feature.titleId}
                defaultMessage="Feature"
              />
            </h3>
            <p className="text-gray-600 leading-relaxed">
              <FormattedMessage 
                id={feature.descriptionId}
                defaultMessage="Feature description"
              />
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturePage
