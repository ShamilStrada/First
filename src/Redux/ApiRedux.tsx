import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    prepareHeaders(headers, TOKEN) {
      headers.set(
        'Authorization',
        `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmE5NGFiN2VkMWY0MTYzNWVmYTYwNWY3ZWM3NGEwYSIsIm5iZiI6MTc1Mzg5ODQzOC45MjEsInN1YiI6IjY4OGE1ZGM2ODYyYmNkMmJmYmExYTZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JkQMetRZX9F4quD8GBqSSWp2VLcNctcAL_VwQ_SUrSk`
      )
      return headers
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => '/movie/popular',
    }),
    addFavourite: builder.mutation({
      query: (movieId) => ({
        url: `/account/22187086/favorite`,
        method: 'POST',
        body: {
          media_type: 'movie',
          media_id: movieId,
          favorite: true,
        },
      }),
    }),
  }),
})
export const { useGetMoviesQuery, useAddFavouriteMutation } = api
