const mongoose = require('mongoose');

const bodyDataSchema = new mongoose.Schema({
    checkdate: {
      type: String,
      required: true
    },
    weight: {
        type: Number,
        required: true
      },
    bmi: Number,
    bodyfat: {
        type: Number,
        required: true
    },
    musclemass: {
        type: Number,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    user: { type: Schema.ObjectId, ref: "User" } 
  }, {timestamps: true})
    
  const BodyData = mongoose.model('BodyData', bodyDataSchema);
  
  module.exports = BodyData