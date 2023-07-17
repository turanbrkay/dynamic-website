const jwt = require('jsonwebtoken'),
      UserDB = require('../models/users');


const requireAuth = (req,res,next) => {
  const token = req.cookies.jwt;

  if(token) {
    jwt.verify(token,'firmino', (err,decodedToken) => {
      if(err){
        console.log(err);
        res.redirect('/login');
      }else {
        console.log(decodedToken);
        next();
      }
    })
  }else {
    res.redirect('/login');
  }

}

const checkUser = (req,res,next) => {
  const token = req.cookies.jwt;

  if(token) {
    jwt.verify(token,'firmino', async (err,decodedToken) => {
      if(err){
        console.log(err);
        res.locals.user = null;
      }else {
        console.log(decodedToken);
        let user = await UserDB.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    })
  }else {
    res.locals.user = null;
    next();
  }
}

module.exports = {
  requireAuth,
  checkUser
}