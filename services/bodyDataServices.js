const BodyData = require("../models/BodyData");

module.exports = {
  create: (body) => {
    const newBody = new BodyData(body);
    return newBody.save();
  },
  getBodyData: (bodyId) => BodyData.findById(bodyId),
  getAllBodyData: (userId) => BodyData.find({user:userId}),
  updateBodyData: (oldData, newData) => {
    Object.assign(oldData, newData);
    return oldData.save();
  },
};
