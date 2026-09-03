import {  useDispatch, useSelector } from "react-redux";
import type {RootState}  from "./Store";
import { login,logout } from "./CheckMailSlice";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export const PopUp=()=>{
    const {name,isLoggedIn,parol} = useSelector((state: RootState)=>state.user)
    const dispatch=useDispatch()
    const [log,setlog]=useState('')
    const [lig,setlig]=useState('')
    if (lig==name&&log==parol){
        
    }
    return isLoggedIn?(
        <form></form>
    ):(
        <form>
            <TextField value={lig} onChange={(e)=>setlig(e.target.value)} placeholder="Введите логин"></TextField>
            <TextField value={log} onChange={(e)=>setlog(e.target.value)} placeholder="Введите пароль"></TextField>
            <Button onClick={()=>dispatch(logout())}>Logout</Button>
        </form>
    )
}