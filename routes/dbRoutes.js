const {
  onetomany,
  onetoone,
  addProduct,
  getallProducts,
  getProduct,
  updateProduct,
  getaddress,
  addAddress,
  belongsTo,
  ro,
} = require("../controllers/dbController");
const express = require("express");

const router = express.Router();
// Users
router.post("/add", addProduct);
router.get("/", getallProducts);
router.get("/getall", getallProducts);
router.get("/getone/:id", getProduct);
router.put("/update/:id", updateProduct);
// router.delete('/del/:id', deleteProduct);

// Addresses
router.get("/getaddress", getaddress);
router.post("/addaddress", addAddress);

// Associations
router.get("/onetoone", onetoone);
router.get("/onetomany", onetomany);
router.get("/belongsTo", belongsTo);

//Routes
router.get('/create', ro)

module.exports = router;
