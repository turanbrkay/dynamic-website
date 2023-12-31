const UserDB = require('../models/users'),
      jwt = require('jsonwebtoken'); 


const maxAge = 60*60*24;
const createToken = (id) => {
  return jwt.sign({id},'firmino',{expiresIn:maxAge});
}

const login_post = async (req,res) => {
  const { username, password} = req.body;
  try {
    const user = await UserDB.login(username,password);
    const token = createToken(user._id);
    res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
    res.redirect('/home');
  }
  catch(e) {
    console.log(e);
  } 
}
const signup_post = (req,res) => {
  const user = new UserDB(req.body);
  user.save()
    .then((result) => {
      res.redirect('/home');
    })
    .catch((err) => {
      console.log(err);
    })
}
const logout_get = (req,res) => {
  res.cookie('jwt','',{maxAge:1});
  res.redirect('/home');
}

/*const login_get = (req,res) => {
  res.render('login');
}
const signup_get = (req,res) => {
  res.render('signup');
}*/

module.exports = {

  login_post,
  signup_post,
  logout_get
}