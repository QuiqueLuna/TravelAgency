const express = require('express');
const cors = require('cors');
require('./database');
const Place = require('./models/Place');
const History = require('./models/History');
const User = require('./models/User');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/Purchases',async (req,res)=>{
    const places = await Place.find();
    res.json(places);
});

app.get('/Histories',async (req,res)=>{
    const histories = await History.find();
    res.json(histories);
});

app.get('/Users', async(req, res)=>{
    const users = await User.find();
    res.json(users);
});

app.post('/History', async(req, res)=>{
    const {name, location, description, image, price} = req.body;
    const history =  await History.findOne({name: name});
    if(history==null){
        const newHistory = new History({
            name: name,
            location: location,
            description: description,
            image: image,
            price: price
        });
        await newHistory.save();
        res.json({message: 'Saved in history'});
    }
    else if(name===history.name){
        res.json({message: 'Already Exists'});
    }
});

app.post('/', async(req,res)=>{
    const {name, location, description, image, price} = req.body;
    const newPlace = new Place({
        name: name,
        location: location,
        description: description,
        image: image,
        price: price
    });
    await newPlace.save();
    res.json({message: 'Purchased'});
});

app.post('/Login', async(req, res)=>{
    const {email, password} = req.body;
    const userCheck = await User.findOne({email: email, password: password});
    if(userCheck==null){
        res.json({message: 'Incorrect Data'});
    }else if(email===userCheck.email && password===userCheck.password){
        res.json({name: userCheck.name, email:userCheck.email});
    }
});

app.post('/Register', async(req, res)=>{
    const {name, email, password} = req.body;
    const user = await User.findOne({email: email});
    if(user==null){
        const newUser= new User({
            name: name,
            email:email,
            password: password
        });
        await newUser.save();
        res.json({message: 'User Registered'});
    }else if(name===user.name){
        res.json({message: 'User Already Exists'});
    }
});

app.delete('/:id',async (req,res)=>{
    await Place.findByIdAndDelete(req.params.id);
    res.json({message: 'Purchase removed'});
});

app.delete('/Histories/:id', async(req, res)=>{
    await History.findByIdAndDelete(req.params.id);
    res.json({message: 'History removed'});
});

app.delete('/Users/:id', async(req, res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.json({message: 'User removed'});
});

app.listen(4000,()=>{
    console.log("listening to port 4000");
});