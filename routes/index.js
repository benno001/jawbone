var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Measurement = mongoose.model('Measurement');
var cacheOpts = {
	    max:50,
	    maxAge:1000*60*60
	};
require('mongoose-cache').install(mongoose, cacheOpts)

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Arsonist Medical Center (AMC) FHIR API' });
});

/* GET all measurements 
 * req = request
 * res = response
 * Measurement.find searches through database
 * If error occurs, sends results to page via error
 * If no error occurs, sends measurements to page in json format
 * */
router.get('/api/measurements', function(req, res) {
	// Search for all posts
	Measurement.find().cache().exec(function(err, measurements) {
		if (err)
			res.send(err);
		// Return all posts
		res.json(measurements);
	});
});

/* GET measurements for given date
 * req = request
 * res = response
 * variable req.params.date = whatever user types in instead of :date
 * Measurement.find searches through database for query date = req.params.date
 * If error occurs, sends results to page via error
 * If no error occurs, sends measurements to page in json format
 * */
router.get('/api/measurements/:date', function(req, res){
	// Search for one post
	Measurement.find({date: req.params.date},function(err, measurements) {
		if (err)
			res.send(err);

		// Return all posts
		res.json(measurements);
	});

});

module.exports = router;
