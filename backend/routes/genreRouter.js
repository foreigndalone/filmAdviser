const { Router } = require("express");
const genreController = require("../controllers/genreController");

const router = Router();

router.get("/", genreController.getGenres);

module.exports = router;