import { Autocomplete,Slider } from "@mui/material"
import{ TextField} from "@mui/material"
const top100films: { name: string }[] = [
  { name: "Texas and Mexico" },
  { name: "Russia Good" },
];
export const Component=()=>{
return(
    <>
        <h1>!!!</h1>
        <Autocomplete
          multiple
          sx={{}}
          options={top100films}
          getOptionLabel={(a) => a.name}
          renderInput={(params) => <TextField {...params} label="Фильмы" />}
        />
        <Slider min={0} max={100} />
        </>
        


)

}