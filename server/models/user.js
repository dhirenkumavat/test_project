const  mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userschema = new Schema({
     fristname:{type:String,required:true},
     lastname:{type:String,required:true},
     email:{type:String,required:true},
     password:{type:String,required:true},
     mobile :{type:String,required:true},
     address:{type:String,required:true},
     degination:{type:String,required:true},
     stats:{type:String,required:true},
    
})
module.exports = mongoose.model('user',userschema,'users')