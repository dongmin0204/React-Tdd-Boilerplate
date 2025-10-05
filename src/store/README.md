# Redux Store 가이드

이 프로젝트는 **Redux Toolkit**을 사용하여 상태 관리를 구현합니다. Redux Toolkit은 기존 Redux의 복잡성을 줄이고 현대적인 개발 경험을 제공합니다.

## 📁 Store 구조

```
src/store/
├── index.ts              # Store 설정 및 내보내기
├── slices/              # Redux Toolkit 슬라이스들
│   ├── appSlice.ts      # 앱 전체 상태 관리
│   ├── homeSlice.ts     # 홈페이지 상태 관리
│   └── languageSlice.ts # 언어 설정 상태 관리
└── tests/               # Store 테스트 파일들
    ├── store.test.ts    # Store 설정 테스트
    └── appSlice.test.ts # AppSlice 테스트
```

## 🔧 Store 설정

### **index.ts**
```typescript
import { configureStore } from '@reduxjs/toolkit'
import { createBrowserHistory } from 'history'
import appReducer from './slices/appSlice'
import homeReducer from './slices/homeSlice'
import languageReducer from './slices/languageSlice'

export const history = createBrowserHistory()

export const store = configureStore({
  reducer: {
    app: appReducer,
    home: homeReducer,
    language: languageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```

## 📊 상태 구조

### **App State (appSlice.ts)**
```typescript
interface AppState {
  loading: boolean              // 로딩 상태
  error: string | false        // 에러 메시지
  currentUser: string | false  // 현재 사용자
  userData: {
    repositories: Repository[] | false  // 사용자 저장소 목록
  }
}
```

### **Home State (homeSlice.ts)**
```typescript
interface HomeState {
  username: string  // 사용자 입력 이름
}
```

### **Language State (languageSlice.ts)**
```typescript
interface LanguageState {
  locale: 'en' | 'de' | 'ko'  // 현재 언어 설정
}
```

## 🚀 Redux Toolkit 특징

### **1. createSlice**
기존 Redux의 reducer, action creator, action type을 하나로 통합:

```typescript
const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload.replace(/@/gi, '')
    },
    clearUsername: (state) => {
      state.username = ''
    },
  },
})
```

### **2. createAsyncThunk**
비동기 작업을 간편하게 처리:

```typescript
export const loadRepos = createAsyncThunk<
  { repos: Repository[]; username: string },
  string,
  { rejectValue: string }
>(
  'app/loadRepos',
  async (username, { rejectWithValue }) => {
    try {
      const repos = await request<Repository[]>(
        `https://api.github.com/users/${username}/repos?type=all&sort=updated`
      )
      return { repos, username }
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)
```

### **3. Immer 내장**
불변성 관리를 자동으로 처리:

```typescript
extraReducers: (builder) => {
  builder
    .addCase(loadRepos.pending, (state) => {
      state.loading = true      // 직접 변경 가능
      state.error = false       // Immer가 불변성 보장
    })
    .addCase(loadRepos.fulfilled, (state, action) => {
      state.loading = false
      state.userData.repositories = action.payload.repos
      state.currentUser = action.payload.username
    })
}
```

## 🎯 사용 방법

### **컴포넌트에서 사용**

```typescript
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store'
import { changeUsername, clearUsername } from '../store/slices/homeSlice'

function HomePage() {
  const dispatch = useDispatch<AppDispatch>()
  const { username } = useSelector((state: RootState) => state.home)
  
  const handleUsernameChange = (value: string) => {
    dispatch(changeUsername(value))
  }
  
  return (
    <input 
      value={username}
      onChange={(e) => handleUsernameChange(e.target.value)}
    />
  )
}
```

### **비동기 액션 사용**

```typescript
import { loadRepos } from '../store/slices/appSlice'

function Component() {
  const dispatch = useDispatch<AppDispatch>()
  
  const handleLoadRepos = async (username: string) => {
    try {
      await dispatch(loadRepos(username)).unwrap()
      // 성공 처리
    } catch (error) {
      // 에러 처리
      console.error('Failed to load repos:', error)
    }
  }
}
```

## 🔍 개발자 도구

### **Redux DevTools**
개발 환경에서 Redux DevTools가 자동으로 활성화됩니다:
- 상태 변화 추적
- 액션 히스토리 확인
- 시간 여행 디버깅
- 상태 내보내기/가져오기

### **브라우저에서 확인**
1. Redux DevTools 확장 프로그램 설치
2. 개발 서버 실행 (`pnpm dev`)
3. 브라우저 개발자 도구에서 Redux 탭 확인

## 🧪 테스트

### **Store 테스트**
```typescript
import { configureStore } from '@reduxjs/toolkit'
import appReducer, { loadRepos } from './appSlice'

describe('appSlice', () => {
  let store: ReturnType<typeof configureStore>
  
  beforeEach(() => {
    store = configureStore({
      reducer: { app: appReducer }
    })
  })
  
  it('should handle loadRepos.pending', () => {
    store.dispatch(loadRepos.pending('testuser'))
    const state = store.getState().app
    expect(state.loading).toBe(true)
  })
})
```

### **컴포넌트 테스트**
```typescript
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../store'
import HomePage from '../HomePage'

test('renders home page', () => {
  render(
    <Provider store={store}>
      <HomePage />
    </Provider>
  )
  expect(screen.getByText('Start your next react project')).toBeInTheDocument()
})
```

## 📚 추가 리소스

- [Redux Toolkit 공식 문서](https://redux-toolkit.js.org/)
- [Redux 공식 문서](https://redux.js.org/)
- [React Redux 공식 문서](https://react-redux.js.org/)
- [Redux DevTools](https://github.com/reduxjs/redux-devtools)

## 🔄 마이그레이션 노트

### **기존 Redux에서 변경된 점:**
- `createStore` → `configureStore`
- `createReducer` → `createSlice`
- `createAction` → `createSlice` 내부에서 자동 생성
- 수동 불변성 관리 → Immer 자동 처리
- 복잡한 미들웨어 설정 → 기본값으로 최적화

이러한 변경으로 코드가 더 간결하고 유지보수하기 쉬워졌습니다.
