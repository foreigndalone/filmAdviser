import React from 'react'
import { useNavigate } from 'react-router';

import { useState } from 'react';
import { GenderRadio, GenreRadio, YearRangeSelector } from '../components/InputWithLabel'
import { AgeInput } from '../components/InputWithLabel'

import { addUsersData } from "../utilis/fetchData";

export const UsersData = () => {
    const [age, setAge] = useState('')
    const [gender, setGender] = useState("");
    const navigate = useNavigate();
    


    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!age||!gender){
            prompt('Nope')
            return
        }
        const res = await addUsersData({
            age: Number(age),
            gender: gender
        })
        if (res) {
            navigate("/update2");
        }
        console.log(res)
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <GenderRadio gender={gender} setGender={setGender} />
            <AgeInput age={age} setAge={setAge}/>

            <button type="submit">Add data</button>
        </form>
    </div>
  )
}

export const UsersData2 = () => {
    const [favoriteGenres, setFavoriteGenres] = useState([]);
    const [from,setFrom] = useState('')
    const [to, setTo] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await addUsersData({
        favorite_genres: favoriteGenres,
        favorite_year_from: Number(from),
        favorite_year_to: Number(to)
    })
    navigate('/main')
}
    

    return(
        <>
        <h1>Films</h1>
        <form onSubmit={handleSubmit}>
            <GenreRadio selected={favoriteGenres} setSelected={setFavoriteGenres}/>
            <YearRangeSelector from={from} setFrom={setFrom} to={to} setTo={setTo}/>
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}
