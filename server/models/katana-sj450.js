const mongoose = require("mongoose");


const katanasj450Schema = new mongoose.Schema({
   model: String,
   cuttingArea: String,
   Kerf: String,
   abrasiveRate: String,
   powerRequirement: String,
 });


 const katanasj450 = mongoose.model('Katanasj450', katanasj450Schema);


 module.exports = katanasj450;