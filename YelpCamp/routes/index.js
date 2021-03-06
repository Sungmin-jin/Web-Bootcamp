var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get('/', (req, res) => {
    res.render("landing");
})


//AUTH ROUTES

//show register form
router.get("/register", function(req, res){
    res.render("register");

})

router.post("/register", (req, res)=>{
    var newUser = new User({username: req.body.username})
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            res.render("register")
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/campgrounds")
            })
        }
    });
})

//show login form
router.get("/login", (req, res)=>{
    res.render("login");
})

router.post("/login", passport.authenticate("local",{
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }),
    (req,res)=>{
})


router.get("/logout", (req, res)=>{
    req.logout();
    res.redirect("/campgrounds");
})


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        res.redirect("/login");
    }
}


module.exports = router;