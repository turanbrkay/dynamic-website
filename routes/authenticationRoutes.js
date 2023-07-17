const express = require("express"),
      router = express.Router(),
      authenticationController = require('../controller/authenticationController');

router.get('/login',authenticationController.login_get);      
router.post('/login',authenticationController.login_post);   
router.get('/signup',authenticationController.signup_get);   
router.post('/signup',authenticationController.signup_post);   
router.get('/user/logout',authenticationController.logout_get);   

module.exports = router;