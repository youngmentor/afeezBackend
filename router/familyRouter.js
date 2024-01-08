// routes/familyRoutes.js
const express = require('express');
const router = express.Router();
const {signUp} = require('../controller/familyController');
const uploading = require('../utils/multer');

router.post('/upload', uploading,signUp);

module.exports = router;
