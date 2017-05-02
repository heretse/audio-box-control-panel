var express = require('express');
var router = express.Router();
var myBasicAuth = require('../my-basic-auth.js');

// Load the Cloudant library.
var Cloudant = require('cloudant');

// Initialize the library with my account.
var cloudant = Cloudant({ account: process.env.CLOUDANT_ACCOUNT, password: process.env.CLOUDANT_PASSWORD });

/* GET home page. */
router.get('/', myBasicAuth, function(req, res, next) {
    cloudant.db.list(function(err, allDbs) {
        console.log('All my databases: %s', allDbs.join(', '))

        res.render('index', { title: 'Databases', allDbs: allDbs });
    });
});

module.exports = router;