const { Router } = require("express");
const { subCatPage, addSubCat, viewSubCat } = require("../controllers/subCat.controller");

const subCat_router=Router()

subCat_router.get('/',subCatPage);
subCat_router.post('/',addSubCat);
subCat_router.get('/view',viewSubCat)

module.exports=subCat_router;