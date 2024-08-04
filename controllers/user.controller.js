const userModel = require("../models/user.schema");
const mailer = require('nodemailer')
const loginpage = (req, res) => {
    return res.render('pages/login', { info: req.flash('info') })
}
const signupPage = (req, res) => {
    return res.render('pages/signup');
}
const signup = async (req, res) => {
    const { username, email, password, phone } = req.body
    try {
        await userModel.create({ username, email, password, phone })
        return res.redirect('/login')
    } catch (err) {
        console.log(err);
    }
}
const logout = (req, res) => {
    req.logout(() => {
        return res.redirect('/')
    })
}
let creatOtp
const forgetPage = async (req, res) => {
    const { email } = req.body
    try {
        const user = await userModel.findOne({ email: email })
        if (!user) {
            req.flash('info', 'user');
            return res.redirect('back');
        };
        creatOtp = Math.floor(100000 + Math.random() * 900000);
        const transporter = await mailer.createTransport({
            service: "gmail",
            auth: {
                user: "faizanrednwhite@gmail.com",
                pass: "gltz rdox zrnr ajku"
            }
        });
        const mailOptions = {
            from: email,
            to: email,
            subject: 'OTP',
            text: `Your OTP is ${creatOtp}`
        };
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Email sent: ' + info.response);
                return res.render('pages/forgetPage', {
                    user,
                    info: req.flash('info')
                })
            }
        })
    } catch (err) {
        res.send(err.message)
    }
}

const forgetPass = async (req, res)=> {
    const { id, otp, password, cpassword } = req.body;
    if (otp == creatOtp) {
        if (password == cpassword) {
            await userModel.findByIdAndUpdate(id, { password})
            return res.redirect('/')
        }else{
            console.log('confirm-password not match..');
            return res.redirect('back')
        }
    }else{
        console.log('otp not match..');
        return res.redirect('back')
    }
}

module.exports = { loginpage, signupPage, signup, logout, forgetPage,forgetPass }