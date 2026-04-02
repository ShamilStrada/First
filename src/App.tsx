import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { Slider, Box } from "@mui/material";
import { MyCard } from "./Card";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Component } from "./Component";

// type topfilms = {
//   name: string;
//   year?: number;
// };
// let top10films: topfilms = {
//   name: "Good gorever",
// };
export default function App() {
  return (
    <>
      <Box sx={{ width: 300, ml: 6 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Component></Component>}/>
            <Route path="/Card/:id" element={<MyCard></MyCard>}/>
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}
