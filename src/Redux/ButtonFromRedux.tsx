import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./Store";
import { increment,decrement,reset } from "./CounterSlice";

export function Counter(){
    const value=useSelector((state:RootState)=>state.counter.value)//данный хук дает доступ к хранилищу
    const dispatch = useDispatch()
    return (
        <div>
            <p>{value}</p>
            <Button onClick={()=>dispatch(increment())}>+</Button>
            <Button onClick={()=>dispatch(decrement())}>-</Button>
            <Button onClick={()=>dispatch(reset())}>reset</Button>
        </div>
    )
}