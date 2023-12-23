

const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000
const User = require("./model/userSchema")
 const DB = 'mongodb+srv://tannu:1234@cluster0.k7ybicw.mongodb.net/tul?retryWrites=true&w=majority'


const path = require('path')


mongoose.connect(DB).then(() => {
    console.log("connection successful")
}).catch((err) => console.log("no connection"));


app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  
app.use(express.json());

app.post('/register', async (req, res) =>{
    const {  email , pwd} = req.body;
    if( !email || !pwd){
        // return res.json({error : "Please fill all fields"});
        return res.status(422).json({error : "Please fill all fields"});
    }

    try{
                                                       //!st email is of database email and 2nd is of registration time email
    {
            const user = new User({ email , pwd});

        await user.save();
            res.status(201).json({message: "user registered successfully"});
        }
    }catch(err){
        console.log(err);
    }
});



app.get('/', (req, res) => {
    res.send('Hello world form the server');
});



app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`);
})
