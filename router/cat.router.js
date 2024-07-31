const { Router } = require("express");
const {catPage, addCat, viewCat, getCat} = require("../controllers/cat.controller");

const cat_router=Router();

cat_router.get('/',catPage);
cat_router.post('/',addCat);
cat_router.get('/view',viewCat);
cat_router.get('/data',getCat);

module.exports=cat_router;