const express = require("express"),
      router = express.Router(),
      adminController = require('../controller/adminController');


router.get('/admin',(req,res)=> {
  res.render('admin') 
});
router.post('/admin/movie/add', adminController.admin_getMovieDB)
router.post('/admin/series/add', adminController.admin_getSerieDB)

module.exports = router;