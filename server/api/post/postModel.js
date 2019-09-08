const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    posts: {
      title: String,
      text: String,
      author: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
      },
      categories: [{
        type: Schema.Types.ObjectId,
        ref: 'category'
      }]
    },
});

module.exports = mongoose.model('post', PostSchema);
