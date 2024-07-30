const { Router } = require("express");
const {catPage, addCat, viewCat} = require("../controllers/cat.controller");

const cat_router=Router();

cat_router.get('/',catPage)
cat_router.post('/',addCat)
cat_router.get('/view',viewCat)

module.exports=cat_router