import { configureStore } from '@reduxjs/toolkit'
import { flightApi } from './api/flight'

export const store = configureStore({
  reducer: {
    [flightApi.reducerPath] : flightApi.reducer
  },

  middleware : (getDefaultMiddleware) => 
    getDefaultMiddleware().concat([flightApi.middleware])
})