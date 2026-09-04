import { createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
interface UserState {
  name: string
  isLoggedIn: boolean
  isLoggedMail:boolean
  parol:string
}
const initialState: UserState = {
  name: '',
  isLoggedIn: false,
  isLoggedMail:false,
  parol:"1111"
}
const User = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginParol:(state, action:PayloadAction<string>)=>{
      action.payload==state.parol?state.isLoggedIn=true:state.isLoggedIn=false;
    },
    loginMail: (state,action:PayloadAction<string>) => {
      state.name=action.payload
      state.isLoggedMail=true
    },//action - объект-действие отправленный через dispatch
    
    logout: (state) => {
      state.name=""
      state.isLoggedIn=false
      state.isLoggedMail=false
    },
  },
})
export const { loginParol, loginMail, logout } = User.actions
export default User.reducer //при такой записи значение переменной стирается и по сути
//мы можем присвоить новое
