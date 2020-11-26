const db = require('./db')

const UserSchema = new db.mongoose.Schema({
  
    mobile:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    headicon:String,
    gender:Number
})


module.exports = db.mongoose.model ('user',UserSchema)