const bodyDataServices = require('../services/bodyDataServices');

module.exports = {
  create: async(req, res) => {
    try {
      const body = await bodyDataServices.create(req.body);
      res.status(201).send({body});
    } catch (error) {
      res.status(409).send({error});
    }
  },
  getAllBodyData: async(req, res)=>{
    try {
      const body = await bodyDataServices.getAllBodyData(req.params.id);
      res.status(200).send({body});
    } catch (error) {
      res.status(404).send({error});
    }
  },
  updateBodyData: async(req, res)=>{
    try {
      const body = await bodyDataServices.getBodyData(req.params.bodyId);
      const modifiedBodyData = await bodyDataServices.updateBodyData(body, req.body);
      res.status(200).send({body: modifiedBodyData});
    } catch (error) {
      res.status(404).send({error});
    }
  },
  deleteBodyData: async(req, res)=>{
    try {
      const body = await bodyDataServices.getBodyData(req.params.bodyId);
      await bodyDataServices.updateBodyData(body, {is_active: false});
      res.status(200).send({message: 'Body Data Record Deleted'});
    } catch (error) {
      res.status(404).send({error});
    }
  }
}