const  mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deginationschema = new Schema({
   deginationname:String 
    
})
module.exports = mongoose.model('degination',deginationschema,'degination')