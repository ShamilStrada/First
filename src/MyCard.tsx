import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function MyCardTrue(){
    return(
        <Card sx={{maxHeight:150,
            maxWidth:150,
            m:1,
            minHeight:90,
            minWidth:90,
            height:140,
            width:140,
        }}>
            <CardMedia component="img" image="https://avatarko.ru/img/kartinka/1/multfilm_pingviny.jpg" alt="Nichego"
            height={50}
            width={50}/>
            <CardContent>
                <Typography fontSize={7}>Здесь будет написан очень большой текст, его надо каким-то образом уместить </Typography>
            </CardContent>
            <CardActions >
            {/* <Link to={"/"}><button>Share</button></Link>     */}
            </CardActions>
        </Card>
    )
}