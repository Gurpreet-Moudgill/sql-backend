const { addProduct, getallProducts, getProduct, updateProduct, deleteProduct } = require("../controllers/dbController");
const express = require('express');

const router = express.Router();

router.post('/add',addProduct
);
router.get('/getall', getallProducts);
router.get('/getone/:id', getProduct);
router.put('/update/:id', updateProduct);
router.delete('/del/:id', deleteProduct);

module.exports = router;