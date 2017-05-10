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

    var db = cloudant.db.use('telegram_users');
    db.list({ include_docs: true, revs_info: false, limit: rows_per_page, skip: skip }, function(err, body) {
        var userRows = null;
        if (err) {
            console.log(err);
        }
        userRows = body.rows;

        res.render('users', { title: 'Users', users: userRows, totalRows: body.total_rows, rowsPerPage: rows_per_page, currentPage: page });
    });
});

router.post('/edit', myBasicAuth, function(req, res, next) {
    console.log("req.body.docId = " + req.body.docId);
    console.log("req.body.newSenseId = " + req.body.newSenseId);

    var db = cloudant.db.use('telegram_users');
    db.find({ selector: { _id: req.body.docId } }, function(er, result) {
        if (er) {
            throw er;
        }

        console.log('Found %d documents with _id = %s', result.docs.length, req.body.docId);
        if (result.docs.length > 0) {
            result.docs[0].sense_id = req.body.newSenseId;

            // ...and insert a document in it.
            db.insert(result.docs[0], result.docs[0]._id, function(err, body, header) {
                if (err) {
                    return console.log('[telegram_users.insert] ', err.message);
                }

                console.log('You have inserted the rabbit.');
                console.log(body);
                res.redirect('/users');
            });
        } else {
            res.redirect('/users');
        }
    });
});

module.exports = router;