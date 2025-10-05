import { describe, it, expect, vi } from 'vitest'
import { configureStore } from '@reduxjs/toolkit'
import appReducer, { loadRepos, clearError, clearRepos } from '../slices/appSlice'

// Mock the request function
vi.mock('../../utils/request', () => ({
  default: vi.fn(),
}))

describe('appSlice', () => {
  let store: ReturnType<typeof configureStore>

  beforeEach(() => {
    store = configureStore({
      reducer: {
        app: appReducer,
      },
    })
  })

  it('should handle initial state', () => {
    const state = store.getState().app
    expect(state.loading).toBe(false)
    expect(state.error).toBe(false)
    expect(state.currentUser).toBe(false)
    expect(state.userData.repositories).toBe(false)
  })

  it('should handle clearError', () => {
    // Set error state first
    store.dispatch(clearError())
    const state = store.getState().app
    expect(state.error).toBe(false)
  })

  it('should handle clearRepos', () => {
    store.dispatch(clearRepos())
    const state = store.getState().app
    expect(state.userData.repositories).toBe(false)
    expect(state.currentUser).toBe(false)
  })

  it('should handle loadRepos.pending', () => {
    store.dispatch(loadRepos.pending('requestId', 'testuser'))
    const state = store.getState().app
    expect(state.loading).toBe(true)
    expect(state.error).toBe(false)
    expect(state.userData.repositories).toBe(false)
  })

  it('should handle loadRepos.fulfilled', () => {
    const mockRepos = [
      { id: 1, name: 'repo1', description: 'test repo', stargazers_count: 10, forks_count: 5 },
      { id: 2, name: 'repo2', description: 'test repo 2', stargazers_count: 20, forks_count: 10 },
    ]
    
    store.dispatch(loadRepos.fulfilled(
      { repos: mockRepos, username: 'testuser' },
      'requestId',
      'testuser'
    ))
    
    const state = store.getState().app
    expect(state.loading).toBe(false)
    expect(state.userData.repositories).toEqual(mockRepos)
    expect(state.currentUser).toBe('testuser')
  })

  it('should handle loadRepos.rejected', () => {
    store.dispatch(loadRepos.rejected(
      new Error('API Error'),
      'requestId',
      'testuser',
      'API Error'
    ))
    
    const state = store.getState().app
    expect(state.loading).toBe(false)
    expect(state.error).toBe('API Error')
  })
})
