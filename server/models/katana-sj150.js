const mongoose = require("mongoose");


const katanasj150Schema = new mongoose.Schema({
   model: String,
   cuttingArea: String,
   Kerf: String,
   abrasiveRate: String,
   powerRequirement: String,
 });


 const katanasj150 = mongoose.model('Katanasj150', katanasj150Schema);


 module.exports = katanasj150