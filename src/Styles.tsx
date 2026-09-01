import {Box, makeStyles} from "@mui/material";
// import type { Theme } from "@mui/material/styles"
import {styled} from "@mui/material/styles";

export const BoxStyled=styled(Box)(({theme})=>({
        m:2,
        display:"flex",
        border:"3px solid black",
        position:"absolute",
        top:0,
        right:0,
        flexWrap:"wrap",
        flexDirection:'row',
        width:800,
        height:500,
        alignContent:'stretch',
        alignItems:"stretch",
        overflow:'auto',
         '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
  '&:active': {
         backgroundColor: theme.palette.secondary.dark,
  }
}))
export const BoxStyled2=styled(Box)(({theme})=>({
        m:2,
        display:'flex',
        flexDirection:'column',
        border:'3px solid black',
        position:'absolute',
        width:500,
        height:500,

}))

// export const useStyles = makeStyles((theme:Theme)=>({
// Box1:{
//         m:1,
//         display:"flex",
//         border:"2px solid black",
//         position:"absolute",
//         top:0,
//         right:0,
//         flexWrap:"wrap",
//         direction:"column",
//         width:700,
//         height:500,
//         alignContent:"flex-start"
// },
// Box2:{

// }
// }))