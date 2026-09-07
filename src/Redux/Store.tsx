import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterSlice'
import counter2Reducer from './CounterSlice2'
import UserReducer from './CheckMailSlice'
import {api} from './ApiRedux'

export const store = configureStore({
  reducer: { counter: counterReducer, user: UserReducer, [api.reducerPath]:api.reducer, counter2:counter2Reducer},
  middleware: (getDefault)=>getDefault().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState> //Форма стейта
export type AppDispatch = typeof store.dispatch
