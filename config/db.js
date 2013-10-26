var mongoose = require('mongoose');

module.exports = function(app) {
  // Connect to the database
  mongoose.connect(app.get('db'), function (err, res) {
    if (err) { 
    console.log ('ERROR connecting to: ' + app.get('db') + '. ' + err);
    } else {
    console.log ('Succeeded connected to: ' + app.get('db'));
    }
  });

  // Register models
  mongoose.model('Job', require('../model_schema/jobs'));
};