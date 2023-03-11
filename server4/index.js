const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const app = express();

// Define user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Create user model
const User = mongoose.model('User', userSchema);

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://perry:1234@user.ss2wa.mongodb.net/employee?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongosDB Atlas');
}).catch((err) => {
  console.error(err);
});

// Parse JSON requests
app.use(express.json());
app.use(cors());
// Handle signup request
// app.post('/auth/sign-up', (req, res) => {
//   const { name, email, password } = req.body;

//   // Create and save a user
//   const user = new User({
//     name,
//     email,
//     password
//   });

//   user.save().then(() => {
//     console.log('User saved to MongoDB Atlas');
//     res.status(200).json({ message: 'User saved to MongoDB Atlas' });
//   }).catch((err) => {
//     console.error(err);
//     res.status(500).json({ message: 'Failed to save user to MongoDB Atlas' });
//   });
// });

app.get("/getAllusers",async(req,res)=>{
    try{
        const alluser=await User.find({})
        res.send({data:alluser});
    }
    catch(err){
        console.log('err', err)
    }
})
let MongoClient = require('mongodb').MongoClient;

app.post("/adduser",async(req,res)=>{
    try{
        const name=req.body.name;
        const email=req.body.email;
        const password=req.body.password;
        const user = await User.create({ name,email, password });
        // res.status(201).json({ user: user._id, created: true });
        // User.save(user);
        await user.save();
        console.log(name+email+" created");
        
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
        res.send({data:user})
    }
    catch(err){
        console.log(err);
    }
})

app.listen(4000, () => {
  console.log('Server started');
});