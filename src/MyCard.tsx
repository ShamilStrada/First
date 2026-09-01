import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

import { Link } from 'react-router-dom'
import MyImage from './assets/hero.png'

export function MyCardTrue() {
  return (
    <Card
      sx={{
        // flex:100,//минимальный размер
        display: 'flex',
        // flexDirection: 'row',
        m: 0,
        p: 0,
        // maxHeight: 150,
        // maxWidth: 150,
        // minHeight: 90,
        // minWidth: 90,
        // height: 150,
        // width: 400,
        height: '30%',
        width: '60%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        transition: 'transform 10s, box-shadow 0.2s', //трансформация карточки
        '&:hover': {
          //при наведении курсора на карточку
          transform: 'scale(1.1)',
          boxShadow: 7,
        },
      }}
    >
      <CardMedia
        component="img"
        image={MyImage}
        // https://avatarko.ru/img/kartinka/1/multfilm_pingviny.jpg
        alt="Nichego"
        sx={{ objectFit: 'contain', height: 100, alignContent: 'center', 
        width:150, flexShrink: 0 }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography fontSize={7} sx={{WebkitLineClamp: 3}}>
            Здесь будет написан очень большой текст, его надо каким-то образом
            уместить.Здесь будет написан очень большой текст, его надо каким-то образом
            уместить <br />
            Образно!
          </Typography>
        </CardContent>
        <CardActions sx={{ flex:'1 0 auto', justifyContent: 'space-around', flexShrink: 0, alignItems:'flex-start' }}>
          <button>Share</button>
          <button>PlusMe</button>
        </CardActions>
      </Box>
    </Card>
  )
}
