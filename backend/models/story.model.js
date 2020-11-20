const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storySchema = new Schema({
  username: { type: String, required: true },
  topic:{type:String,required:true},
  keypoints:{type:String,required:true},
  tag:{type:String,required:true},
  description: { type: String, required: true },
}, {
  timestamps: true,
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story;
