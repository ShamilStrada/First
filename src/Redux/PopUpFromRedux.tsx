import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from './Store'
import { loginMail, loginParol, logout } from './CheckMailSlice'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'

export const PopUp = () => {
  const { name, isLoggedIn, isLoggedMail, parol } = useSelector(
    (state: RootState) => state.user
  )
  const dispatch = useDispatch()
  const [parolIn, setparol] = useState('')
  const [mail, setmail] = useState('')
  return !isLoggedIn ? (
    !isLoggedMail ? (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(loginMail(mail))
          console.log(name)
        }}
      >
        <TextField
          value={mail}
          onChange={(e) => {
            setmail(e.target.value)
            console.log(mail)
          }}
          placeholder="Введите логин"
        ></TextField>
        <Button onClick={() => dispatch(logout())}>Logout</Button>
      </form>
    ) : (
      <form onSubmit={() => dispatch(loginParol(parolIn))}>
        <TextField
          value={parolIn}
          onChange={(e) => setparol(e.target.value)}
          placeholder="Введите пароль"
        ></TextField>
        <Button onClick={() => dispatch(logout())}>Logout</Button>
      </form>
    )
  ) : null
}
