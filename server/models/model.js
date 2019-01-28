var mongoose = require('mongoose')
var gObjectSchema = new mongoose.Schema({
  title: {type:String, required:true, minlength:3},
  // url: {type:String, required:true, minlength:3},
  // rating:{type:Number, required:true, min:1, max:5}
  reviews:[{
    name: {type:String, required:true, minlength:3},
    rating:{type:Number, default:5},
    comment:{type:String, minlength: 3}
  }]
})
var gObject = mongoose.model('gObject', gObjectSchema);
module.exports = gObject;
