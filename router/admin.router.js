const { Router } = require("express");
const { indexPage, changePassPage, changPass } = require("../controllers/admin.conroller");

const admin_router=Router();

admin_router.get('/',indexPage)
admin_router.get('/changePass',changePassPage)
admin_router.post('/changePass',changPass)

module.exports=admin_router
