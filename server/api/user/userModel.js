const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  users : {
    username:{
    type: String,
    unique: true,
    required: true
  },
  posts: {
    ref: 'posts', type: Schema.Types.ObjectId
  }
}
});

module.exports = mongoose.model('user', UserSchema);