const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json())

//give url 
const mongoUrl = "mongodb+srv://gonickava:Mall8526@cluster0.nfsadew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//connect
mongoose.connect(mongoUrl).then(()=>{console.log("Database connected");
})
.catch((e)=>{
    console.log(e);
});



//make register api
//req from react and res from nodejs
//grab the UserDetials made in the order file. so grab that file
require('./UserDetails')
//grab usermodel made
//fetch details in mongdodb userinfo collection
const User=mongoose.model("UserInfo")


//makes the api called / means if using the code 3000 this api will eb called
//req is outsider application and response is provided by this application 
app.get('/', (req,res)=>{
    res.send({status:"stats"})

})
app.post('/register', async(req,res)=>{
    console.log(req);
    //get name that want
    const {name} = req.body;

    try{
        //try to create User name
        //tells it to create a user and give it the name name
        await User.create(
            //first name is refereing to name in the schema, the second name is reerring from the req.body
            {name:name});
            //send some response back to the app
            res.send({status:"ok", data:"userCreated"})

    } catch(error){
        res.send({status:"error", data:error})
    }


})

app.listen(3000,()=>{
    console.log("Node JS is started");
})

//difference between get and post
//post frontend and backend app
//frontend gets api without data and posts backend data then gets some response this is get
//in past the front get api with data and backend gets the data and backend works with that data and generate output and send back to frontend

//this started server and made get api
//time integrate mongo.