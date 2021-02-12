var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    fname: { type: String, required: [true, 'please provide your name'] },
    lname: { type: String, required: [true, 'please provide your name'] },
    email: { type: String, required: [true, 'please provide your email'] },
    message: { type: String, required: [true, 'please provide your message'] },

}, { collection: 'contact' });

module.exports = mongoose.model('Contact', contactSchema);