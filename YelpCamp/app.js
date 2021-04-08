const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const Campground = require("./models/campground");
const Comment = require("./models/comment");
const seedDB = require("./seeds");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
const commentRoutes = require("./routes/comments");
const campgroundRoutes = require("./routes/campgrounds");
const indexRoutes = require("./routes/index")

seedDB();
mongoose.connect("mongodb+srv://Jason:alsdk1478@cluster0-wfbse.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParse: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', "ejs");
app.use(express.static(__dirname + "/public"));
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();  
})

app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

//Passport configuration
app.use(require("express-session")({
    secret: "anything",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());
//its from user model
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Campground.create(
//     {
//         name: "Granite Hill",
//         image: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
//         description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("NEWLY CREATED CAMPGROUND:    ");
//             console.log(campground);
//         }
//     }
// )

// var campgrounds = [
//     {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
//     {name: "Granite Hill", image: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
//     {name: "Mountrain Goat's", image: "https://images.unsplash.com/photo-1541960394435-cff41352d1e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}
// ]

app.listen(8080, function(){
    console.log("8080")
})