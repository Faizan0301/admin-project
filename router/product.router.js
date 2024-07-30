const { Router } = require("express");
const { addProduct, productPage, viewProduct } = require("../controllers/product.controller");
const upload = require("../middlewares/multer.middleware");

const p_router=Router();

p_router.post('/',upload,addProduct)
p_router.get('/',productPage)
p_router.get('/view',viewProduct)

module.exports=p_router