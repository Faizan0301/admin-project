const userModel = require("../models/user.schema");

const indexPage=(req,res)=>{
    return res.render('index');
}
const changePassPage=(req,res)=>{
    return res.render('pages/changePassword');
}
const changPass=async(req,res)=>{
    let id=req.user.id
    await userModel.findByIdAndUpdate(id,{password:req.body.password})
    res.send('success')
}

module.exports={indexPage,changePassPage,changPass}