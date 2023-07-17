const express = require("express"),
      router = express.Router(),
      {requireAuth,checkUser} = require('../middlewares/authMiddleware'),
      adminController = require('../controller/adminController');


router.get('/',(req,res)=> {
  res.render('admin') 
});
router.post('/movie/add', adminController.admin_getMovieDB)
router.post('/series/add', adminController.admin_getSerieDB)

module.exports = router;