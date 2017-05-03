var express = require('express');
var router = express.Router();
var myBasicAuth = require('../my-basic-auth.js');

// Load the Cloudant library.
var Cloudant = require('cloudant');

// Initialize the library with my account.
var cloudant = Cloudant({ account: process.env.CLOUDANT_ACCOUNT, password: process.env.CLOUDANT_PASSWORD });

/* GET users listing. */
router.get('/', myBasicAuth, function(req, res, next) {
    var rows_per_page = 10;
    var page = 1;
    if (req.query.page) {
        page = parseInt(req.query.page);
    }
    var skip = (page - 1) * rows_per_page;

    var db = cloudant.db.use('playlist');
    if (req.query.user) {
        db.find({
            limit: rows_per_page,
            selector: { "user": { "$eq": parseInt(req.query.user) } },
            fields: ["_id", "_rev", "user", "type", "owner_id", "item_id", "external_url"]
        }, function(err, result) {
            if (err) {
                console.log(err);
            }

            var findRows = result.docs;

            res.render('playlists', { title: 'Playlists', playlists: findRows, totalRows: result.total_rows, rowsPerPage: rows_per_page, currentPage: page });
        });
    } else {
        db.list({
            include_docs: true,
            revs_info: false,
            limit: rows_per_page,
            skip: skip
        }, function(err, body) {
            if (err) {
                console.log(err);
            }
            var playlistRows = body.rows;

            res.render('playlists', { title: 'Playlists', playlists: playlistRows, totalRows: body.total_rows, rowsPerPage: rows_per_page, currentPage: page });
        });
    }
});

module.exports = router;