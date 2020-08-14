const express = require('express');
const router = express.Router();
const BodyRoutes = require('./BodyRoutes');
const userRoutes = require('./userRoutes');

router.get('/', (req,res) => res.status(200).send({message: 'Server on'}));
router.use(userRoutes);
router.use('/users',BodyRoutes);

module.exports = router;