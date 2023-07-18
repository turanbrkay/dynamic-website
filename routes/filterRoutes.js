const express = require("express"),
      router = express.Router(),
      filterController = require('../controller/filterController');


router.get('/movie',filterController.filter_movieAllDB);
router.get('/tv',filterController.filter_serieAllDB);

module.exports = router;