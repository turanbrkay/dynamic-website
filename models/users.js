const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      bcrypt = require('bcrypt');

const usersSchema = new Schema({
  username:{
    type: String,
    required: true,
    unique:true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password:{
    type: String,
    required: true
  }
}) 

usersSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password,salt);
  next();
})

usersSchema.statics.login = async function(username, password) {
  const user = await this.findOne({username});
  if(user) {
    const auth = await bcrypt.compare(password,user.password);
    if(auth){
      return user;
    }else {
      throw Error("Wrong password")
    }
  }else {
    throw Error("User not found")
  }
}

const UserDB = mongoose.model('UserDB',usersSchema);
module.exports = UserDB;