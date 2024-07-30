const { Router } = require("express");

const passport = require("passport");
const { loginpage, signupPage, logout, signup } = require("../controllers/user.controller");

const user_router = Router()

user_router.get('/login', loginpage)
user_router.post('/login',passport.authenticate("local",{
    failureRedirect:"/login",
    successRedirect:"/"
}))
user_router.get('/signup', signupPage)
user_router.post('/signup', signup)
user_router.get('/logout', logout)

module.exports = user_router