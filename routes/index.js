const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const bodyRoutes = require('./bodyRoutes');

router.get('/', (req,res) => res.status(200).send({message: 'Server on'}));
router.use(userRoutes);
router.use('/users',bodyRoutes);

module.exports = router