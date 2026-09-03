import { createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
interface UserState {
  name: string
  isLoggedIn: boolean
  parol:string
}
const initialState: UserState = {
  name: '',
  isLoggedIn: false,
  parol:"1111"
}
const User = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state,action:PayloadAction<string>) => {
      state.name=action.payload
      state.isLoggedIn=true
    },//action - объект-действие отправленный через dispatch
    
    logout: (state) => {
      state.name=""
      state.isLoggedIn=false
    },
  },
})
export const { login, logout } = User.actions
export default User.reducer //при такой записи значение переменной стирается и по сути
//мы можем присвоить новое
