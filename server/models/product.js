// This is the friend.js file located at /server/models/friend.js
// We want to create a file that has the schema for our friends
// and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
// create our friendSchema
var ProductSchema = new mongoose.Schema({
	product_type: String,
	year: String,
	name: String,
	mfr: String,
	brand: String,
	card_num: String,
	card_type: String,
	img_url_front: String,
	img_url_back: String,
	price: String,
	beckett_value: String,
	description: String,
	available: { type: String, default: 'Y'},
	created_at: { type: Date, default: Date.now }
})

// use the schema to create the model
// Note that creating a model creates the collection in the DB
// (makes the collection plural)
mongoose.model('Product', ProductSchema); 

// Notice that we aren't exporting anything -- this is because
// this file will be run when we require it using our config file
// and then since the model is defined we'll be able to access it
// from our controlller.