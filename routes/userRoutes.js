const express = require("express"),
      router = express.Router(),
      userController = require('../controller/userController');


router.get('/watching',userController.watching_get);
router.get('/bookmark',userController.bookmark_get);
router.get('/notification',userController.notification_get);
router.get('/profile',userController.profile_get);
router.get('/settings',userController.settings_get);

module.exports = router; 