const express = require('express');
const db = require('./config/database');
const bodyParser = require('body-parser')
const admin_router = require('./router/admin.router');
const path = require('path');
const p_router = require('./router/product.router');
const cat_router = require('./router/cat.router');
const localAuth = require('./controllers/passport.controller');
const Passport = require('passport');
const expressSession = require('express-session');
const passport = require('passport');
const user_router = require('./router/user.router');
const passportAuth = require('./middlewares/passport.middleware');
const subCat_router = require('./router/subCat.router');
const extCat_router = require('./router/extCat.router');
const flash=require('connect-flash');

localAuth(Passport);

const port = 8084;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname + '/public')));
app.use('/uploads', express.static(path.join(__dirname + '/uploads')));

app.use(express.json());
app.use(expressSession({ secret: "key", resave: false, saveUninitialized: false, }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(user_router)
// app.use(passportAuth)
app.use(admin_router);
app.use('/product', p_router);
app.use('/category', cat_router)
app.use('/subCategory', subCat_router)
app.use('/extCategory', extCat_router)

app.listen(port, (err) => {
    if (!err) {
        db()
        console.log("server start at:- \nhttp://localhost:" + port);
    }
})

