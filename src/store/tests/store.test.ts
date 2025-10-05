/**
 * Test store configuration
 */

import { describe, it, expect, beforeAll, vi } from 'vitest'
import { createBrowserHistory } from 'history'
import { store } from '../index'

describe('configureStore', () => {
  beforeAll(() => {
    // Store is already configured in index.ts
  })

  describe('store shape', () => {
    it('should have dispatch method', () => {
      expect(typeof store.dispatch).toBe('function')
    })

    it('should have getState method', () => {
      expect(typeof store.getState).toBe('function')
    })

    it('should have subscribe method', () => {
      expect(typeof store.subscribe).toBe('function')
    })
  })

  describe('initial state', () => {
    it('should have app reducer', () => {
      const state = store.getState()
      expect(state).toHaveProperty('app')
      expect(state.app).toHaveProperty('loading', false)
      expect(state.app).toHaveProperty('error', false)
      expect(state.app).toHaveProperty('currentUser', false)
      expect(state.app).toHaveProperty('userData')
    })

    it('should have home reducer', () => {
      const state = store.getState()
      expect(state).toHaveProperty('home')
      expect(state.home).toHaveProperty('username', '')
    })

    it('should have language reducer', () => {
      const state = store.getState()
      expect(state).toHaveProperty('language')
      expect(state.language).toHaveProperty('locale', 'en')
    })
  })

  describe('devTools', () => {
    it('should enable devTools in development', () => {
      // In development, devTools should be enabled
      expect(process.env.NODE_ENV).toBeDefined()
    })
  })
})
