import { Card } from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAllRoutes } from "./lib/Route";
export function MyCard() {
  const { numberOne } = useParams() as { numberOne: string };
  return (
    <>
      <Link to={getAllRoutes()}>
        <h1>{numberOne}</h1>
      </Link>
      <h2>В силу нихуя не вступило</h2>
      <h3>GGmoll</h3>
    </>
  );
}
