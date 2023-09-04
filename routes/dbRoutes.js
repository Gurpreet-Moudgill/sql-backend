const {
  deleteProduct,
  addProduct,
  getallProducts,
  getProduct,
  updateProduct,
  getaddress,
  addAddress,
  ro,
} = require("../controllers/dbController");
const {authenticateToken} = require("../controllers/authCotroller")
const express = require("express");

const router = express.Router();
// Users
router.post("/add", authenticateToken, addProduct);
router.get("/",authenticateToken, getallProducts);
router.get("/getall", authenticateToken, getallProducts);
router.get("/getone/:id",authenticateToken, getProduct);
router.put("/update/:id",authenticateToken, updateProduct);
router.get('/del/:id',authenticateToken, deleteProduct);

// Addresses
router.get("/getaddress", getaddress);
router.post("/addaddress", addAddress);

// Associations
// router.get("/onetoone", onetoone);
// router.get("/onetomany", onetomany);
// router.get("/belongsTo", belongsTo);

//Routes
router.get('/create', ro)

module.exports = router;
