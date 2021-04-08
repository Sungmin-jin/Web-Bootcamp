var express = require('express');
var methodOverride = require('method-override');
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var expressSanitizer = require('express-sanitizer');

//app config
mongoose.connect(
  'mongodb+srv://jayhan:1234@cluster0-5m6dd.mongodb.net/test?retryWrites=true&w=majority'
);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(expressSanitizer());

//Mongoose Model config
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now },
});

var Blog = mongoose.model('Blog', blogSchema);

//restful route
// Blog.create({
//     title: "Test Blog",
//     image: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg",
//     body: "HELLO THIS IS A BLOG POST!"

// });

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/blogs', (req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) {
      console.log('ERROR');
    } else {
      res.render('index', { blogs: blogs });
    }
  });
});

app.get('/blogs/new', (req, res) => {
  res.render('new');
});

//CREATE ROUTE
app.post('/blogs', (req, res) => {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.create(req.body.blog, (err, newBlog) => {
    if (err) {
      res.render('new');
    } else {
      res.redirect('/blogs');
    }
  });
});

app.get('/blogs/:id', (req, res) => {
  Blog.findById(req.params.id, function (err, foundBlog) {
    if (err) {
      res.redirect('/blogs');
    } else {
      res.render('show', { blog: foundBlog });
    }
  });
});

app.get('/blogs', (req, res) => {
  res.render('index');
});

//EDIT ROUTE
app.get('/blogs/:id/edit', (req, res) => {
  Blog.findById(req.params.id, function (err, foundBlog) {
    if (err) {
      res.redirect('/blogs');
    } else {
      res.render('edit', { blog: foundBlog });
    }
  });
});
// UPDATE ROUTE
app.put('/blogs/:id', (req, res) => {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
    if (err) {
      //   res.redirect('/blogs');
    } else {
      //   res.redirect('/blogs/' + req.params.id);
    }
  });
});

//DESTROY ROUTE
app.delete('/blogs/:id', (req, res) => {
  //destory and redirect
  Blog.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.redirect('/blogs');
    } else {
      res.redirect('/blogs');
    }
  });
});

app.listen(4000, () => {
  console.log('local host 4000');
});
