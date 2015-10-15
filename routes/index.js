var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Measurement = mongoose.model('Measurement');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/api/measurements', function(req, res) {

	// Search for all posts
	Measurement.find(function(err, measurements) {
		if (err)
			res.send(err);
		// Return all posts
		res.json(measurements);
	});
});



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
