import { Autocomplete, Rating, Slider } from '@mui/material'
import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getViewEveryRoute } from './lib/Route'
import { BoxStyled2 } from './Styles'
import { InputFindFilm } from './Input'
import { Provider, useSelector } from 'react-redux'
import { store, type RootState } from './Redux/Store'
import { Counter } from './Redux/ButtonFromRedux'
import { PopUp } from './Redux/PopUpFromRedux'

const top100films: string[] = ['Texas and Mexico', 'Russia Good']
export const Component = () => {
  const [data, setData] = useState<[]>()
  const url: string =
    'https://api.themoviedb.org/3/movie/popular?language=ru&page=2'
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmE5NGFiN2VkMWY0MTYzNWVmYTYwNWY3ZWM3NGEwYSIsIm5iZiI6MTc1Mzg5ODQzOC45MjEsInN1YiI6IjY4OGE1ZGM2ODYyYmNkMmJmYmExYTZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JkQMetRZX9F4quD8GBqSSWp2VLcNctcAL_VwQ_SUrSk',
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.log('Произошла ошибка: ', response.status)
          throw new Error(`Ошибка сервера:  ${response.statusText}`)
        }
        return response.json()
      })
      .then((data) => {
        setData(data.results)
        console.log(data)
      })
      .catch((err) => console.log('Произошла ошибка: ' + err.message))
  }, [])
  const [value, setValue] = useState<string[]>([])
  // const state=store.getState()//берет разовое состояние 
  const isLoggedIn=useSelector((state:RootState)=>state.user.isLoggedIn)
  return isLoggedIn? 
      <BoxStyled2>
        <InputFindFilm></InputFindFilm>
        <Link to={getViewEveryRoute({ id: 'numberOne' })}>
          <h1>Список фильмов:{value}</h1>
        </Link>
        <Link to={getViewEveryRoute({ id: 'numberTwo' })}>
          <h1>Переход на другой компонент</h1>
        </Link>
        <Autocomplete
          value={value}
          onChange={(e, value) => {
            ;(setValue(value), console.log(value))
          }}
          multiple
          sx={{}}
          options={top100films}
          getOptionLabel={(a) => a}
          renderInput={(params) => <TextField {...params} label="Фильмы" />}
        />
        <Slider min={0} max={100} />
        <button onClick={() => console.log(data?.length)}>
          Получить в консоль
        </button> 
        <Counter></Counter> 
        <Rating defaultValue={9} readOnly max={10}> </Rating>   
      </BoxStyled2>
  :(<PopUp></PopUp>)
}
