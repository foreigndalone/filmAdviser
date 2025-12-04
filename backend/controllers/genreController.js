const { getGenres } = require("../models/genreModel");

module.exports = {
    getGenres: async (req, res) => {
        try {
            const data = await getGenres();
            return res.json(data);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "server error" });
        }
    }
};