const BodyData = require("../models/BodyData");

module.exports = {
  create: (body,user) => {
    const bodY = Object.assign(body, {userId: user})
    const newBody = new BodyData(bodY);
    return newBody.save();
  },
  getBodyData: (bodyId) => BodyData.findById(bodyId),
  getAllBodyData: (userId) => BodyData.find({userId:userId, is_active: true}),
  updateBodyData: (oldData, newData) => {
    Object.assign(oldData, newData);
    return oldData.save();
  },
};
