const express = require('express');
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const cors = require('cors');
const app =express();

app.use(bodyParser.json());
app.use(cors());

const PORT = 8000;
const DB_URL = 'mongodb+srv://Kamindu_99:Kamindu1234@agriculturemanagementsy.p5jon.mongodb.net/AgricultureDB?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('DataBase Connected Successful');
})
.catch((err)=>console.log('DataBase Connection Error',err));

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});

const equipmentRoute=require('./routes/AgriEquipment');
app.use("/agriequipment",equipmentRoute);

const seedRoute=require('./routes/AgriSeed');
app.use("/agriseed",seedRoute);

const plantRoute=require('./routes/AgriPlant');
app.use("/agriplant",plantRoute);

const fertilizerRoute=require('./routes/AgriFertilizer');
app.use("/agrifertilizer",fertilizerRoute);

const agrochemicalRoute=require('./routes/AgroChemical');
app.use("/agrochemical",agrochemicalRoute);

const contactusRoute=require('./routes/Contactus');
app.use("/contactus",contactusRoute);



