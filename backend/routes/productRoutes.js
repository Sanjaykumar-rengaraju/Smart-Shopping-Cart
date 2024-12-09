const express = require('express');
const multer = require('multer');
const { addProduct, getProducts, recognizeProduct } = require('../controllers/productController');
const router = express.Router();

const upload = multer({ dest: 'uploads/product_images/' });

router.post('/add', upload.single('image'), addProduct);
router.get('/', getProducts);
router.post('/recognize', upload.single('image'), recognizeProduct);

module.exports = router;