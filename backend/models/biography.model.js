const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const biographySchema = new Schema({
  username: { type: String, required: true },
  topic:{type:String,required:true},
  tag:{type:String,required:true},
  about: { type: String, required: true },
  learntrait:{type:String,required:true},
  description: { type: String, required: true },
}, {
  timestamps: true,
});

const Biography = mongoose.model('Biography', biographySchema);

module.exports = Biography;
