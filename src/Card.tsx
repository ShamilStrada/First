import { Card } from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function MyCard() {
const {id} = useParams() as {id:string};
  return (
    <>
      <Link to={"/"}><h1>{id}</h1></Link>
      <h1>+</h1>
      <h2>В силу вступили новые изменения</h2>
    </>
  );
}
