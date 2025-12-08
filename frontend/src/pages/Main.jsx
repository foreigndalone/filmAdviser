import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilms } from '../redux/filmSlice'
export const Main = () => {

  return (
    <>
    <div>Main</div>
    <FilmsList/>
    </>
  )
}

export  function FilmsList() {

  const dispatch = useDispatch();
  const { films, loading, error } = useSelector((state) => state.filmsReducer);
  const favoriteGenres = useSelector((state) => state.userReducer.user.favorite_genres);

  useEffect(() => {
    if (favoriteGenres.length > 0) {
      dispatch(fetchFilms(favoriteGenres.join(",")));
    }

  }, [favoriteGenres]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {films.map((f) => (
        <li key={f.id}>{f.title} {f.genre_ids}</li>
      ))}
    </ul>
  );
}