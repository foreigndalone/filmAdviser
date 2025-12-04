const { Router } = require("express");
const filmController = require("../controllers/filmController.js");

const router = Router();

router.get("/genres/:genreId", filmController.getByGenre);

module.exports = router;
