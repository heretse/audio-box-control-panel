var express = require('express');
var router = express.Router();
var myBasicAuth = require('../my-basic-auth.js');

// Load the Cloudant library.
var Cloudant = require('cloudant');

// Initialize the library with my account.
var cloudant = Cloudant({ account: process.env.CLOUDANT_ACCOUNT, password: process.env.CLOUDANT_PASSWORD });

/* GET home page. */
router.get('/', myBasicAuth, function(req, res, next) {
    var rows_per_page = 10;
    var page = 1;
    if (req.query.page) {
        page = parseInt(req.query.page);
    }
    var skip = (page - 1) * rows_per_page;

    var db = cloudant.db.use('conversation_result');

    db.list({
        include_docs: false,
        revs_info: false,
        limit: rows_per_page,
        skip: 0
    }, function(err, body) {
        if (err) {
            console.log(err);
        }
        //var convRows = body.rows;
        //res.render('conversations', { title: 'Conversation', conversations: convRows, totalRows: body.total_rows, rowsPerPage: rows_per_page, currentPage: page });

        db.find({
            limit: rows_per_page,
            skip: skip,
            selector: { "creation_date": { "$gt": null } },
            fields: ["_id", "_rev", "input", "intents", "entities", "output", "context", "creation_date"],
            sort: [{ "creation_date": "desc" }],
        }, function(err, result) {
            if (err) {
                console.log(err);
            }

            var findRows = result.docs;

            res.render('conversations', { title: 'Conversation', conversations: findRows, totalRows: body.total_rows, rowsPerPage: rows_per_page, currentPage: page });
        });
    });

});

router.get('/classify', myBasicAuth, function(req, res, next) {
    res.redirect('/conversations');
});

module.exports = router;