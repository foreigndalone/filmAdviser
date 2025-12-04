const API_KEY = process.env.TMDB_API_KEY;
const BASE_LINK = "https://api.themoviedb.org/3";

async function getGenres() {
    const url = new URL(`${BASE_LINK}/genre/movie/list`);
    url.searchParams.append("api_key", API_KEY);

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Failed to fetch genres");
    }
    return await res.json();
}

module.exports = { getGenres };