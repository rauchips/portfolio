var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'My Portfolio' });
});
router.get('/About', function(req, res, next) {
    res.render('about', { title: 'My Portfolio' });
});
router.get('/Skills', function(req, res, next) {
    res.render('skills', { title: 'My Portfolio' });
});
router.get('/Projects', function(req, res, next) {
    res.render('projects', { title: 'My Portfolio' });
});

module.exports = router;