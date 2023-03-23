const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/travelAgency',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('DB connected')
});