var express = require('express');
var router = express.Router();

// Load the Cloudant library.
var Cloudant = require('cloudant');

// Initialize the library with my account.
var cloudant = Cloudant({ account: process.env.cloudant_account, password: process.env.cloudant_password });

/* GET home page. */
router.get('/', function(req, res, next) {
    cloudant.db.list(function(err, allDbs) {
        console.log('All my databases: %s', allDbs.join(', '))

        res.render('index', { title: 'Express', allDbs: allDbs });
    });
});

module.exports = router;