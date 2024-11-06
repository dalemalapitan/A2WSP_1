var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    description: 'Welcome to the home page of my portfolio site.'
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    description: 'Welcome to the home page of my portfolio site.'
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About', 
    description: 'This is the about page where you can learn more about me.'
  });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'Projects',
    description: 'Here are some of the projects I have worked on.'
  });
});

/* GET contactme page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: 'Contact Me',
    description: 'Feel free to reach out to me through this contact page.'
  });
});
module.exports = router;
