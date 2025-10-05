import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import request from '../../utils/request'
import { AppState, Repository } from '../../types'

// Async thunk for loading repositories
export const loadRepos = createAsyncThunk<
  { repos: Repository[]; username: string },
  string,
  { rejectValue: string }
>(
  'app/loadRepos',
  async (username, { rejectWithValue }) => {
    try {
      const repos = await request<Repository[]>(`https://api.github.com/users/${username}/repos?type=all&sort=updated`)
      return { repos, username }
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

// Initial state
const initialState: AppState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
}

// Create slice
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = false
    },
    clearRepos: (state) => {
      state.userData.repositories = false
      state.currentUser = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadRepos.pending, (state) => {
        state.loading = true
        state.error = false
        state.userData.repositories = false
      })
      .addCase(loadRepos.fulfilled, (state, action) => {
        state.loading = false
        state.userData.repositories = action.payload.repos
        state.currentUser = action.payload.username
      })
      .addCase(loadRepos.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Unknown error'
      })
  },
})

// Export actions
export const { clearError, clearRepos } = appSlice.actions

// Export reducer
export default appSlice.reducer
