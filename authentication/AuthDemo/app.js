const express = require('express');
const mongoose = require('mongoose');
const app = express();
const passport = require('passport');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('./models/user');
mongoose.connect("mongodb+srv://jayhan:1234@cluster0-5m6dd.mongodb.net/test?retryWrites=true&w=majority");


app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(require("express-session")({
    secret : "TEST TESTTETSETS",
    resave: false,
    saveUninitialized: false
}))


app.get("/", (req,res)=>{
    res.render("home");
});

app.get("/secret", isLoggedIn, (req, res)=>{
    res.render("secret");
});


//auth route
app.get("/register", (req, res)=>{
    res.render("register");
})

//handling user sign up
app.post("/register", (req, res)=>{
    req.body.username
    req.body.password
    User.register(new User({
        username: req.body.username
    }), req.body.password, (err, user)=>{
        if(err){
            console.log(err);
            return res.render("register");
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secret");
            })
        }
    })
})

//LOGIN ROUTES
//render login form
app.get("/login", (req, res)=>{
    res.render("login");
})

//login 
//middleware
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}),(req, res)=>{

})

app.get("/logout", (req, res)=>{
    req.logout();
    res.redirect("/");
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(1000, function(){
    console.log("1000");
});