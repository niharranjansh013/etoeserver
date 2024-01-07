var express = require('express');
var router = express.Router();

//Query parameter
router.get('/query-params-test', function(req, res, next) {
  var{name,loc}=req.query
  res.send(`Hallow this is ${name}, i am from ${loc} `);
});
//path parameter
//in path param two are static(users and path-params) and two and dynamic(name,loc)
router.get('/path-params-test/:name/:loc', function(req, res, next) {
  var{name,loc}=req.params
  res.send(`Hallow this is ${name}, i am from ${loc} `);
});
//headers parameter
router.put('/headers-test', function(req, res, next) {
  var{name,loc}=req.headers
  res.send(`Hallow this is ${name}, i am from ${loc} `);
});
//Request body
router.post('/body-test', function(req, res, next) {
  var{name,loc}=req.body
  res.send(`Hallow this is ${name}, i am from ${loc} `);
});

module.exports = router;
