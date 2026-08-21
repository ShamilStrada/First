import { Slider, Box } from "@mui/material";
import { MyCard } from "./Card";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Component } from "./Component";
import { MyCardTrue } from "./MyCard";
import { BoxStyled } from "./Styles";
import { NewComponent } from "./NewComponent";
import { getAllRoutes, getViewEveryRoute } from "./lib/Route";

export default function App() {
  return (
    <>
      <Box sx={{ width: 300, ml: 6 }}>
        <BrowserRouter>
          <Routes>
            <Route path={getAllRoutes()} element={<Component></Component>} />
            <Route
              path={getViewEveryRoute({ id: `:numberOne `})}
              element={<MyCard></MyCard>}
            />
            <Route
              path={getViewEveryRoute({ id: `:numberTwo` })}
              element={<NewComponent></NewComponent>}
            />
          </Routes>
        </BrowserRouter>
      </Box>
      <BoxStyled>
        <MyCardTrue></MyCardTrue>
        <MyCardTrue></MyCardTrue>
        <MyCardTrue></MyCardTrue>
        <MyCardTrue></MyCardTrue>
        <MyCardTrue></MyCardTrue>
      </BoxStyled>
    </>
  );
}
