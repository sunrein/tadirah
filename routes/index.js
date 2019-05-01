var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TaDiRAH' });
});

router.get('/research-activities', function(req, res, next){
  res.render('research-activities', { title: 'Research Activites' } );
 });

router.get('/research-objects', function(req, res, next){
  res.render('research-objects', { title: 'Research Objects' } );
 });

router.get('/research-techniques', function(req, res, next){
  res.render('research-techniques', { title: 'Research Techniques' } );
 });

router.get('/resources', function(req, res, next){
  res.render('resources', { title: 'Resources' } );
 });

module.exports = router;
