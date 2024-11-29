const mongoose = require("mongoose");


const katanasj700Schema = new mongoose.Schema({
   model: String,
   cuttingArea: String,
   Kerf: String,
   abrasiveRate: String,
   powerRequirement: String,
 });


 const katanasj700 = mongoose.model('Katanasj700', katanasj700Schema);


 module.exports = katanasj700;