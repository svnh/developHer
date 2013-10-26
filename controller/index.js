var mongoose = require('mongoose');

module.exports = {
  index:  function (req, res, next) {
    // console.log("hello!");
    res.render('index.html');
  }
}