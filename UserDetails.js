//make schema for data
const mongoose = require('mongoose');

//so create a user schema, that is in the collection UserInfo
const User = new mongoose.Schema({
      //make the name unique
      name:{type: String, unique: true},
      //initialize health as an empty array so later wecan change things 
      health:{type: Array, default:[]}
}, {
    collection:"UserInfo"
});

//export this schema
mongoose.model("UserInfo", User)

//edit user data structure so that it also holds this the different values 