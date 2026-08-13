
import { Autocomplete, Slider } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
const top100films: string[] = ["Texas and Mexico", "Russia Good"];
export const Component = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <>
      <Link to={"/Card/s"} onClick={()=>alert("перешли по ссылке")}><h1>Список фильмов:{value}</h1></Link>
      <Autocomplete
        value={value}
        onChange={(event,value) =>{ setValue(value),console.log(value)}}
        multiple
        sx={{}}
        options={top100films}
        getOptionLabel={(a) => a}
        renderInput={(params) => <TextField {...params} label="Фильмы" />}
      />
      <Slider min={0} max={100} />
    </>
  );
};
