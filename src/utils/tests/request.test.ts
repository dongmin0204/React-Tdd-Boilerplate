import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import request from '../request'

// Mock fetch
global.fetch = vi.fn()

describe('request utility', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return JSON data for successful request', async () => {
    const mockData = { id: 1, name: 'test' }
    const mockResponse = {
      ok: true,
      status: 200,
      statusText: 'OK',
      json: vi.fn().mockResolvedValue(mockData),
    }

    vi.mocked(fetch).mockResolvedValue(mockResponse as any)

    const result = await request('https://api.example.com/data')

    expect(fetch).toHaveBeenCalledWith('https://api.example.com/data', undefined)
    expect(result).toEqual(mockData)
  })

  it('should return null for 204 status', async () => {
    const mockResponse = {
      ok: true,
      status: 204,
      statusText: 'No Content',
      json: vi.fn(),
    }

    vi.mocked(fetch).mockResolvedValue(mockResponse as any)

    const result = await request('https://api.example.com/data')

    expect(result).toBeNull()
    expect(mockResponse.json).not.toHaveBeenCalled()
  })

  it('should return null for 205 status', async () => {
    const mockResponse = {
      ok: true,
      status: 205,
      statusText: 'Reset Content',
      json: vi.fn(),
    }

    vi.mocked(fetch).mockResolvedValue(mockResponse as any)

    const result = await request('https://api.example.com/data')

    expect(result).toBeNull()
    expect(mockResponse.json).not.toHaveBeenCalled()
  })

  it('should throw error for 400 status', async () => {
    const mockResponse = {
      ok: false,
      status: 400,
      statusText: 'Bad Request',
      json: vi.fn(),
    }

    vi.mocked(fetch).mockResolvedValue(mockResponse as any)

    await expect(request('https://api.example.com/data')).rejects.toThrow('Bad Request')
  })

  it('should throw error for 500 status', async () => {
    const mockResponse = {
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
      json: vi.fn(),
    }

    vi.mocked(fetch).mockResolvedValue(mockResponse as any)

    await expect(request('https://api.example.com/data')).rejects.toThrow('Internal Server Error')
  })

  it('should pass options to fetch', async () => {
    const mockData = { id: 1, name: 'test' }
    const mockResponse = {
      ok: true,
      status: 200,
      statusText: 'OK',
      json: vi.fn().mockResolvedValue(mockData),
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ test: 'data' }),
    }

    vi.mocked(fetch).mockResolvedValue(mockResponse as any)

    await request('https://api.example.com/data', options)

    expect(fetch).toHaveBeenCalledWith('https://api.example.com/data', options)
  })

  it('should handle network errors', async () => {
    const networkError = new Error('Network error')
    vi.mocked(fetch).mockRejectedValue(networkError)

    await expect(request('https://api.example.com/data')).rejects.toThrow('Network error')
  })
})
