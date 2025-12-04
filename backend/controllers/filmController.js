const {fetchTMDB} = require('../models/filmModel.js')

module.exports = {
    getByGenre: async(req, res) =>{
        const { genreId } = req.params; 
        try{
            const data = await fetchTMDB("/discover/movie", {
                with_genres: genreId,
                sort_by: "popularity.desc"
            })
            res.json(data)
        }catch(err){
            console.log(err);
            res.status(500).json({ message: "server error" });
        }
    }
}