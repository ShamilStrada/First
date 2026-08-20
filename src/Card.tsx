import { Card } from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export function MyCard() {
const {id} = useParams() as {id:string};
  return (
    <>
      <Link to={"/"}><h1>{id}</h1></Link>
      <h2>В силу вступили новые изменения</h2>
      <h2>Для теста</h2>
      <h3>Еще парочка изменений</h3>
      <h4>Эти изменения он не увидит</h4>
    </>
  );
}
