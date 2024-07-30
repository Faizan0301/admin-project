const { Router } = require("express");
const { extCatPage, addExtCat, viewExtCat } = require("../controllers/extCat.controller");

const extCat_router=Router()

extCat_router.get('/',extCatPage);
extCat_router.post('/',addExtCat);
extCat_router.get('/view',viewExtCat)

module.exports=extCat_router;