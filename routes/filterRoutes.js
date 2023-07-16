const express = require("express"),
      router = express.Router(),
      filterController = require('../controller/filterController');


router.get('/filter',filterController.filter_getAllDB);

module.exports = router;