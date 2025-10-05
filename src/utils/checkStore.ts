/**
 * Validate the shape of the redux store
 */

interface StoreShape {
  dispatch: any
  subscribe: any
  getState: any
  replaceReducer: any
  runSaga: any
  injectedReducers: any
  injectedSagas: any
}

const checkStore = (store: StoreShape) => {
  const shape = {
    dispatch: expect.any(Function),
    subscribe: expect.any(Function),
    getState: expect.any(Function),
    replaceReducer: expect.any(Function),
    runSaga: expect.any(Function),
    injectedReducers: expect.any(Object),
    injectedSagas: expect.any(Object),
  }
  expect(store).toMatchObject(shape)
  
  // Validate required properties exist
  if (!store.dispatch || typeof store.dispatch !== 'function') {
    throw new Error('Store must have a dispatch function')
  }
  if (!store.subscribe || typeof store.subscribe !== 'function') {
    throw new Error('Store must have a subscribe function')
  }
  if (!store.getState || typeof store.getState !== 'function') {
    throw new Error('Store must have a getState function')
  }
  if (!store.replaceReducer || typeof store.replaceReducer !== 'function') {
    throw new Error('Store must have a replaceReducer function')
  }
  if (!store.runSaga || typeof store.runSaga !== 'function') {
    throw new Error('Store must have a runSaga function')
  }
  if (!store.injectedReducers || typeof store.injectedReducers !== 'object') {
    throw new Error('Store must have injectedReducers object')
  }
  if (!store.injectedSagas || typeof store.injectedSagas !== 'object') {
    throw new Error('Store must have injectedSagas object')
  }
}

export default checkStore
