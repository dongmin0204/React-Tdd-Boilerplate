import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { loadRepos } from '../../store/slices/appSlice'
import { changeUsername } from '../../store/slices/homeSlice'

function HomePage() {
  const dispatch = useDispatch()
  const { username } = useSelector((state) => state.home)
  const { loading, error, userData } = useSelector((state) => state.app)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username && username.trim().length > 0) {
      dispatch(loadRepos(username))
    }
  }

  const handleUsernameChange = (e) => {
    dispatch(changeUsername(e.target.value))
  }

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) {
      dispatch(loadRepos(username))
    }
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          <FormattedMessage 
            id="boilerplate.containers.HomePage.start_project.header" 
            defaultMessage="Start your next react project in seconds"
          />
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          <FormattedMessage 
            id="boilerplate.containers.HomePage.start_project.message" 
            defaultMessage="A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices"
          />
        </p>
      </section>

      {/* Try Me Section */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          <FormattedMessage 
            id="boilerplate.containers.HomePage.tryme.header" 
            defaultMessage="Try me!"
          />
        </h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
            <FormattedMessage 
              id="boilerplate.containers.HomePage.tryme.message" 
              defaultMessage="Show Github repositories by"
            />
          </label>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 font-medium">
              <FormattedMessage 
                id="boilerplate.containers.HomePage.tryme.atPrefix" 
                defaultMessage="@"
              />
            </span>
            <input
              id="username"
              type="text"
              placeholder="mxstbr"
              value={username}
              onChange={handleUsernameChange}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Loading...' : 'Load Repos'}
            </button>
          </div>
        </form>

        {/* Repos List */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            Error: {error}
          </div>
        )}

        {userData.repositories && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Repositories for @{username}
            </h3>
            <div className="grid gap-4">
              {userData.repositories.map((repo) => (
                <div key={repo.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-800">{repo.name}</h4>
                      <p className="text-gray-600 text-sm">{repo.description || 'No description'}</p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>⭐ {repo.stargazers_count}</span>
                      <span>🍴 {repo.forks_count}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default HomePage
