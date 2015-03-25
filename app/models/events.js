var mongoose = require('mongoose'),
	users = require('./users'),
	relationship = require("mongoose-relationship"),
	ObjectId = mongoose.Schema.ObjectId;


var EventSchema = new mongoose.Schema({
  coords: {lat: Number, lng: Number},
  name: String,
  description: String,
  participants:[{type: ObjectId, ref: 'userSchema'}],
  private: Boolean,
  author: {type: ObjectId, ref: 'userSchema'},
  dateOfEvent: Date,
  dateOfCreation: Date
});

module.exports.getEvent = mongoose.model('events', EventSchema);