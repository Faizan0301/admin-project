const { Router } = require("express");
const { indexPage, changePassPage } = require("../controllers/admin.conroller");

const admin_router=Router();

admin_router.get('/',indexPage)
admin_router.get('/changePass',changePassPage)

module.exports=admin_router
