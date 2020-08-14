const express = require('express');
const router = express.Router();
const bodyRoutes = require('./bodyRoutes');
const userRoutes = require('./userRoutes');

router.get('/', (req,res) => res.status(200).send({message: 'Server on'}));
router.use(userRoutes);
router.use('/users',bodyRoutes);

module.exports = router;