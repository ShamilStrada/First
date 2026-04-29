
import { Slider, Box } from "@mui/material";
import { MyCard } from "./Card";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Component } from "./Component";
import { MyCardTrue } from "./MyCard";
import { BoxStyled } from "./Styles";

export default function App() {
  return (
    <>
      <Box sx={{ width: 300, ml: 6 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Component></Component>} />
            <Route path="/Card/:id" element={<MyCard></MyCard>} />
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
