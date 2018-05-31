const mongoose = require('mongoose')
      Schema = mongoose.Schema;

const shortid = require('short-id');

module.exports = mongoose.model('urls', new Schema({
  url: {
    type: String,
    required: true
  },
  expire_at: {
    type: Date,
    default: Date.now,
    expires: 1800 // 30 minutes
  },
  _id: {
    type: String,
    default: shortid.generate
  }
}))