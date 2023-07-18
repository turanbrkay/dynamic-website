


const watching_get = (req,res) => {
  res.render('user/watching');
}

const bookmark_get = (req,res) => {
  res.render('user/bookmark');
}

const notification_get = (req,res) => {
  res.render('user/notification');
}

const profile_get = (req,res) => {
  res.render('user/profile');
}

const settings_get = (req,res) => {
  res.render('user/settings');
}

module.exports = {
  watching_get,
  bookmark_get,
  notification_get,
  profile_get,
  settings_get
}