import { Autocomplete, Slider } from '@mui/material'
import { TextField } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getViewEveryRoute } from './lib/Route'
const top100films: string[] = ['Texas and Mexico', 'Russia Good']
export const Component = () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <>
      ///Здесь передаем линк на все остальное
      <Link to={getViewEveryRoute({ id: 'numberOne' })}>
        <h1>Список фильмов:{value}</h1>
      </Link>
      <Link to={getViewEveryRoute({ id: 'numberTwo' })}>
        <h1>Переход на другой компонент</h1>
      </Link>
      <Autocomplete
        value={value}
        onChange={(event, value) => {
          ;(setValue(value), console.log(value))
        }}
        multiple
        sx={{}}
        options={top100films}
        getOptionLabel={(a) => a}
        renderInput={(params) => <TextField {...params} label="Фильмы" />}
      />
      <Slider min={0} max={100} />
    </>
  )
}
