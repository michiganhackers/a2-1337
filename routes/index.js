var express = require('express');
var router = express.Router();
var User = require('../app/models/user');
var validator   = require('validator');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res) {

    User.findOne({email: req.body.email}, function(err, user) {
        if (err)
            return next(err);
        else if (!!user)
            return res.status(401).send("Application has already been submitted");

        var newUser = new User();

        newUser.email           = validator.toString(req.body.email);
        newUser.name            = validator.toString(req.body.name);
        newUser.major           = validator.toString(req.body.major);
        newUser.year            = validator.toString(req.body.year);
        newUser.github          = validator.toString(req.body.github);
        newUser.personalSite    = validator.toString(req.body.personalSite);

        newUser.save(function(err) {
            if (err) {
                return res.status(500).send("Unexpected server error");
            } else {
                return res.send(200);
            }
        });
    });
});


module.exports = router;
