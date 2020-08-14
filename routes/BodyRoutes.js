const bodyDataController = require('../controllers/bodyDataController');
const express = require('express');
const route = express.Router();

route.get('/bodyId', bodyDataController.getAllBodyData);
route.get('/bodyId/:dataId', bodyDataController.getBodyData);
route.post('/bodyId', bodyDataController.create);
route.put('/bodyId/:dataId', bodyDataController.updateBodyData);
route.delete('/bodyId/dataId', bodyDataController.deleteBodyData);

module.exports = route;
