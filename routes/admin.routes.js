const express = require('express');
const adminControllers=require('../controllers/admin.controllers');
const imageUploadMiddlewarw =require('../middlewares/image-upload');
const router= express.Router();

router.get('/products',adminControllers.getProducts);
router.get('/products/new',adminControllers.getNewProducts);
router.post('/products',imageUploadMiddlewarw,adminControllers.createNewProducts);

module.exports = router;