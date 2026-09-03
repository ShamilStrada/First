import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterSlice'
import UserReducer from './CheckMailSlice'

export const store = configureStore({
  reducer: { counter: counterReducer, user: UserReducer },
})

export type RootState = ReturnType<typeof store.getState> //Форма стейта
export type AppDispatch = typeof store.dispatch
