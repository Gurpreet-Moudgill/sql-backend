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
} = require("../controllers/dbController");
const express = require("express");

const router = express.Router();

router.post("/add", addProduct);
router.get("/getall", getallProducts);
router.get("/getone/:id", getProduct);
router.put("/update/:id", updateProduct);
// router.delete('/del/:id', deleteProduct);
router.get("/getaddress", getaddress);
router.post("/addaddress", addAddress);
router.get("/onetoone", onetoone);
router.get("/onetomany", onetomany);
router.get("/belongsTo", belongsTo);

module.exports = router;
