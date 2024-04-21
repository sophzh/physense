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

        // Check if the name is empty
    if (!name) {
            res.send({status:'ok', data: "empty"})
        }

    //try to find the user
    else{
        const oldUser = await User.findOne({name:name})
        if(oldUser){
         res.send({status:"ok", data: "olduser"})
     }
     else{
        try{
        //try to create User name
        //tells it to create a user and give it the name name
         const newUser = await User.create(
            //first name is refereing to name in the schema, the second name is reerring from the req.body
                {name:name});
            //send some response back to the app
                res.send({status:"ok", data: "newUser"})

     } catch(error){
         res.send({status:"error", data:error})
        }}}
})

//make an api for adding a new value into the array 
app.post('/AddHealthData', async(req,res)=>{
    console.log(req);
    //get the health value 
    const health = parseInt(req.body.health);
    //grab what is sent to name
    const username = req.body.name;

    //find the user based on the username
    const person = await User.findOne({name:username})

    if (person) {
        person.health.push(health); // Assuming `health` is an array in the user document
      
        // Save the updated user document
        await person.save();
      
        console.log('Health value pushed:', health);
        res.send({ message: 'Health value pushed', health: health });
      } else {
        // Handle the case where the user is not found
        console.log('User not found');
        res.send({ message: 'User not found' });
      }
})

//make an api that sends the users health info 
app.get('/sendHealthData', async(req,res)=>{
    try {
        // Assuming you have some logic to identify the user, e.g., from the request headers or authentication
        const username = req.username; // Get the username

        // Retrieve the user's health information from the database using name
        const user = await User.findOne({name:username})

        // Check if the user exists
        if (!user) {
            return res.send({ status: 'error', message: 'User not found' });
        }

        // Extract the health information from the user object (this depends on your User model structure)
        const healthData = user.health

        // Send the user's health information as the response
        res.send({ status: 'success', data: healthData });

    } catch (error) {
        console.error('Error sending health data:', error);
        res.send({ status: 'error', message: 'Internal server error' });
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