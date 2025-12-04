 const API_KEY = process.env.TMDB_API_KEY
 const BASE_LINK = 'https://api.themoviedb.org/3'

 const fetchTMDB = async(path, params = {})=>{
    const url = new URL(`${BASE_LINK}${path}`)
    url.searchParams.append('api_key', API_KEY)

    for(const key in params){
        url.searchParams.append(key, params[key])
    }

    try{
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error(`TMDB error: ${res.status}`);
        }
        return await res.json()
    }catch(err){
        console.error("TMDB fetch error:", err.message);
        throw err;
    }
 }
 
 module.exports = {
    fetchTMDB
 }