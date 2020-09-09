const  mongoose = require('mongoose');
var Schema = mongoose.Schema;
var adminschema = new Schema({
    email:String,
    password:String
})
module.exports = mongoose.model('admin',adminschema,'admin')