import { Paper, TextField } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'

export const InputFindFilm = () => {
  const [nameFilm, setnameFilm] = useState<string>('')
  const [flag, setFlag] = useState<boolean>(false)
  const url = `https://api.themoviedb.org/3/search/movie?query=${nameFilm}&include_adult=false&language=ru&page=1`
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
          throw new Error(`Ошибка: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        setnameFilm('')
        console.log(data)
      })
      .catch((err) => console.error(err.message))
  }, [flag])
  return (
    <>
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setFlag(!flag)
        console.log(nameFilm)
      }}
    >
      {' '}
      <Paper elevation={1}>
      <TextField sx={{width:'100%'}}
        placeholder="Введите название фильма"
        value={nameFilm}
        onChange={(e) => setnameFilm(e.target.value)}
      ></TextField>
      </Paper>
    </form>
    </>
  )
}
