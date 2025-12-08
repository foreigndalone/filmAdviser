import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchGenres } from "../features/genres/genresSlice";





export const InputWithLabel = ({ id, label, type = "text", value, setData }) => {
  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={label}
        style={{ display: "block", padding: "8px", marginTop: "5px" }}
      />
    </div>
  );
};






export const GenreRadio = ({ selected, setSelected }) => {
  const [genres, setGenres] = useState([]);
  const genresList = useSelector((state)=>state.genreReducer.genres)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGenres())
  }, []);

  const toggleGenre = (id) => {
    id = Number(id); // ← важнейшая часть

    if (selected.includes(id)) {
      setSelected((prev) => prev.filter((g) => g !== id));
    } else {
      setSelected((prev) => [...prev, id]);
    }
  };

  return (
    <div>
      <h4>Choose your favorite genres</h4>

      {genresList.length === 0 && <p>Loading genres...</p>}

      {genresList.map((g) => (
        <label key={g.id}>
          <input
            type="checkbox"
            value={g.id}
            checked={selected.includes(g.id)}
            onChange={() => toggleGenre(g.id)}
          />
          {g.name}
        </label>
      ))}
    </div>
  );
};






export const GenderRadio = ({gender, setGender})=>{

    return(
        <>
        <h4>Select your gender</h4>

        <label style={{ display: "block" }}>
            <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
            />
            Male
        </label>

        <label style={{ display: "block" }}>
            <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
            />
            Female
        </label>
        </>
    )
}








export const AgeInput = ({ age, setAge }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label htmlFor="age">Your age</label>
      <input
        id="age"
        type="number"
        min="10"
        max="99"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Enter your age"
        style={{ display: "block", padding: "8px", marginTop: "5px" }}
      />
    </div>
  );
};








export const YearRangeSelector = ({
  from,
  to,
  setFrom,
  setTo,
}) => {

  // создаём массив лет (1950 — 2025)
  const years = [];
  for (let y = 1950; y <= 2025; y++) years.push(y);

let yearsAfter = []

if (from) {
  yearsAfter = years.filter(year => year >= from)
}
    

  return (
    <div>
      <h4>Select preferred release years</h4>

      <label>
        From:
        <select value={from} onChange={(e) => setFrom(Number(e.target.value))}>
          <option value="">--</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </label>

      <label>
        To:
        <select value={to} onChange={(e) => setTo(Number(e.target.value))}>
          <option value="">--</option>
          {yearsAfter.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};