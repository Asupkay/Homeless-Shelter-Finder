const express = require("express");
const router = express.Router();
const data = require("../data");
const shelterData = data.shelters;
require('dotenv').config();


var NodeGeocoder = require('node-geocoder');
 
var options = {
  provider: 'google',
 
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: process.env.SECRET_KEY, // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};
 
var geocoder = NodeGeocoder(options);
 

async function getLatLong(address){
    // Using callback

    console.log(" latlongFUNCTION called");

    let res = await geocoder.geocode(address);
    latLongObj ={
        lat:res[0].latitude,
        long: res[0].longitude
    };
    console.log(latLongObj);
    return latLongObj;

}


router.post("/v1/shelters", async function(req,res){
    console.log("shelter create");
    try{

        console.log("before variables");
        var shelterName = req.body.name;
        var shelterAddress = req.body.address;
        console.log("after variables");

        const latLong = await getLatLong(shelterAddress);
        console.log("after latlong call");

        console.log("latLong after call" +latLong);
        var lat = latLong.lat;
        var long = latLong.long;
        console.log("after lat long variables");

        let shelter = await shelterData.createShelter(shelterName,shelterAddress,lat,long,[]);
        console.log("after create shelter call");

        res.json({
            shelter
        });

    }
    catch(e){
        res.status(500).json({error:"shelter post error"});
    }
});

router.get("/v1/shelters", async function(req,res){

    console.log("SHELTER GET");

    try{
        const shelters = await shelterData.getAllShelters();
        console.log("after get all shelters function")
    
        res.json({
            shelters: shelters 
         });

    }
    catch(e){
        res.status(500).json({error: "shelter get error"});
    }
});

router.post("/v1/tasks",async function(req,res){
    try{
        var taskName = req.body.task.name;
        var taskSkill = req.body.task.skill;
        var taskDesc = req.body.task.desc;
        var contact = req.body.task.contact;
        var shelterId = req.body.shelterId;
        

        shelterData.addTask(shelterId,taskName,taskSkill,taskDesc,contact);

        res.json({
            data:'success'
        });

    }
    catch(e){
        res.status(500).json({error: "task post error"});
    }
});

router.get("/v1/tasks",async function(req,res){

    try{
        const shelterId = req.query.shelterId;

        const tasks = await shelterData.getTasks(shelterId);

        res.json({
           tasks: tasks 
        });
    }
    catch(e){
        res.status(500).json({error: "task get error"});

    }
});


router.put("/v1/tasks", async function(req,res){
    try{
        var shelterId = req.body.shelterId;
        var taskId = req.body.task.taskId;
        var newTask = req.body.task;

        console.log("UPDATED TASK: "+JSON.stringify(newTask));

        shelterData.updateTask(shelterId,taskId,newTask);


        res.json({
            data:'success'
        });
    }
    catch(e){
        res.status(500).json({error: "task put/update error"});

    }

});

router.delete("/v1/tasks", async function(req,res){
    try{
        var shelterId = req.body.shelterId;
        var taskId = req.body.taskId;

        shelterData.deleteTask(shelterId,taskId);

        res.json({
            data:'success'
        });

    }
    catch(e){
        res.status(500).json({error: "task delete error"});

    }

});

module.exports = router;
