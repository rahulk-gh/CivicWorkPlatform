const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const cookies = require('cookie-parser');
router.use(cookies());

router.use("/", userRoutes);

module.exports = router;
