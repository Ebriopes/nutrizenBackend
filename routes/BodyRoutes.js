const bodyDataController = require('../controllers/bodyDataController');
const express = require('express');
const route = express.Router();

route.get('/:id/bodies',			bodyDataController.getAllBodyData);
route.get('/:id/bodies/:bodyId',	bodyDataController.getBodyData);
route.post('/:id/bodies', 			bodyDataController.create);
route.put('/:id/bodies/:bodyId', 	bodyDataController.updateBodyData);
route.delete('/:id/bodies/:bodyId', bodyDataController.deleteBodyData);

module.exports = route;
