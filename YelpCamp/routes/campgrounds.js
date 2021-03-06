var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");

router.get('/', (req, res) =>{
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});
        }
    })
    // res.render("campgrounds", {campgrounds: campgrounds});
})


//create route add new campground to db
router.post("/", (req, res) => {
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {
        name: name,
        image: image,
        description: desc
    }
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds")
        }
    })
    //Create a new campground and save to DB

})

//New - show form to create new campground
router.get('/new', (req, res) => {
    res.render("campgrounds/new")
})

//Show - shows more info about one campground
router.get("/:id", (req, res)=>{
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
    // render show template with that campground
})

module.exports = router;