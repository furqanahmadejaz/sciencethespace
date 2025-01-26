const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true

    },
    password:{
        type: String,
        required: true
    }
})

userSchema.statics.signup = async function (email, password){
    
    if(!email || !password){
        throw Error('Please fill all fields')
    }
    const exists = await this.findOne({email})

    if(exists){
        throw Error('This email is already registered')
    }
    if(!validator.isEmail(email)){
        throw Error('Please enter a valid email')
    }

    if(password.length < 8){
        throw Error('Password length is less than 8 ')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt);
    
    const user = await this.create({email, password: hash})
    return user;

}

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Please fill all fields");
  }
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("This email is not registered");
  }

  const match = await bcrypt.compare(password, user.password)
  if(!match){
    throw Error("The password is incorrect")
  }
  
  return user;
};

module.exports = mongoose.model("User", userSchema)