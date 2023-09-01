const { Router } = require("express");
const { getLogin, getSignUp, postSignUp, postLogin } = require('../controllers/authCotroller')

const router = Router();

router.get("/signup", getSignUp)
router.post("/signup", postSignUp)
router.get("/login", getLogin)
router.post("/login", postLogin)

module.exports = router;
