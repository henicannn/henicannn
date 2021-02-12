var express = require('express');
var router = express.Router();
var Contact = require('../models/contact.js')


router.get('/', function(req, res) {
    res.render('index');
})

// About page route.
router.post('/submit/add', function(req, res, next) {
    var newguy = new Contact();

    newguy.fname = req.body.fname;
    newguy.lname = req.body.lname;
    newguy.email = req.body.email;
    newguy.message = req.body.message;

    newguy.save(function(err, data) {
        if (err) return console.error(err);
        console.log("new person saved to collection.");
    });

    res.redirect('/submit');

});

module.exports = router;