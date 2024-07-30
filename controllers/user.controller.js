const userModel = require("../models/user.schema");

const loginpage=(req,res)=>{
    return res.render('pages/login')
}
const signupPage=(req,res)=>{
    return res.render('pages/signup');
}
const signup=async(req,res)=>{
    const { username, email, password, phone} = req.body
    try {
        await userModel.create({ username, email, password, phone })
        return res.redirect('/login')
    } catch (err) {
        console.log(err);
    }
}
const logout=(req,res)=>{
    req.logout(()=>{
        return res.redirect('/')
    })
}

module.exports={loginpage,signupPage,signup,logout}