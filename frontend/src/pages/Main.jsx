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
  const { films, loading, error } = useSelector((state) => state.films);

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {films.map((f) => (
        <li key={f.id}>{f.title}</li>
      ))}
    </ul>
  );
}