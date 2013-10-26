var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Job = new Schema ({
  salary: String,
  position: { lattitude: Number, longitude: Number },
  type: String,
  description: String,
  duration: String
});

module.exports = Job;
