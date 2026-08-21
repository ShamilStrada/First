import { Link, useParams } from "react-router-dom"
import { getAllRoutes } from "./lib/Route"

export const NewComponent=()=>{
const {numberTwo} = useParams() as {numberTwo:string}
return(
<Link to={getAllRoutes()}><h1>{numberTwo}</h1></Link>
)
}