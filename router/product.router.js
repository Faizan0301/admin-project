const { Router } = require("express");
const { addProduct, productPage, viewProduct, prodectDelete, editPage } = require("../controllers/product.controller");
const upload = require("../middlewares/multer.middleware");

const p_router=Router();

p_router.post('/',upload,addProduct)
p_router.get('/',productPage)
p_router.get('/view',viewProduct)
p_router.get('/edit:id',editPage)
p_router.delete('/delete/:id',prodectDelete)
module.exports=p_router