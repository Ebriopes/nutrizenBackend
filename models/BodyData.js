const mongoose = require('mongoose');
const userS = require('../services/userServices')

const bodyDataSchema = new mongoose.Schema({
  userId: String,
  checkdate: String,
    weight: {
        type: Number,
        required: true
      },
    bmi: Number,
    bodyfat: Number,
    musclemass: Number,
    calories: Number,
    is_active: {
        type: Boolean,
        default: true
    },
  }, {timestamps: true})
    
  bodyDataSchema.pre('save', async function (next){
    const body = this;
    try {
      const user = await userS.getUser(body.userId);
      body.bmi = 10000 * body.weight / (user.height*user.height)
      next()
    } catch (error) {
      next(error);
    }
  })
  const BodyData = mongoose.model('BodyData', bodyDataSchema);
  
  module.exports = BodyData